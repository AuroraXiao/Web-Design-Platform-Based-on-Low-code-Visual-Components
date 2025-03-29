import axios, { isCancel, CancelToken } from "axios";
import qs from "qs";
let cancelTokenList = new Set();
// const suffix = process.env.VUE_APP_APPID;
import _ from 'lodash';
import router from '../router';

function logout() {
    router.replace({
        name: 'Login'
    });
}

initToken();

// axios default config
// axios默认设置 30s超时时间
axios.defaults.timeout = 30 * 1000;
axios.defaults.baseURL = process.env.VUE_APP_ENV_PATH;

// check server status
axios.interceptors.response.use(
    (response) => {
        if (response.status === 401) {
            logout();
            throw new Error('401');
        }
        return { ...response.data };
    },
    (error) => {
        return Promise.reject(error);
    }
);

function request(url, options = {}) {
    let cancel;
    const defaultOptions = {
        url,
        credentials: "include",
        method: "GET",
        cancelToken: new CancelToken(function executor(c) {
            cancel = c;
            cancelTokenList.add(cancel);
        }),
        headers: {
            'Authorization': window.lcgConfig.token ? 'Bearer ' + window.lcgConfig.token : ''
        }
    };
    const newOptions = { ...defaultOptions, ...options };
    //  handle body request
    if (newOptions.body) {
        newOptions.data = qs.stringify(newOptions.body);
        delete newOptions.body;
    }
    // bodyJSON
    if (newOptions.bodyJSON) {
        newOptions.data = JSON.stringify(newOptions.bodyJSON);
        delete newOptions.bodyJSON;
    }

    newOptions.validateStatus = function (status) {
        return status >= 200 && status < 300 || status === 401;
    }

    return axios(newOptions).then(
        (data) => {
            cancel = null;
            cancelTokenList.delete(cancel);
            return data;
        },
        (error) => {
            cancel = null;
            if (isCancel(error)) {
                console.log("Request canceled", error.message);
                return new Promise(() => { });
            } else {
                throw error;
            }
        }
    );
}

/**
 * token初始化
 */
function initToken() {
    window.lcgConfig = {
        token: localStorage.getItem('token') || null
    }
}

function setToken(token) {
    if (token) {
        // token 存储
        localStorage.setItem('token', token);
    } else {
        localStorage.removeItem('token');
    }

    // 内存存储更快
    window.lcgConfig = {
        token: token
    }
}

function clearToken() {
    setToken(null);
}

export { cancelTokenList, request as default, setToken, clearToken }
