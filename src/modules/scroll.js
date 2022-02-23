const scroll = () => {
  const menu = document.querySelector('menu')
  const menuItems = menu.querySelectorAll('ul>li>a')
  const btn = document.querySelector('main>a')
  const hiddenElements = document.querySelectorAll('body>div')

  const scrollBtn = () => {
    hiddenElements[0].scrollIntoView({block: "start", behavior: "smooth"})
  }

  btn.addEventListener('click', (e) => {
    e.preventDefault()
    scrollBtn()
  })

  for (let menuItem of menuItems) {
    menuItem.addEventListener('click', function (e) {
        e.preventDefault();
        const id = menuItem.getAttribute('href')

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
  }
}

export default scroll