  <template lc_id="GWGSFjvJGS">
      <div lc_id="mhJfF7mAeh">
          <div lc_id="OyEvjlhxKG">
              <div class="demonstration-element" lc_id="jS8CODuZ8w">Basic Progress</div>
              <el-progress lc-mark :percentage="50" lc_id="5KIZ/gMvgA"></el-progress>
              <el-progress lc-mark :percentage="100" :format="format" lc_id="andEKznPJm"></el-progress>
              <el-progress lc-mark :percentage="100" status="success" lc_id="+c55Mhr6qb"></el-progress>
              <el-progress lc-mark :percentage="100" status="warning" lc_id="aVjnu79qzU"></el-progress>
              <el-progress lc-mark :percentage="50" status="exception" lc_id="BxPH8oVBkr"></el-progress>
          </div>
          <div lc_id="NZyu36Hfnv">
              <div class="demonstration-element" lc_id="KlaxLO85mW">Basic Tree</div>
              <el-tree lc-mark :data="data" :props="defaultProps" @node-click="handleNodeClick" lc_id="6tm3Um6sZv"></el-tree>
          </div>
          <div lc_id="EvD0rnh0sk">
              <div class="demonstration-element" lc_id="gunUjt4svK">Basic Badge</div>
              <el-badge lc-mark :value="12" class="item" lc_id="64M0gaQZnd">
                  <el-button size="small" lc_id="EwFjRB81yT">Comment</el-button>
              </el-badge>
              <el-badge lc-mark :value="3" class="item" lc_id="haDOmCEsNH">
                  <el-button size="small" lc_id="iZtMs8mOnw">Reply</el-button>
              </el-badge>
              <el-badge lc-mark :value="1" class="item" type="primary" lc_id="yraq608Lcr">
                  <el-button size="small" lc_id="B1N0ns/Uyn">Comment</el-button>
              </el-badge>
              <el-badge lc-mark :value="2" class="item" type="warning" lc_id="h8tv/EwcbE">
                  <el-button size="small" lc_id="8NG966mGav">Reply</el-button>
              </el-badge>
          </div>
          <div lc_id="sTqskem3tG">
              <div class="demonstration-element" lc_id="WP+GGVOxkS">Alert Notice</div>
              <el-alert lc-mark title="The text of the success prompt" type="success" lc_id="x1p2XMUWDM"></el-alert>
              <el-alert lc-mark title="The text of the message prompt" type="info" lc_id="gA2WmaOkII"></el-alert>
              <el-alert lc-mark title="The text of the alert prompt" type="warning" lc_id="0oa8HxAIjm"></el-alert>
              <el-alert lc-mark title="The text of the error prompt" type="error" lc_id="okpJNZagox"></el-alert>
          </div>
          <div lc_id="Hr+gUUgFTD">
              <div class="demonstration-element" lc_id="EAnxv9IwcJ">Tabs TabPages</div>
              <el-tabs lc-mark v-model="activeName" @tab-click="handleClick" lc_id="7TSxFc1h/T">
                  <el-tab-pane label="User Management" name="first" lc_id="nESAhjJD5+">User Management</el-tab-pane>
                  <el-tab-pane label="Configuration Management" name="second" lc_id="GS8HXVlmCM">Configuration Management</el-tab-pane>
                  <el-tab-pane label="Role Management" name="third" lc_id="/jr8Mrluge">Role Management</el-tab-pane>
                  <el-tab-pane label="Timed Task Compensation" name="fourth" lc_id="CYHnAsRUdX">Timed Task Compensation</el-tab-pane>
              </el-tabs>
          </div>
          <div lc_id="0MpXv/hB5o">
              <div class="demonstration-element" lc_id="cXJHcFnFGI">Breadcrumb Navigation</div>
              <el-breadcrumb separator="/" lc-mark lc_id="2kbMFsaBlw">
                  <el-breadcrumb-item :to="{ path: '/' }" lc_id="Y24a1lsayw">Home</el-breadcrumb-item>
                  <el-breadcrumb-item lc_id="e7mudUt3T2">
                      <a href="/" lc_id="2fk4blwWt1">Activity Management</a>
                  </el-breadcrumb-item>
                  <el-breadcrumb-item lc_id="0uAUe0LS1k">Activity Lists</el-breadcrumb-item>
                  <el-breadcrumb-item lc_id="vTAj15QynT">Activity Details</el-breadcrumb-item>
              </el-breadcrumb>
          </div>
          <div lc_id="VliPzBWiIr">
              <div class="demonstration-element" lc_id="URE6411ToF">PageHeader PageHeader</div>
              <el-page-header lc-mark @back="goBack2" content="Details Page" lc_id="VeIIrZpasX"></el-page-header>
          </div>
          <div lc_id="q1K7UjfQRh">
              <div class="demonstration-element" lc_id="QRo+LiBcqY">Dropdown Menu</div>
              <el-dropdown lc-mark lc_id="eEugqtt2Ed">
                  <span class="el-dropdown-link" lc_id="T9RXOuEAsg">Dropdown Menu</span>
                  <template #dropdown lc_id="Jgi+BtUZkP">
                      <el-dropdown-menu lc_id="fyNKB1+0hw">
                          <el-dropdown-item lc_id="nCNWPghXw7">Option 1</el-dropdown-item>
                          <el-dropdown-item lc_id="3moaMHtIVR">狮子头</el-dropdown-item>
                          <el-dropdown-item lc_id="zeDetbgzeN">螺蛳粉</el-dropdown-item>
                          <el-dropdown-item disabled lc_id="590JIX3HSV">Option 2</el-dropdown-item>
                          <el-dropdown-item divided lc_id="Svb2tOdBg/">Option 3</el-dropdown-item>
                      </el-dropdown-menu>
                  </template>
              </el-dropdown>
          </div>
          <div lc_id="qp0NNdlqXq">
              <div class="demonstration-element" lc_id="RGehF229fc">Step Bar</div>
              <el-steps lc-mark :active="active" finish-status="success" lc_id="2yxeEC6GkQ">
                  <el-step title="Step 1" lc_id="IA1KW5Gwpv"></el-step>
                  <el-step title="Step 2" lc_id="sGjhJUaXCP"></el-step>
                  <el-step lc-mark title="Step 3" lc_id="gS1/xHiigS"></el-step>
              </el-steps>
          </div>
          <div lc_id="EduDP6YT5B">
              <div class="demonstration-element" lc_id="5Ryo1lT9Ri">Basic Card</div>
              <el-card lc-mark class="box-card" lc_id="f7u3JZOXiY">
                  <template #header lc_id="fcNx1E9u+l">
                      <div class="clearfix" lc_id="JjiI6DiLa8">
                          <span lc_id="HyznGRyy1o">Card Name</span>
                          <el-button style="float: right; padding: 3px 0" type="text" lc_id="2BV+GEiJPf">Action Button</el-button>
                      </div>
                      <div v-for="o in 4" :key="o" class="text item" lc_id="WrqZOeR62/">{{ "List Content " + o }}</div>
                  </template>
              </el-card>
          </div>
          <div lc_id="Ac3U6soq4v">
              <div class="demonstration-element" lc_id="yHQSJ5j0qr">Basic Carousel</div>
              <el-carousel height="150px" lc-mark lc_id="pf7cTX05Pe">
                  <el-carousel-item v-for="item in 4" :key="item" lc_id="LWxEwOsKCc">
                      <h3 class="small" lc_id="rY5AkL9779">{{ item }}</h3>
                  </el-carousel-item>
              </el-carousel>
          </div>
          <div lc_id="h98mxV67rm">
              <div class="demonstration-element" lc_id="YCdpR3F66X">Basic Collapse</div>
              <el-collapse lc-mark v-model="collapseActiveNames" @change="handleChange3" lc_id="SxwGYgpIAH">
                  <el-collapse-item title="Consistency" name="1" lc_id="9tnnQx3Q6z">
                      <div lc_id="nEOQzKpL2r">Consistent with real life: It is consistent with the process and logic of real life, and follows the language and concepts that users are used to;</div>
                      <div lc_id="dAI8bwEYNq">Be consistent in the interface: All elements and structures need to be consistent, such as: design styles, icons and text, position of elements, etc.</div>
                  </el-collapse-item>
                  <el-collapse-item title="Feedback" name="2" lc_id="B1Egey2IgT">
                      <div lc_id="XNb772hFlA">Control feedback: through interface style and interactive dynamic effects, users can clearly perceive their own operations;</div>
                      <div lc_id="p/6OnJUnHn">Page feedback: After the operation, the current status is clearly displayed through the changes of page elements.</div>
                  </el-collapse-item>
                  <el-collapse-item title="Efficiency" name="3" lc_id="Xq2hL9btvR">
                      <div lc_id="fCqY57GW+o">Simplify the process: design a simple and intuitive operation process;</div>
                      <div lc_id="O1v1vIbqMk">Clarity: clear and unambiguous language that allows users to quickly understand and make decisions;</div>
                      <div lc_id="oXshK9bC/I">Helping users to identify: the interface is simple and straightforward, allowing users to quickly identify rather than recall, reducing their memory burden.</div>
                  </el-collapse-item>
                  <el-collapse-item title="Controllability" name="4" lc_id="POyL7FoSe4">
                      <div lc_id="DR+xM6f78t">User decision-making: depending on the scenario, the user may be given operational advice or safety tips, but cannot replace the user in decision-making;</div>
                      <div lc_id="2g+ldln/84">Controllable results: the user is free to perform actions, including undo, rollback and termination of the current operation.</div>
                  </el-collapse-item>
              </el-collapse>
          </div>
          <div lc_id="0kee2BlFsA">
              <div class="demonstration-element" lc_id="0EBCjFbCyA">Basic Timeline</div>
              <el-timeline :reverse="reverse" lc-mark lc_id="HcDb8BgA1w">
                  <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp" lc_id="lqCmZ7Zw9R">{{ activity.content }}</el-timeline-item>
              </el-timeline>
          </div>
          <div lc_id="G64C6Q7euE">
              <div class="demonstration-element" lc_id="DnbJwJg18E">Basic Calendar</div>
              <el-calendar lc-mark v-model="calendarValue" lc_id="yd4ddVWJ69"></el-calendar>
          </div>
          <div lc_id="BHDMhfXQP4"></div>
      </div>
  </template>
  <script>
