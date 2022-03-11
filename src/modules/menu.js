const menu = () => {
  const body = document.querySelector('body')
  const menu = document.querySelector('menu')

  const handleMenu = () => {
    if (document.documentElement.clientWidth > 768) {
      menu.classList.toggle('active-menu')
    } else {
      menu.style.transform = 'translateX(-100%)'
    }
  }

  body.addEventListener('click', (e) => {
    if (menu.classList.contains('active-menu')) {
      if (e.target.closest('.active-menu')) {
        if (e.target.closest('.close-btn')) {
          e.preventDefault()

          handleMenu()
        } else if (e.target.matches('ul>li>a')) {
          handleMenu()
        }
      } else {
        handleMenu()
      }
    } else {
      if (e.target.closest('.menu')) {
        handleMenu()
      }
    } 
  })
}

export default menu