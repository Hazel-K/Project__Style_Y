<template>
  <div class="searchAddr">
    <div class="items">
      <div class="title">
        <span class="title__content">주소찾기</span>
        <span
          class="material-icons"
          style="font-size: 2rem; margin-bottom: 10px; color: rgba(0, 0, 0, 0.8); cursor: pointer;"
          @click="closeSearchAddr"
        >
          clear
        </span>
      </div>
      <vue-daum-postcode @complete="result($event)" />
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main";
export default {
  methods: {
    result(e) {
      eventBus.$emit("inputAddr", e);
      eventBus.$emit("closeSearchAddr");
    },
    closeSearchAddr() {
      eventBus.$emit("closeSearchAddr");
    }
  }
};
</script>

<style scoped>
.searchAddr {
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
  z-index: 5;
}
.items {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 550px;
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title__content {
  font-family: "Do Hyeon";
  font-size: 1.5rem;
  margin-bottom: 10px;
}
</style>
