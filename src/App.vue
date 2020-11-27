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
      user: {
        isLogined: false
      }
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Castoro:ital@0&display=swap");
.app {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
.headbar {
  grid-area: 1 / 1 / 2 / 13;
}
.navigation {
  grid-area: 2 / 1 / 3 / 13;
}
.index {
  grid-area: 3 / 1 / 4 / 13;
}
/* 모바일 버전일 때 */
@media (max-width: 600px) {
  .app {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .headbar {
    grid-area: 1 / 1 / 2 / 5;
  }
  .navigation {
    display: none;
  }
  .index {
    grid-area: 2 / 1 / 3 / 5;
  }
}
</style>
