import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 공통 변수
    auth: "Authorization",
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
      isLogined: false,
      isAdmin: false,

      id: "",
      username: "",
      password: "",
      roles: "",
      nickname: "",
      fullname: "",
      zoneCode: "",
      address: "",
      addrDetail: "",
      idNumber: "",
      phone: "",
      email: ""
    }
  },
  mutations: {
    setUser: (state, payload) => {
      (async () => {
        try {
          let user = await Axios.get("getUser", { params: { payload } });
          state.user.isLogined = true;
          if (user.data.roles.indexOf("ROLE_ADMIN") != -1) {
            state.user.isAdmin = true;
          } else {
            state.user.isAdmin = false;
          }
          state.user.id = user.data.id;
          state.user.username = user.data.username;
          state.user.password = user.data.password;
          state.user.roles = user.data.roles;
          state.user.nickname = user.data.nickname;
          state.user.fullname = user.data.fullname;
          state.user.zoneCode = user.data.zoneCode;
          state.user.address = user.data.address;
          state.user.addrDetail = user.data.addrDetail;
          state.user.idNumber = user.data.idNumber;
          state.user.phone = user.data.phone;
          state.user.email = user.data.email;
        } catch {
          alert("로그인 정보가 만료되어 로그아웃 되었습니다.");
          // 유저정보 지우기
          state.user.isLogined = false;
          state.user.isAdmin = false;
          state.user.id = "";
          state.user.username = "";
          state.user.password = "";
          state.user.roles = "";
          state.user.nickname = "";
          state.user.fullname = "";
          state.user.zoneCode = "";
          state.user.address = "";
          state.user.addrDetail = "";
          state.user.idNumber = "";
          state.user.phone = "";
          state.user.email = "";
          localStorage.removeItem(state.auth);
          // 유저정보 지우기
          return;
        }
      })();
    },
    clearUser: state => {
      state.user.isLogined = false;
      state.user.isAdmin = false;

      state.user.id = "";
      state.user.username = "";
      state.user.password = "";
      state.user.roles = "";
      state.user.nickname = "";
      state.user.fullname = "";
      state.user.zoneCode = "";
      state.user.address = "";
      state.user.addrDetail = "";
      state.user.idNumber = "";
      state.user.phone = "";
      state.user.email = "";

      localStorage.removeItem(state.auth);
    }
  },
  actions: {
    findByUsername: context => {
      const jwtToken = localStorage.getItem(context.state.auth);
      if (jwtToken == undefined) {
        context.commit("clearUser");
        return;
      }
      context.commit("setUser", jwtToken);
    }
  },
  modules: {}
});
