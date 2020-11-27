<template>
  <div class="navigation">
    <navSwiper></navSwiper>
  </div>
</template>

<script>
import navSwiper from "./navSwiper";
export default {
  components: { navSwiper }
};
</script>

<style scoped>
.navigation {
  width: 100%;
  height: 300px;
}
</style>
