const DashboardPage = require("../../pages/dashboard.page");

class SideMenuComponent {
  get rootEl() {
    return $("#plannerSiderBar");
  }
  get name() {
    return this.rootEl.$(".name");
  }

  item(param) {
    const selectors = {
      dashsboard: '[routerlink="/dashboard"]',
      schedule: '[routerlink="/calendar"]',
      doctors: '[routerlink="/doctors"]',
    };
    return this.rootEl.$(selectors[param.toLowerCase()]);
  }
}

module.exports = SideMenuComponent;
