<template>
  <div class="myWish">
    <div class="container">
      <h1 style="cursor: default;">
        내가 찜해둔 상품입니다.
      </h1>
      <div class="itemContainer">
        <div class="items item1">완</div>
        <div class="items item2">투</div>
        <div class="items item3">삼</div>
        <div class="items item4">포</div>
        <div class="items">마</div>
        <div class="items">바</div>
        <div class="items">사</div>
        <div class="items">아</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.myWish {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.container {
  width: 1000px;
}

.itemContainer {
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}
.items {
  width: 100%;
  height: 200px;
}

@media (max-width: 900px) {
  .itemContainer {
    padding: 0;
    grid-template-columns: repeat(2, 200px);
    grid-gap: 5px;
  }
}

@media (max-width: 400px) {
  .itemContainer {
    padding: 0;
    grid-template-columns: repeat(1, 300px);
    grid-gap: 5px;
  }
  .items {
    height: 300px;
  }
}
</style>
