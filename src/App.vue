<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { eventBus } from "@/main";
export default {
  created() {
    eventBus.$on("openNav", () => {
      // 이벤트 버스에서는 this가 이 객체를 가리키게 하기 위해 애로우 펑션 사용
      this.$store.state.dynamicMenus.navBar.isOpened = true;
    });
    eventBus.$on("closeNav", () => {
      this.$store.state.dynamicMenus.navBar.isOpened = false;
    });
  },
  mounted() {
    document.addEventListener("click", e => {
      // console.log(e.target.className);
      const eventList = [
        "material-icons icon__2-1",
        "material-icons icon__2-2"
      ];
      for (let i = 0; i < eventList.length; i++) {
        if (e.target.className === eventList[i]) {
          return;
        }
      }
      if (e.target.className === "navBar") {
        eventBus.$emit("closeNav");
      }
      if (e.target.className !== "searchContent") {
        eventBus.$emit("closeSearch");
      }
      if (e.target.className !== "alarm") {
        eventBus.$emit("closeAlarm");
      }
    });
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Castoro:ital@0&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");
.app {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  overflow-x: hidden;
}
.index,
.search,
.headbar,
.navigation,
.sortUp,
.sortHits,
.myWish {
  grid-column: 1/ 13;
}
.navigation {
  padding-top: 56px;
}
.sortUp,
.sortHits,
.myWish {
  width: 100%;
  font-family: "Do Hyeon", sans-serif;
  background-color: #f9f9f9;
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
  .sortUp {
    padding-top: 56px;
  }
  .sortUp,
  .sortHits,
  .myWish {
    grid-column: 1/ 5;
  }
}
</style>
