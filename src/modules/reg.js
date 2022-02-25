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
  const connectIputName = document.querySelector('.connect .top-form')
  const connectIputMes = document.querySelector('.connect .form-message')
  const connectForm = document.querySelector('#form2')


  for (let calcInput of calcInputs) {
    calcInput.addEventListener('input', function (e) {
      e.preventDefault()
      calcInput.value = calcInput.value.replace(/[^\d]/g, '')
    })
  }

  mainForm.addEventListener('submit',  (e) => {
    e.preventDefault()
    let isError = false

    if (!/[а-яА-Я-\s]/g.test(mainIputText.value)) {
      alert('неправильные данные')
    } else {
      isError = true
    }
    
    if(!/[^\w-".!~*']/g.test(mainIputMail.value)) {
      alert('неправильные данные')
    } else {
      isError = true
    }

    if(!/[\d]/g.test(mainIputPhone.value)) {
      alert('неправильные данные')
    } else {
      isError = true
    }
  })

  popupForm.addEventListener('submit',  (e) => {
    e.preventDefault()
    let isError = false

    if (!/[а-яА-Я-\s]/g.test(popupIputName.value)) {
      alert('неправильные данные')
    } else {
      isError = true
    }
    
    if(!/[^\w-".!~*']/g.test(popupIputMail.value)) {
      alert('неправильные данные')
    } else {
      isError = true
    }

    if(!/[\d]/g.test(popupIputPhone.value)) {
      alert('неправильные данные')
      console.log('3');
    } else {
      isError = true
    }
    if (isError) {
      alert('данные отправлены')
      modal.style.display = 'none'
    }
  })

  connectForm.addEventListener('submit',  (e) => {
    e.preventDefault()
    let isError = false

    if (!/[а-яА-Я-\s]/g.test(connectIputName.value) && (/[а-яА-Я-\s]/g.test(connectIputMes.value))){
      alert('неправильные данные')
    } else {
      isError = true
    }
    
    if(!/[^\w-".!~*']/g.test(connectIputMail.value)) {
      alert('неправильные данные')
    } else {
      isError = true
    }

    if(!/[\d]/g.test(connectIputPhone.value)) {
      alert('неправильные данные')
    } else {
      isError = true
    }
  })

}

export default reg