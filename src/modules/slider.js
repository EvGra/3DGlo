const slider = () => {
  const sliderBlock = document.querySelector('.portfolio-content')
  const slides = document.querySelectorAll('.portfolio-item')
  const dotsPortfol = document.querySelectorAll('.portfolio-dots')

  let currentSlide = 0
  let interval
  let timeInterval = 2000

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass)
  }

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass)
  }

  slides.forEach(() => {
    const dots = document.createElement('li')
    dots.className = 'dot'
    dotsPortfol[0].appendChild(dots)
  })

  const dot = document.querySelectorAll('.dot')

  dot[0].classList.add('dot-active')
  
  const autoSlide = () => {
    prevSlide(slides, currentSlide, 'portfolio-item-active')
    prevSlide(dot, currentSlide, 'dot-active')
    currentSlide++

    if (currentSlide >= slides.length) {
      currentSlide = 0
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active')
    nextSlide(dot, currentSlide, 'dot-active')
  }

  const startSlide = (timer = 2000) => {
    interval = setInterval(autoSlide, timer)
  }

  const stopSlide = () => {
    clearInterval(interval)
  }

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault()

    if(!e.target.matches('.dot, .portfolio-btn')) {
      return
    }
    prevSlide(slides, currentSlide, 'portfolio-item-active')
    prevSlide(dot, currentSlide, 'dot-active')

    if (e.target.matches('#arrow-right')) {
      currentSlide++
    } else if (e.target.matches('#arrow-left')) {
      currentSlide--
    } else if (e.target.classList.contains('dot')) {
      dot.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index
        }
      })
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active')
    nextSlide(dot, currentSlide, 'dot-active')
  })

  sliderBlock.addEventListener('mouseenter', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) {
      stopSlide()
    }
  }, true)

  sliderBlock.addEventListener('mouseleave', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) {
      startSlide(timeInterval)
    }
  }, true)

  startSlide(timeInterval)
}

export default slider