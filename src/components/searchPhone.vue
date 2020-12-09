<template>
  <div class="searchAddr">
    <div class="items">
      <div class="title">
        <span class="title__content">휴대폰 인증</span>
        <span
          class="material-icons"
          style="font-size: 2rem; margin-bottom: 10px; color: rgba(0, 0, 0, 0.8); cursor: pointer;"
          @click="closeSearchPhone"
        >
          clear
        </span>
      </div>
      <div class="content">
        <div class="content_1">
          <input
            type="text"
            id="phoneNumber"
            @keypress="onlyNumber($event)"
            placeholder="휴대폰 번호, 숫자만 입력"
          />
          <v-btn x-small @click="sendSMS">번호확인</v-btn>
        </div>
        <div class="content_2">
          <v-btn @click="sendPhoneNumber">인증하기</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main";
export default {
  data() {
    return {
      isPhoneNumberAvailable: false
    };
  },
  methods: {
    // result() {
    //   eventBus.$emit("inputPhone");
    //   eventBus.$emit("closeSearchPhone");
    // },
    closeSearchPhone() {
      eventBus.$emit("closeSearchPhone");
    },
    onlyNumber(e) {
      if (e.keyCode < 48 || e.keyCode > 57) e.returnValue = false;
    },
    sendSMS() {
      const phone = document.querySelector("#phoneNumber");
      if (phone.value.length == 10 || phone.value.length == 11) {
        alert("사용 가능한 전화번호입니다.");
        this.isPhoneNumberAvailable = true;
      } else {
        alert("전화번호를 다시 확인해주세요.");
        this.isPhoneNumberAvailable = false;
      }
    },
    sendPhoneNumber() {
      if (this.isPhoneNumberAvailable) {
        const phoneNumber = document.querySelector("#phoneNumber").value;
        eventBus.$emit("sendPhoneNumber", phoneNumber);
        eventBus.$emit("closeSearchPhone");
      } else {
        alert("휴대폰 번호를 확인해주세요");
      }
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
  width: 350px;
  height: 300px;
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
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
.content {
  width: 100%;
  height: 194px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
}
.content_1 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: 2/ 1/ 3/ 2;
  align-self: flex-start;
}
.content_2 {
  grid-area: 3/ 1/ 4/ 2;
  justify-self: center;
  align-self: flex-end;
}
#phoneNumber {
  width: 75%;
}
</style>
