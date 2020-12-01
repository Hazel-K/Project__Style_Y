<template>
  <div class="login">
    <div class="container">
      <div class="title"><h1>로그인</h1></div>
      <div class="content">
        <form action="" id="loginFrm" method="POST">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="아이디"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호"
          />
          <a href="/find" class="forgetPassword">비밀번호를 잊으셨나요?</a>
        </form>
      </div>
      <div class="footer">
        <div class="buttons">
          <span class="loginBtn" @click="loginProc">로그인</span>
          <span class="joinBtn" @click="$router.push({ name: 'Join' })"
            >회원가입</span
          >
          <a href="/" class="toHome">홈페이지로 돌아가기</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    loginProc() {
      const username = document.querySelector("#username");
      const password = document.querySelector("#password");
      if (username.value == "") {
        alert("아이디를 입력해주세요.");
        username.focus();
        return;
      } else if (password.value == "") {
        alert("패스워드를 입력해주세요.");
        password.focus();
        return;
      }
      document.querySelector("#loginFrm").submit();
    }
  }
};
</script>

<style scoped>
h1 {
  margin-top: 0;
  margin-bottom: 10px;
}
.login {
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
  height: 300px;
  overflow: hidden;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title {
  font-family: "Jua", sans-serif;
  font-size: 1.2rem;
  letter-spacing: 5px;
  display: flex;
  justify-content: center;
  cursor: default;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#loginFrm {
  display: grid;
  grid-template-columns: 250px;
  row-gap: 5px;
}
input {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 5px;
}
a {
  font-size: 0.8rem;
}
.toHome {
  justify-self: center;
}
.footer {
  display: flex;
  justify-content: center;
}
.buttons {
  margin-top: 25px;
  display: grid;
  grid-template-columns: 250px;
  row-gap: 5px;
}
.loginBtn,
.joinBtn {
  font-weight: bold;
  letter-spacing: 1px;
  width: 100%;
  height: 100%;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  text-align: center;
  background-color: #fff1d6;
  cursor: pointer;
}
</style>
