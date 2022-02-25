const modal = () => {
  const modal = document.querySelector('.popup-content')
  const buttons = document.querySelectorAll('.popup-btn')
  const closeBtn = modal.querySelector('.popup-close')

  let count = 50
  let id

  const animationAdd = () => {
    count--
    id = requestAnimationFrame(animationAdd)
    if (count >= 0) {
      modal.style.marginLeft = count +'%'
    } else {
      cancelAnimationFrame(id)
      count = 50
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.popup').style.display = 'block'
      modal.style.transform = 'translateX(0%)'
      
      if (document.documentElement.clientWidth > 768) {
        animationAdd()
      }
    })
  })

  closeBtn.addEventListener('click', () => {
    document.querySelector('.popup').style.display = 'none'
  })
}

export default modal