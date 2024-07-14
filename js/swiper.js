var swiper = new Swiper(".skiResort-swiper", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      390: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        centeredSlides: false,
      },
      470: {
        slidesPerView: 1.8,
        spaceBetween: 10,
        centeredSlides: false,
      },
      640: {
        slidesPerView: 2.1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 4.5,
        spaceBetween: 20,
      }
    },
  });

  $(document).ready(function() {
    $('.container-swiperBox').hide();
    $('.skiResort-swiper').hover(
      function() {
        // 滑鼠進入時顯示按鈕
        $('.container-swiperBox').show();
        
      },
      function() {
        // 滑鼠離開時隱藏按鈕
        $('.container-swiperBox').hide();
      }
      );
  });