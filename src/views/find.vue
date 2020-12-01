<template>
  <div class="find">
    <div class="container">
      <div class="title">
        <h1>계정 찾기</h1>
      </div>
      <find-swiper></find-swiper>
      <div class="toMenu">
        <a href="/login">로그인으로</a>
        <a href="/">홈으로</a>
      </div>
    </div>
  </div>
</template>

<script>
import findSwiper from "@/components/findSwiper";
export default {
  components: { findSwiper }
};
</script>

<style scoped>
.find {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
}
.container {
  width: 350px;
  height: 350px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.toMenu {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
}
</style>
