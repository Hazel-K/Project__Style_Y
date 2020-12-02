<template>
  <div class="mypage">
    <drawer
      v-if="$store.state.dynamicMenus.navBar.isOpened"
      :user="$store.state.user"
    ></drawer>
    <headbar> </headbar>
    <router-view></router-view>
  </div>
</template>

<script>
import headbar from "@/components/headbar";
import drawer from "@/components/drawer";
export default {
  components: { headbar, drawer }
};
</script>
