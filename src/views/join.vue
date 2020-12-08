<template>
  <div class="join">
    <searchAddr v-if="isSearchAddrOpened"></searchAddr>
    <div class="container">
      <div class="title"><h1>회원가입</h1></div>
      <div class="content">
        <form action="" id="joinFrm" name="joinFrm">
          <div class="userBox boxes">
            <input
              type="text"
              id="username"
              v-model="user.username"
              @keyup="usernameCheck($event)"
              placeholder="아이디, 영문, 숫자 포함 8~20자"
              autocomplete="off"
            />
            <span class="chkUsername chk">{{ usernameCheckMsg }}</span>
          </div>
          <div class="passwordBox boxes">
            <input
              type="password"
              id="password"
              v-model="user.password"
              @keyup="passwordCheck"
              placeholder="비밀번호, 영문, 숫자 포함 8~20자"
              autocomplete="off"
            />
            <span class="chkPassword chk">{{ passwordCheckMsg }}</span>
          </div>
          <div class="rePassBox boxes">
            <input
              type="password"
              id="rePassword"
              v-model="user.password2"
              @keyup="password2Check"
              placeholder="비밀번호 확인"
              autocomplete="off"
            />
            <span class="chkRePassword chk">{{ password2CheckMsg }}</span>
          </div>
          <div class="nicknameBox boxes">
            <input type="text" id="nickname" placeholder="이름" />
            <span class="chkNickname chk"></span>
          </div>
          <div class="iptAddr">
            <input
              type="text"
              id="addNum"
              placeholder="우편번호"
              v-model="user.zoneCode"
              readonly
            /><v-btn x-small class="searchAddr" @click="searchAddr"
              >주소검색</v-btn
            >
          </div>
          <input
            type="text"
            id="addr"
            placeholder="주소"
            v-model="user.address"
            readonly
          />
          <input
            type="text"
            id="addrDetail"
            v-model="user.addrDetail"
            placeholder="상세주소"
            autocomplete="off"
          />
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
import searchAddr from "@/components/searchAddr";
import { eventBus } from "@/main";
export default {
  components: { searchAddr },
  mounted() {
    eventBus.$on("inputAddr", data => {
      // console.log(data);
      this.user.address = data.address;
      this.user.zoneCode = data.zonecode;
    });
    eventBus.$on("closeSearchAddr", () => {
      this.isSearchAddrOpened = false;
    });
  },
  data() {
    return {
      // 인증 모달 관리
      isSearchAddrOpened: false,
      // 회원가입 진행 상태 관리
      isAccountAvailable: false,
      isAccountAuthorized: false,
      isPasswordAvailable: false,
      isPasswordCorrespond: false,
      isNicknameAvailable: false,
      // 회원가입 정보 관리
      user: {
        username: "",
        password: "",
        password2: "",
        nickname: "",
        zoneCode: "",
        address: "",
        addrDetail: ""
      },
      // 정규 표현식 관리
      usernameExp: new RegExp(/^[a-z0-9]/),
      // 정보 체크 메시지 관리
      usernameCheckMsg: "",
      passwordCheckMsg: "",
      password2CheckMsg: ""
    };
  },
  methods: {
    // 체크메세지 관련 메소드
    usernameCheck(e) {
      const username = document.querySelector("#username");
      const exeptCode = [
        27,
        113,
        115,
        120,
        20,
        16,
        17,
        91,
        18,
        32,
        93,
        37,
        38,
        39,
        40,
        44,
        145,
        19,
        45,
        46,
        36,
        35,
        34,
        33,
        13
      ];
      for (let i = 0; i < exeptCode.length; i++) {
        if (e.keyCode == exeptCode[i]) {
          return;
        }
      }
      const usernameExp = /^[a-z0-9]/;
      // console.log(usernameExp.test(e.key));
      if (!usernameExp.test(e.key)) {
        if (e.keyCode == 8) {
          return;
        } else {
          username.value = "";
          this.usernameCheckMsg =
            "한글, 특수문자, 대문자를 사용할 수 없습니다.";
          document.querySelector(".chkUsername").style.color = "red";
          this.isAccountAvailable = false;
          return;
        }
      }
      setTimeout(() => {
        if (username.value == "") {
          this.usernameCheckMsg = "";
          this.isAccountAvailable = false;
          return;
        }
        if (username.value.length < 8) {
          this.usernameCheckMsg = "아이디는 8자 이상이어야 합니다.";
          document.querySelector(".chkUsername").style.color = "red";
          this.isAccountAvailable = false;
        } else if (username.value.length > 20) {
          this.usernameCheckMsg = "아이디는 20자 이하여야 합니다.";
          document.querySelector(".chkUsername").style.color = "red";
          this.isAccountAvailable = false;
          // } else if (!usernameExp.test(this.user.username)) {
          //   this.usernameCheckMsg = "영소문자와 숫자가 조합되어야 합니다.";
          //   document.querySelector(".chkUsername").style.color = "red";
          //   this.isAccountAvailable = false;
        } else {
          this.usernameCheckMsg = "사용하실 수 있는 아이디입니다.";
          document.querySelector(".chkUsername").style.color = "blue";
          this.isAccountAvailable = true;
        }
      }, 1000);
    },
    passwordCheck() {
      setTimeout(() => {
        if (this.user.password == "") {
          this.passwordCheckMsg = "";
          this.isPasswordAvailable = false;
          return;
        }
        if (this.user.password.length < 8) {
          this.passwordCheckMsg = "비밀번호는 최소 8자리 이상이어야 합니다.";
          document.querySelector(".chkPassword").style.color = "red";
          this.isPasswordAvailable = false;
        } else if (this.user.password.length > 20) {
          this.passwordCheckMsg = "비밀번호는 최대 20자리 이하여야 합니다.";
          document.querySelector(".chkPassword").style.color = "red";
          this.isPasswordAvailable = false;
        } else {
          this.passwordCheckMsg = "사용 가능한 비밀번호입니다.";
          document.querySelector(".chkPassword").style.color = "blue";
          this.isPasswordAvailable = true;
        }
      }, 1000);
    },
    password2Check() {
      setTimeout(() => {
        if (this.user.password2 == "") {
          this.password2CheckMsg = "";
          this.isPasswordCorrespond = false;
          return;
        }
        if (this.user.password !== this.user.password2) {
          this.password2CheckMsg = "두 비밀번호가 일치하지 않습니다.";
          document.querySelector(".chkRePassword").style.color = "red";
          this.isPasswordCorrespond = false;
        } else {
          this.password2CheckMsg = "두 비밀번호가 일치합니다.";
          document.querySelector(".chkRePassword").style.color = "blue";
          this.isPasswordCorrespond = true;
        }
      }, 1000);
    },
    // 인증 관련 메소드
    searchAddr() {
      // 새창으로 띄울 경우
      // const routeData = this.$router.resolve({ name: "SearchAddr" });
      // window.open(
      //   routeData.href,
      //   "pop01",
      //   "top=10, left=10, width=400, height=600, status=no, menubar=no, toolbar=no, resizable=no"
      // );
      // 모달로 띄울 경우
      this.isSearchAddrOpened = true;
    },
    searchName() {
      console.log("searchName");
    },
    searchPhone() {
      console.log("searchPhone");
    },
    // 회원가입 최종 진행 메소드
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
