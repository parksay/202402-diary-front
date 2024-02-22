const globalFunctions = {
  getLoginInfo() {
    return JSON.parse(localStorage.getItem("loginInfo"));
  },
};

export default {
  install(Vue) {
    Vue.config.globalProperties.$globalFunctions = globalFunctions;
  },
};
