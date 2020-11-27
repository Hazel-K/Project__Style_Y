<template>
  <div class="headbar">
    <div class="first__menu menus">
      <span
        class="material-icons"
        style="font-size: 2.3rem; margin-right: 16px; cursor: pointer;"
        @click="openNav"
      >
        list
      </span>
      <span class="header__title" style="cursor: default;">
        <span class="pc-mode">Y Don't Use? </span>
        <span>Style_Y</span>
      </span>
    </div>
    <div class="second__menu menus">
      <span
        class="material-icons icon__2-1"
        style="font-size: 2.3rem; margin-right: 12px; cursor: pointer;"
      >
        search
      </span>
      <span
        class="material-icons icon__2-2"
        style="font-size: 2.3rem; cursor: pointer;"
      >
        notifications_none
      </span>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main";
export default {
  data() {
    return {};
  },
  methods: {
    openNav() {
      eventBus.$emit("openNav");
    }
  }
};
</script>

<style scoped>
.headbar {
  font-family: "Castoro", serif;
  font-size: 1.8rem;
  z-index: 998;
  position: fixed;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  background-color: white;
  display: grid;
  grid-template-columns: 65% 35%;
}
.menus {
  display: flex;
  align-items: center;
}
.second__menu {
  justify-self: flex-end;
}
/* 모바일 버전일 때 */
@media (max-width: 600px) {
  .pc-mode {
    display: none;
  }
}
</style>
