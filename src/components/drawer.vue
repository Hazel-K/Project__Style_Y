<template>
  <div class="navBar">
    <div class="navMenus">
      <div class="navMenus__1">
        <span
          class="material-icons"
          style="font-size: 2.3rem; margin-right: 16px; cursor: pointer;"
          @click="closeNav"
        >
          keyboard_backspace
        </span>
        <span class="header__title" style="cursor: default;">
          <span class="pc-mode">Y Don't Use? </span>
          <span>Style_Y</span>
        </span>
      </div>
      <div class="navMenus__2">
        <div class="loginInfo" v-if="user.isLogined">내가 보입니꺼</div>
        <div class="notLoginInfo" v-else>
          <span
            class="material-icons"
            style="font-size: 5rem; color: rgba(0, 0, 0, 0.2); cursor: default;"
          >
            report_problem
          </span>
          <span style="cursor: default;">아직 로그인 하지 않았습니다.</span>
          <span class="button">로그인</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main";
export default {
  props: ["user"],
  methods: {
    closeNav() {
      eventBus.$emit("closeNav");
    }
  }
};
</script>

<style scoped>
.navBar {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.navMenus {
  width: 370px;
  min-height: 100%;
  background-color: white;
}
.navMenus__1 {
  height: 56px;
  display: flex;
  padding-left: 16px;
  align-items: center;
  font-family: "Castoro", serif;
  font-size: 1.8rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.notLoginInfo {
  height: 150px;
  background-color: whitesmoke;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.button {
  padding: 10px;
  cursor: pointer;
  font-size: 0.8rem;
}
/* 모바일 버전일 때 */
@media (max-width: 600px) {
  .pc-mode {
    display: none;
  }
}
</style>
