const timer = (deadline) => {
  const timerHours = document.querySelector('#timer-hours')
  const timerMinutes = document.querySelector('#timer-minutes')
  const timerSeconds = document.querySelector('#timer-seconds')

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime()
    let dateNow = new Date().getTime()
    let timeRemaining = (dateStop - dateNow) / 1000
    let hours = Math.floor(timeRemaining / 3600)
    let minutes = Math.floor((timeRemaining / 60) % 60)
    let seconds = Math.floor(timeRemaining % 60)

    return {timeRemaining, hours, minutes, seconds}
  }

  const updateClock = () => {
    let getTime = getTimeRemaining()
    let idInterval

    const arr = [getTime.hours, getTime.minutes, getTime.seconds]
    
    arr.forEach((item, i, arr) => {
      if (arr[i] < 10){
        arr[i] = '0' + arr[i]
      }
    })
    timerHours.textContent = arr[0]
    timerMinutes.textContent = arr[1]
    timerSeconds.textContent = arr[2]

    if (getTime.timeRemaining > 0){
      idInterval = setInterval(updateClock, 1000)
    } else if (getTime.timeRemaining <= 0) {
      timerHours.textContent = '00'
      timerMinutes.textContent = '00'
      timerSeconds.textContent = '00'
    }

    clearInterval(idInterval)
  }
  setInterval(updateClock, 1000)
}

export default timer
