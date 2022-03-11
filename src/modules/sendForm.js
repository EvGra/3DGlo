const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId)
  const statusBlock = document.createElement('div')
  const errorText = 'Ошибка...'
  const successText = 'Спасибо. С вами свяжется наш менеджер'

  const name = form.querySelector('.form-name')
  const mail = form.querySelector('.form-email')
  const phone = form.querySelector('.form-phone')
  const mes = form.querySelector('#form2-message')

  const validate = (list) => {
    let success = true

    // list.forEach(input => {
    //   if (!input.classList.contains('success')) {
    //     success = false
    //   }
    // })

    return success
  }
  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
  }

  const submitForm = () => {
    const formElements = form.querySelectorAll('input')
    const formData = new FormData(form)
    const formBody = {}

    statusBlock.innerHTML = '<div class="loadingio-spinner-ellipsis-qrw96lub2b">' + '<div class="ldio-85jm1ypyas6">' + '<div></div>' + '<div></div>' + '<div></div>' + '<div></div>' + '<div></div>' + '</div>' + '</div>'

    statusBlock.style = 'color: white'
  
    form.append(statusBlock)

    formData.forEach((val, key) => {
      formBody[key] = val
    })

    someElem.forEach(elem => {
      const element = document.getElementById(elem.id)

      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value
      }
    })

    if (validate(formElements)) {
      sendData(formBody).then(data => {
        statusBlock.textContent = successText

        formElements.forEach(input => {
          input.value = ''
        })

        setTimeout(() => {
          statusBlock.textContent = ''
          document.querySelector('.popup').style.display = 'none'
        }, 3000)
      })
      .catch(error => {
        statusBlock.textContent = errorText
      })
    } else {
      alert('Данные не валидны')
    }
  }

  try {
    if (!form) {
      throw new Error('Верните форму')
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault()
      if (!/[^а-яА-Я\-\s]/g.test(name.value) && !/[^\w\-\"\.\!\~\*\'\@]/g.test(mail.value) && !/[^\d\(\)\-\+]/g.test(phone.value)) {
        if (mes) { 
         if (!/[^а-яА-Я\d\-\s\,\.]/g.test(mes.value)) {
          submitForm()
         }
        } else if ( (name.value.length >= 2) && (mail.value.length != '') && (phone.value.length <= 16) && (phone.value.length >= 5)){
          submitForm()
        } else {
          alert('Данные не валидны')
        }
      }
    })
  } catch(error) {
    console.log(error.message);
  }
}

export default sendForm