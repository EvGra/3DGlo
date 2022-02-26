const reg = () => {
  const calcInputs = document.querySelectorAll('.calc-block>input')

  const mainIputText = document.querySelector('main .form-name')
  const mainIputMail = document.querySelector('main .form-email')
  const mainIputPhone = document.querySelector('main .form-phone')
  const mainForm = document.querySelector('#form1')

  const popupIputMail = document.querySelector('.popup .form-email')
  const popupIputPhone = document.querySelector('.popup .form-phone')
  const popupIputName = document.querySelector('.popup .form-name')
  const popupForm = document.querySelector('#form3')
  const modal = document.querySelector('.popup')

  const connectIputMail = document.querySelector('.connect .form-email')
  const connectIputPhone = document.querySelector('.connect .form-phone')
  const connectIputName = document.querySelector('#form2-name')
  const connectIputMes = document.querySelector('#form2-message')
  const connectForm = document.querySelector('#form2')


  for (let calcInput of calcInputs) {
    calcInput.addEventListener('input', function (e) {
      e.preventDefault()
      calcInput.value = calcInput.value.replace(/[^\d]/g, '')
    })
  }

  mainForm.addEventListener('submit',  (e) => {
    e.preventDefault()
    let mistakeName
    let mistakeMail
    let mistakePhone
    let arr = []

    if (!/[^а-яА-Я\-\s]/g.test(mainIputText.value)) { 
      mistakeName = ''
      arr.push(mistakeName)
    } else {
      mistakeName = 'некорректные данные в имени ' 
      arr.push(mistakeName)
    }
    
    if(!/[^\w\-\"\.\!\~\*\'\@]/g.test(mainIputMail.value)) { 
      mistakeMail = ''
      arr.push(mistakeMail)
    } else {
      mistakeMail = 'некорректные данные в почтовом адресе '
      arr.push(mistakeMail)
    }

    if(!/[^\d\(\)\-]/g.test(mainIputPhone.value)) {
      mistakePhone = ''
      arr.push(mistakePhone)
    } else {
      mistakePhone = 'некорректные данные в номере телефона '
      arr.push(mistakePhone)
    }

    if (arr.join('') != ''){
    alert(arr.join(''))
    }
  })

  popupForm.addEventListener('submit',  (e) => {
    e.preventDefault()
    let isError = false    
    let mistakeName
    let mistakeMail
    let mistakePhone
    let arr =[]

    if (!/[^а-яА-Я\-\s]/g.test(popupIputName.value)) { mistakeName = ''
      arr.push(mistakeName)
    } else {
      mistakeName = 'некорректные данные в имени ' 
      arr.push(mistakeName)
      isError = true
    }
    
    if(!/[^\w\-\"\.\!\~\*\'\@]/g.test(popupIputMail.value)) { 
      mistakeMail = ''
      arr.push(mistakeMail)
    } else {
      mistakeMail = 'некорректные данные в почтовом адресе '
      arr.push(mistakeMail)
      isError = true
    }

    if(!/[^\d\(\)\-]/g.test(popupIputPhone.value)) {
      mistakePhone = ''
      arr.push(mistakePhone)
    } else {
      mistakePhone = 'некорректные данные в номере телефона '
      arr.push(mistakePhone)
      isError = true
    }
    if (isError) {
      alert(mistakeName, mistakeMail, mistakePhone)
      modal.style.display = 'none'
    }
  })

  connectForm.addEventListener('submit',  (e) => {
    e.preventDefault()
    let mistakeName
    let mistakeMail
    let mistakePhone
    let mistakeMes
    let arr = []
    
    if (!/[^а-яА-Я\-\s]/g.test(connectIputName.value)){
      mistakeName = ''
      arr.push(mistakeName)
    } else {
      mistakeName = 'некорректные данные в имени ' 
      arr.push(mistakeName)
    }

    if(!/[^\w\-\"\.\!\~\*\'\@]/g.test(connectIputMail.value)) {
      mistakeMail = ''
      arr.push(mistakeMail)
    } else {
      mistakeMail = 'некорректные данные в почтовом адресе '
      arr.push(mistakeMail)
    }

    if(!/[^\d\(\)\-]/g.test(connectIputPhone.value)) {
      mistakePhone = ''
      arr.push(mistakePhone)
    } else {
      mistakePhone = 'некорректные данные в номере телефона '
      arr.push(mistakePhone)
    }

    if (!/[^а-яА-Я\-\s]/g.test(connectIputMes.value)){
      mistakeMes = ''
      arr.push(mistakeMes)
    } else {
      mistakeMes = 'некорректные данные в сообщении'
      arr.push(mistakeMes)
    }

    if (arr.join('') != ''){
    alert(arr.join(''))
    }
  })    
}

export default reg