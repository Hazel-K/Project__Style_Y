<template>
  <div class="join">
    <div class="container">
      <div class="title"><h1>회원가입</h1></div>
      <div class="content">
        <form
          action=""
          id="joinFrm"
          name="joinFrm"
          method="POST"
          @submit="joinProc"
        >
          <div class="userBox boxes">
            <input
              type="text"
              id="username"
              v-model="user.username"
              placeholder="아이디"
            />
            <span class="chkUsername chk"></span>
          </div>
          <div class="passwordBox boxes">
            <input
              type="password"
              id="password"
              v-model="user.password"
              placeholder="비밀번호"
            />
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
          <!-- <div class="nicknameBox boxes">
            <input type="text" id="nickname" placeholder="별명" />
            <span class="chkNickname chk"></span>
          </div> -->
          <div class="iptAddr">
            <input
              type="text"
              id="addNum"
              placeholder="우편번호"
              readonly
            /><v-btn x-small class="searchAddr" @click="searchAddr"
              >주소검색</v-btn
            >
          </div>
          <input type="text" id="addr" placeholder="주소" readonly />
          <input type="text" id="specAddr" placeholder="상세주소" readonly />
          <!-- <div class="iptFullname">
            <input type="text" id="fullname" placeholder="이름" readonly />
            <v-btn x-small class="searchName" @click="searchName"
              >본인인증</v-btn
            >
          </div> -->
          <!-- <div class="iptIdnum">
            <input
              type="text"
              id="frontNum"
              placeholder="주민번호 앞자리"
              readonly
            />
            <span> - </span>
            <input
              type="password"
              id="lastNum"
              placeholder="●●●●●●●"
              readonly
            />
          </div> -->
          <div class="phoneNum">
            <input
              type="text"
              id="phone"
              placeholder="휴대폰 인증 필수"
              readonly
            />
            <v-btn x-small class="searchPhone" @click="searchPhone"
              >휴대폰인증</v-btn
            >
          </div>
          <v-btn class="joinProc" @click="joinProc">가입하기</v-btn>
          <div class="toMenu">
            <a href="/login">로그인으로</a>
            <a href="/">홈으로</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isAccountAvailable: false,
      isAccountAuthorized: false,
      isPasswordAvailable: false,
      isPasswordCorrespond: false,
      isNicknameAvailable: false,
      user: {
        username: null,
        password: null,
        password2: null,
        nickname: null
      }
    };
  },
  methods: {
    searchAddr() {
      console.log("searchAddr");
    },
    searchName() {
      console.log("searchName");
    },
    searchPhone() {
      console.log("searchPhone");
    },
    joinProc() {
      const { username, password } = this.user;

      axios
        .post("/joinProc", {
          username,
          password
        })
        .then(function(res) {
          console.log(res);
        });
    }
  }
};
</script>

<style scoped>
h1 {
  margin-top: 10px;
}
input {
  padding: 3px 7px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.join {
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
  padding-bottom: 30px;
  background-color: white;
  border-radius: 10px;
}

.title,
.content {
  display: flex;
  justify-content: center;
}

#joinFrm {
  display: grid;
  grid-template-columns: 300px;
  row-gap: 5px;
}

.boxes {
  display: flex;
  flex-direction: column;
}

.iptAddr,
.iptFullname,
.iptIdnum,
.phoneNum,
.toMenu {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.chk {
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.8rem;
}

#frontNum,
#lastNum {
  width: 135px;
}

.joinProc {
  margin-top: 15px;
  font-weight: bold;
}

.toMenu {
  font-size: 0.8rem;
}
</style>
