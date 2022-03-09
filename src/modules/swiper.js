import Swiper, {Autoplay} from 'swiper';

export const swiper = () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    modules: [Autoplay],
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  })
}