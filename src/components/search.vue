<template>
  <div class="search">
    <form
      id="searchFrm"
      class="searchContent"
      name="searchFrm"
      action=""
      method="POST"
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
      >
        forward
      </span>
    </form>
  </div>
</template>

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
