<template>
  <div class="index">
    <sortUp></sortUp>
    <sortHits></sortHits>
    <myWish></myWish>
  </div>
</template>

<script>
import sortUp from "@/components/sortUp";
import sortHits from "@/components/sortHits";
import myWish from "@/components/myWish";
export default {
  components: { myWish, sortUp, sortHits }
};
</script>

<style scoped>
.index {
  width: 100%;
  background-color: #f9f9f9;
}
</style>
