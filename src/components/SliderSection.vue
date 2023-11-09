<template>
  <div class="container" >
    <div class="slick-slider">
      <div class="slick-slide">
        <div class="partner-cart">
          <img src="../assets/Partner/Frame186.svg" alt="Slide 1">
          <h6>5 лет вместе</h6>
        </div>
      </div>
      <div class="slick-slide">
        <div class="partner-cart">
          <img src="../assets/Partner/g2058.svg" alt="Slide 2">
          <h6>1 лет вместе</h6>
        </div>
      </div>
      <div class="slick-slide">
        <div class="partner-cart">
          <img src="../assets/Partner/rosatom.svg" alt="Slide 2">
          <h6>1 лет вместе</h6>
        </div>
      </div>
      <div class="slick-slide">
        <div class="partner-cart">
          <img src="../assets/Partner/doors.svg" alt="Slide 2">
          <h6>2 лет вместе</h6>
        </div>
      </div>
      <div class="slick-slide">
        <div class="partner-cart">
          <img src="../assets/Partner/loba.svg" alt="Slide 2">
          <h6>1 лет вместе</h6>
        </div>
      </div>
      <div class="slick-slide">
        <div class="partner-cart">
          <img src="../assets/Partner/bona.svg" alt="Slide 2">
          <h6>1 лет вместе</h6>
        </div>
      </div>
      <div class="slick-slide">
        <div class="partner-cart">
          <img src="../assets/Partner/gaz-group.svg" alt="Slide 2">
          <h6>1 лет вместе</h6>
        </div>
      </div>
      <div class="slick-slide">
        <div class="partner-cart">
          <img src="../assets/Partner/institute.svg" alt="Slide 2">
        </div>
      </div>
    </div>
    <div class="slider-btn-section">
      <button class=" btn-slide prev-button">
        <img src="/icon/Vector2.svg" alt="">
      </button>

      <button class=" btn-slide next-button">
        <img src="/icon/Vector1.svg" alt="">
      </button>
    </div>

  </div>
</template>



<script>
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';

export default {
  name: 'SliderSection',
  mounted() {
    const $slickSlider = $(this.$el).find('.slick-slider');
    const $prevButton = $(this.$el).find('.prev-button');
    const $nextButton = $(this.$el).find('.next-button');

    $slickSlider.slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      speed: 300,
      rows: 2,
      // centerMode: true,
      // centerPadding: '20px',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
         {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
         {
          breakpoint: 578,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 361,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });

    $prevButton.on('click', function () {
      $slickSlider.slick('slickPrev');
    });

    $nextButton.on('click', function () {
      $slickSlider.slick('slickNext');
    });
  },
}
</script>


<style scoped>

.slick-slider {
  width: 100%;
  background: #1F2032;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.partner-cart {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 0 40px 0;
}

.partner-cart img {
  width: 100%;
  height: 135px;
  object-fit: none;
}


.partner-cart h6 {
  color: #9A9AAD;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.3px;
  margin-top: 20px;
}

.slider-btn-section{
  display: flex;
  justify-content: end;
  margin-right: 80px;
  column-gap: 48px;

}
.btn-slide{
  background: #3734e3;
  width: 90px;
  height: 90px;
  margin: 50px 0;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  outline: none;
}
.btn-slide:active{
   background: rgba(129, 129, 193, 0.1);
}

@media screen and (max-width: 1280px) {
   .partner-cart img {
      width: 100%;
      object-fit: scale-down;
   }
   .partner-cart {
      width: 300px;
      margin: 0 20px;
   }
   .partner-cart img {
      width: 100%;
      height: 135px;
      object-fit: contain;
   }

}
@media screen and (max-width: 769px) {
   .slider-btn-section{
      display: none;
   }

   .partner-cart{
      width: 250px;
   }
}



</style>