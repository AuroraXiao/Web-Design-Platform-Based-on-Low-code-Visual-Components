
export default {
    // 登录
    login: [`v1/user/login`, "POST", "body"],

    // 注册
    register: [`v1/user/register`, "POST", "body"],

    // 保存代码
    saveCode: [`v1/project/save`, "POST", "body"],

    // 获取代码信息
    fetchCodeForEdit: [`v1/project/find`],

    // 获取代码信息
    fetchCodeForView: [`v1/project/piazza/find`],

    // 项目创建
    createProject: [`v1/project/create`, "POST", "body"],

    // 项目列表
    fetchProjectList: [`v1/project/list`],

    // 广场模板列表
    fetchPiazzaList: [`v1/project/piazza/list`],

    // 模板克隆
    cloneTemplate: [`v1/project/clone_template`, "POST", "body"],

    // 项目克隆
    cloneProject: [`v1/project/clone`, "POST", "body"],

    // 我发布的项目
    fetchMyRelease: [`v1/project/piazza/my_release`],

    // 发布项目至模板广场
    releaseToPiazza: [`v1/project/release`, "POST", "body"],

    // 项目删除
    deleteMyProject: [`v1/project/delete`, "POST", "body"],

    // 更新项目Name
    updateProjectName: [`v1/project/update`, "POST", "body"],

    // 获取当前用户基本信息
    fetchUserInfo: [`v1/user/user_info`]
}
