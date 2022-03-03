import { animation } from "./helpers"

const modal = () => {
  const modal = document.querySelector('.popup-content')
  const buttons = document.querySelectorAll('.popup-btn')

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.popup').style.display = 'block'
      modal.style.transform = 'translateX(0%)'
      
      if (document.documentElement.clientWidth > 768) {
        animation({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modal.style.marginLeft = (1 / progress) +'%'
          }
        })
      }
    })
  })

   document.querySelector('.popup').addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      document.querySelector('.popup').style.display = 'none'
    }
  })

}

export default modal