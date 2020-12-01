<template>
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="items contain1">
          <div class="phoneNum">
            <input
              type="text"
              id="phone"
              placeholder="휴대폰 인증 필수"
              readonly
            />
            <v-btn small class="searchPhone" @click="searchPhone"
              >인증하기</v-btn
            >
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="items contain2">
          <form action="" id="modForm" method="POST">
            <div class="userBox boxes">
              <input type="text" id="username" placeholder="아이디" />
              <span class="chkUsername chk"></span>
            </div>
            <div class="passwordBox boxes">
              <input type="password" id="password" placeholder="비밀번호" />
              <span class="chkPassword chk"></span>
            </div>
            <div class="rePassBox boxes">
              <input
                type="password"
                id="rePassword"
                placeholder="비밀번호 확인"
              />
              <span class="chkRePassword chk"></span>
            </div>
            <div class="btns">
              <v-btn small class="prevBtn" @click="prevBtn">이전 단계로</v-btn>
              <v-btn small class="modProc" @click="modProc">수정하기</v-btn>
            </div>
          </form>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="items contain3" v-if="isModified">
          <div class="success">
            <h3>비밀번호가 성공적으로</h3>
            <h3>변경되었습니다</h3>
          </div>
        </div>
        <div class="items contain3" v-else>
          <div class="fail">
            <h3>변경에 실패했습니다</h3>
            <h3>관리자에게 문의해주세요</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper JS
import Swiper, { Navigation } from "swiper"; // , { Mousewheel, Navigation, Pagination }
Swiper.use([Navigation]);
// import Swiper styles
import "swiper/swiper-bundle.css";

export default {
  data() {
    return {
      mySwiper: null,
      user: {
        username: null
      },
      isModified: false
    };
  },
  mounted() {
    this.mySwiper = new Swiper(".swiper-container", {
      allowTouchMove: false
    });
  },
  methods: {
    searchPhone() {
      this.mySwiper.slideNext();
    },
    prevBtn() {
      this.mySwiper.slidePrev();
    },
    modProc() {
      this.isModified = true;
      this.mySwiper.slideNext();
    }
  }
};
</script>

<style scoped>
input {
  padding: 3px 7px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
.swiper-container {
  width: 100%;
  height: 200px;
}
.items {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.phoneNum {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#phone {
  padding: 3px 5px;
  margin-right: 10px;
}

#modForm {
  display: grid;
  grid-template-columns: 250px;
  row-gap: 5px;
}
.btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.boxes {
  display: flex;
  flex-direction: column;
}
.success,
.fail {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
