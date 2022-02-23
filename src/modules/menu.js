const menu = () => {
  const menuBtn = document.querySelector('.menu')
  const menu = document.querySelector('menu')
  const closeBtn = menu.querySelector('.close-btn')
  const menuItems = menu.querySelectorAll('ul>li>a')

  const handleMenu = () => {
    if (document.documentElement.clientWidth > 768) {
      menu.classList.toggle('active-menu')
    } else {
      menu.style.transform = 'translateX(-100%)'
    }
  }
  menuBtn.addEventListener('click', () => {
    if (document.documentElement.clientWidth > 768) {
        handleMenu()
      } else {
        menu.style.transform = 'translateX(100%)'
      }
  })

  closeBtn.addEventListener('click', handleMenu)

  menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))
}

export default menu