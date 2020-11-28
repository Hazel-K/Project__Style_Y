<template>
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
      <div class="swiper-slide">Slide 6</div>
      <div class="swiper-slide">Slide 7</div>
      <div class="swiper-slide">Slide 8</div>
      <div class="swiper-slide">Slide 9</div>
      <div class="swiper-slide">Slide 10</div>
    </div>
    <!-- Add Arrows -->
    <div
      class="swiper-button-next"
      style="color: rgba(255, 255, 255, 0.2); font-weight: 600;"
    ></div>
    <div
      class="swiper-button-prev"
      style="color: rgba(255, 255, 255, 0.2); font-weight: 600;"
    ></div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// import Swiper JS
import Swiper, { Mousewheel, Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination, Mousewheel]);
// import Swiper styles
import "swiper/swiper-bundle.css";
export default {
  mounted() {
    const mySwiper = new Swiper(".swiper-container", {
      loop: true,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
    setInterval(() => {
      mySwiper.slideNext();
    }, 3000);
  }
};
</script>

<style scoped>
.swiper-container {
  width: 800px;
  height: 100%;
}
.swiper-slide {
  background-color: salmon;
}
</style>