export default {
  data() {
    return {
      url:
        "https://images.pexels.com/photos/5415707/pexels-photo-5415707.jpeg?auto=compress&cs=tinysrgb&w=800",
      calendarValue: new Date(),
      reverse: true,
      activities: [
        {
          content: "Events start on schedule",
          timestamp: "2018-04-15",
        },
        {
          content: "Passing the audit",
          timestamp: "2018-04-13",
        },
        {
          content: "Created successfully",
          timestamp: "2018-04-11",
        },
      ],
      collapseActiveNames: ["1"],
      active: 0,
      activeName: "second",
      activeIndex2: "1",
      data: [
        {
          label: "level 1",
          children: [
            {
              label: "level 1-1",
              children: [
                {
                  label: "level 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "level 2",
          children: [
            {
              label: "level 2-1",
              children: [
                {
                  label: "level 2-1-1",
                },
              ],
            },
            {
              label: "level 2-2",
              children: [
                {
                  label: "level 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "level 3",
          children: [
            {
              label: "level 3-1",
              children: [
                {
                  label: "level 3-1-1",
                },
              ],
            },
            {
              label: "level 3-2",
              children: [
                {
                  label: "level 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? "Full" : `${percentage}%`;
    },
    handleNodeClick() { },
    handleSelect() { },
    handleClick() { },
    goBack2() { },
    handleChange3(val) {
      console.log(val);
    },
  },
};  </script>
  <style scoped>.item {
  margin-top: 10px;
  margin-right: 40px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}</style>
