<template>
  <div class="admin">관리자메뉴</div>
</template>

<script>
export default {
  beforeCreate() {
    if (this.$store.state.user.isAdmin == false) {
      alert("권한이 없는 페이지입니다.");
      this.$router.push({ name: "Index" });
    }
  }
};
</script>
