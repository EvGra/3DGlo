import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import scroll from './modules/scroll'
import reg from './modules/reg'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import {swiper} from './modules/swiper'
import sendForm from './modules/sendForm'

timer('18 march 2022')
menu()
modal()
scroll()
reg()
tabs()
slider()
calc()
swiper()
sendForm({
  formId: 'form1',
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]
})
sendForm({
  formId: 'form2',
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]
})
sendForm({
  formId: 'form3',
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]
})