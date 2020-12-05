<template>
  <div class="userMenu">
    <div class="info">
      <div class="userInfo">
        <img class="userImg" src="@/assets/userImg.png" alt="" />
        <span class="welcomeMsg">{{ user }}님, 환영합니다.</span>
      </div>
      <div class="menus ChkUser" @click="openMenus(0)">
        <span class="menuIcon material-icons">face</span>
        <div class="menuName">회원정보</div>
      </div>
      <div class="menus ChkShip" @click="openMenus(1)">
        <span class="menuIcon material-icons">directions_boat</span>
        <div class="menuName">배송조회</div>
      </div>
      <div class="menus BuyList" @click="openMenus(2)">
        <span class="menuIcon material-icons">moped</span>
        <div class="menuName">장바구니</div>
      </div>
      <div class="menus WishList" @click="openMenus(3)">
        <span class="menuIcon material-icons">favorite</span>
        <div class="menuName">내가 찜한 목록</div>
      </div>
      <div class="menus Report" @click="openMenus(4)">
        <span class="menuIcon material-icons">report</span>
        <div class="menuName">고객문의</div>
      </div>
      <div
        class="menus Admin"
        v-if="$store.state.user.isAdmin"
        @click="openMenus(5)"
      >
        <span class="menuIcon material-icons">build</span>
        <div class="menuName">관리자메뉴</div>
      </div>
      <div class="menus Report" @click="logout">
        <span class="menuIcon material-icons">reply</span>
        <div class="menuName">로그아웃</div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main";

export default {
  data() {
    return {
      user: "유저"
    };
  },
  methods: {
    openMenus(num) {
      const menus = document.getElementsByClassName("menus");
      const menuName = menus[num].classList[1];
      eventBus.$emit("closeNav");
      this.$router.push({ name: menuName }).catch(() => {}); // 이미 페이지 이동한 상태에서 다시 이동하려고 하니 오류가 생기므로, catch문으로 없애준다.
    },
    logout() {
      eventBus.$emit("logout");
    }
  }
};
</script>

<style scoped>
.userMenu {
  width: 100%;
  overflow: hidden;
}
.userInfo {
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.userImg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
}
.welcomeMsg {
  cursor: default;
  font-family: "jua";
  font-size: 1.5rem;
}
.menus {
  height: 60px;
  display: grid;
  grid-template-columns: 35% 65%;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.menuIcon {
  justify-self: flex-end;
  margin-right: 20px;
  font-size: 1.8rem;
}
.menuName {
  margin-left: 20px;
  font-family: "Do Hyeon";
  font-size: 1.5rem;
  letter-spacing: 2px;
}
</style>
