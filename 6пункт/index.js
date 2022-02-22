const good = document.querySelector('.good')
const day = document.querySelector('.day')
const time = document.querySelector('.time')
const newYear = document.querySelector('.newYear')

let date = new Date()

let i = date.getHours()

if (i > 4 && i <= 11){
  good.textContent = 'Доброе утро'
} else if (i > 11 && i <= 17) {
  good.textContent = 'Добрый день'
} else if (i > 17 && i <=22) {
  good.textContent = 'Добрый вечер'
} else {
  good.textContent = 'Доброй ночи'
}

day.textContent = 'Сегодня: ' + date.toLocaleString('ru', {  weekday: 'long' })

time.textContent = 'Текущее время: ' + date.toLocaleTimeString('en')

const getNumberOfDays = () => {

  const date1 = new Date()
  const date2 = new Date('01/01/2023')

  const oneDay = 1000 * 60 * 60 * 24

  const diffInTime = date2.getTime() - date1.getTime()

  const diffInDays = Math.round(diffInTime / oneDay)

  return newYear.textContent = 'До нового года осталось ' + diffInDays + ' дней'
}

getNumberOfDays()

