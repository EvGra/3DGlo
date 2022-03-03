import { animation } from "./helpers"

const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block')
  const calcType = document.querySelector('.calc-type')
  const calcSquere = document.querySelector('.calc-square')
  const calcCount = document.querySelector('.calc-count')
  const calcDay = document.querySelector('.calc-day')
  const total = document.getElementById('total')

  const countCalc = () => {
    let calcTypeValue = +calcType.options[calcType.selectedIndex].value
    const calcSquereValue = calcSquere.value

    let totalValue = 0
    let calcCountValue = 1
    let calcDayValue = 1

    if (calcTypeValue == 0 || calcSquereValue == 0) {
      total.textContent = 0
    }

    if (calcCount.value > 1) {
      calcCountValue += calcCount.value / 10
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5 
    }

    if (calcType.value && calcSquere.value) {
      totalValue = price * calcTypeValue * calcSquereValue * calcCountValue * calcDayValue

      animation({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          const step = 5
          let input = +total.textContent

          if (input < totalValue) {
            input += step
          } else if (input > totalValue) {
            input -= step
          }

          total.textContent = input
        }
      })
    } else {
      totalValue = 0
    }
  }

  calcBlock.addEventListener('input', (e) => {
    if (e.target === calcType || e.target === calcSquere || e.target === calcCount || e.target === calcDay) {
      countCalc()
    }
  })
}

export default calc