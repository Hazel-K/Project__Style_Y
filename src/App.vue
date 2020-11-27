<template>
  <div class="app">
    <drawer v-if="navBar.isOpened" :user="user"></drawer>
    <headbar></headbar>
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import { eventBus } from "@/main";
import headbar from "./components/headbar";
import drawer from "./components/drawer";
import navigation from "@/components/navigation";
export default {
  components: { headbar, drawer, navigation },
  created() {
    eventBus.$on("openNav", () => {
      // 이벤트 버스에서는 this가 이 객체를 가리키게 하기 위해 애로우 펑션 사용
      this.navBar.isOpened = true;
    });
    eventBus.$on("closeNav", () => {
      this.navBar.isOpened = false;
    });
  },
  data() {
    return {
      navBar: {
        isOpened: false
      },
      search: {
        isOpened: false
      },
      alarm: {
        isOpened: false
      },
      user: {
        isLogined: false
      }
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Castoro:ital@0&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
.app {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
.headbar {
  grid-column: 1/ 13;
}
.navigation {
  grid-column: 1/ 13;
  padding-top: 56px;
}
.index {
  grid-column: 1/ 13;
}
.myWish,
.sortUp,
.sortHits {
  width: 100%;
  font-family: "Do Hyeon", sans-serif;
}
/* 모바일 버전일 때 */
@media (max-width: 600px) {
  .app {
    grid-template-columns: repeat(4, 1fr);
  }
  .headbar {
    grid-column: 1/ 5;
  }
  .navigation {
    display: none;
  }
  .index {
    padding-top: 56px;
    grid-column: 1/ 5;
  }
}
</style>
