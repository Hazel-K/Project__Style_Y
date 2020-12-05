<template>
  <div class="index">
    <drawer
      v-if="$store.state.dynamicMenus.navBar.isOpened"
      :user="$store.state.user"
    ></drawer>
    <headbar></headbar>
    <navigation></navigation>
    <sortUp></sortUp>
    <sortHits></sortHits>
    <myWish></myWish>
  </div>
</template>

<script>
import headbar from "@/components/headbar";
import drawer from "@/components/drawer";
import navigation from "@/components/navigation";
import sortUp from "@/components/sortUp";
import sortHits from "@/components/sortHits";
import myWish from "@/components/myWish";
export default {
  components: { headbar, drawer, navigation, myWish, sortUp, sortHits }
};
</script>
