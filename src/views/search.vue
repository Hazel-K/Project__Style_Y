<template>
  <div class="search">
    <drawer
      v-if="$store.state.dynamicMenus.navBar.isOpened"
      :user="$store.state.user"
    ></drawer>
    <headbar> </headbar>
    <navigation></navigation>
    <div class="result">{{ searchString }}에 대한 검색 결과입니다.</div>
  </div>
</template>

<script>
import headbar from "@/components/headbar";
import drawer from "@/components/drawer";
import navigation from "@/components/navigation";
export default {
  components: { headbar, drawer, navigation },
  computed: {
    searchString() {
      return this.$route.params.searchString;
    }
  }
};
</script>
