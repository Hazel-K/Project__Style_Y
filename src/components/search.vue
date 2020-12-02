<template>
  <div class="search">
    <form
      id="searchFrm"
      class="searchContent"
      name="searchFrm"
      action=""
      method="POST"
      @submit="doSearch($event)"
    >
      <input
        id="searchString"
        class="searchContent"
        type="text"
        placeholder="상품명으로 검색"
      />
      <span
        class="material-icons searchContent"
        style="font-size: 2rem; cursor: pointer;"
        @click="doSearch($event)"
      >
        forward
      </span>
    </form>
  </div>
</template>

<script>
import { eventBus } from "@/main";
export default {
  methods: {
    doSearch(e) {
      e.preventDefault();
      const searchIpt = document.querySelector("#searchString");
      const searchString = document.querySelector("#searchString").value;
      if (searchString == "") {
        alert("검색어를 입력해주세요.");
        searchIpt.focus();
        return;
      }
      eventBus.$emit("closeSearch");
      this.$router.push({ name: "Search", params: { searchString } });
      return;
    }
  }
};
</script>

<style scoped>
.search {
  position: absolute;
  width: 300px;
  height: 40px;
  top: 50px;
  left: -265px;
  background-color: whitesmoke;
  border-radius: 10px;
  display: flex;
  align-content: center;
  justify-content: center;
}

#searchFrm {
  display: flex;
  justify-content: center;
  align-items: center;
}

#searchString {
  width: 75%;
  font-family: "dohyun";
  font-size: 1.5rem;
  outline: none;
}
</style>
