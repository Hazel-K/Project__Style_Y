import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 동적 메뉴 컨트롤
    dynamicMenus: {
      navBar: {
        isOpened: false
      },
      search: {
        isOpened: false
      },
      alarm: {
        isOpened: false
      }
    },
    // 유저 정보 컨트롤
    user: {
      isLogined: true,
      isAdmin: true
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
