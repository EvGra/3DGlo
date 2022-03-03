(()=>{"use strict";(e=>{const t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds"),r=()=>{let e,c=(()=>{let e=(new Date("28 february 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/3600),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();const l=[c.hours,c.minutes,c.seconds];l.forEach(((e,t,o)=>{o[t]<10&&(o[t]="0"+o[t])})),t.textContent=l[0],o.textContent=l[1],n.textContent=l[2],c.timeRemaining>0?e=setInterval(r,1e3):c.timeRemaining<=0&&(t.textContent="00",o.textContent="00",n.textContent="00"),clearInterval(e)};setInterval(r,1e3)})(),(()=>{const e=document.querySelector("body"),t=document.querySelector("menu"),o=()=>{document.documentElement.clientWidth>768?t.classList.toggle("active-menu"):t.style.transform="translateX(-100%)"};e.addEventListener("click",(e=>{t.classList.contains("active-menu")?e.target.closest(".active-menu")?(e.target.closest(".close-btn")||e.target.matches("ul>li>a"))&&o():o():e.target.closest(".menu")&&o()}))})(),(()=>{const e=document.querySelector(".popup-content"),t=document.querySelectorAll(".popup-btn");let o,n=50;const r=()=>{n--,o=requestAnimationFrame(r),n>=0?e.style.marginLeft=n+"%":(cancelAnimationFrame(o),n=50)};t.forEach((t=>{t.addEventListener("click",(()=>{document.querySelector(".popup").style.display="block",e.style.transform="translateX(0%)",document.documentElement.clientWidth>768&&r()}))})),document.querySelector(".popup").addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(document.querySelector(".popup").style.display="none")}))})(),(()=>{const e=document.querySelector("menu").querySelectorAll("ul>li>a"),t=document.querySelector("main>a"),o=document.querySelectorAll("body>div");t.addEventListener("click",(e=>{e.preventDefault(),o[0].scrollIntoView({block:"start",behavior:"smooth"})}));for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const o=t.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelectorAll(".calc-block>input"),t=document.querySelector("main .form-name"),o=document.querySelector("main .form-email"),n=document.querySelector("main .form-phone"),r=document.querySelector("#form1"),c=document.querySelector(".popup .form-email"),l=document.querySelector(".popup .form-phone"),a=document.querySelector(".popup .form-name"),u=document.querySelector("#form3"),s=document.querySelector(".popup"),i=document.querySelector(".connect .form-email"),m=document.querySelector(".connect .form-phone"),d=document.querySelector("#form2-name"),p=document.querySelector("#form2-message"),v=document.querySelector("#form2");for(let t of e)t.addEventListener("input",(function(e){e.preventDefault(),t.value=t.value.replace(/[^\d]/g,"")}));r.addEventListener("submit",(e=>{let r,c,l;e.preventDefault();let a=[];/[^а-яА-Я\-\s]/g.test(t.value)?(r="некорректные данные в имени ",a.push(r)):(r="",a.push(r)),/[^\w\-\"\.\!\~\*\'\@]/g.test(o.value)?(c="некорректные данные в почтовом адресе ",a.push(c)):(c="",a.push(c)),/[^\d\(\)\-]/g.test(n.value)?(l="некорректные данные в номере телефона ",a.push(l)):(l="",a.push(l)),""!=a.join("")&&alert(a.join(""))})),u.addEventListener("submit",(e=>{e.preventDefault();let t,o,n,r=!1,u=[];/[^а-яА-Я\-\s]/g.test(a.value)?(t="некорректные данные в имени ",u.push(t),r=!0):(t="",u.push(t)),/[^\w\-\"\.\!\~\*\'\@]/g.test(c.value)?(o="некорректные данные в почтовом адресе ",u.push(o),r=!0):(o="",u.push(o)),/[^\d\(\)\-]/g.test(l.value)?(n="некорректные данные в номере телефона ",u.push(n),r=!0):(n="",u.push(n)),r&&(alert(t,o,n),s.style.display="none")})),v.addEventListener("submit",(e=>{let t,o,n,r;e.preventDefault();let c=[];/[^а-яА-Я\-\s]/g.test(d.value)?(t="некорректные данные в имени ",c.push(t)):(t="",c.push(t)),/[^\w\-\"\.\!\~\*\'\@]/g.test(i.value)?(o="некорректные данные в почтовом адресе ",c.push(o)):(o="",c.push(o)),/[^\d\(\)\-]/g.test(m.value)?(n="некорректные данные в номере телефона ",c.push(n)):(n="",c.push(n)),/[^а-яА-Я\-\s]/g.test(p.value)?(r="некорректные данные в сообщении",c.push(r)):(r="",c.push(r)),""!=c.join("")&&alert(c.join(""))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelectorAll(".portfolio-dots");let n,r=0;const c=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)};t.forEach((()=>{const e=document.createElement("li");e.className="dot",o[0].appendChild(e)}));const a=document.querySelectorAll(".dot"),u=()=>{c(t,r,"portfolio-item-active"),c(a,r,"dot-active"),r++,r>=t.length&&(r=0),l(t,r,"portfolio-item-active"),l(a,r,"dot-active")},s=(e=2e3)=>{n=setInterval(u,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(c(t,r,"portfolio-item-active"),c(a,r,"dot-active"),e.target.matches("#arrow-right")?r++:e.target.matches("#arrow-left")?r--:e.target.classList.contains("dot")&&a.forEach(((t,o)=>{e.target===t&&(r=o)})),r>=t.length&&(r=0),r<0&&(r=t.length-1),l(t,r,"portfolio-item-active"),l(a,r,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&s(2e3)}),!0),s(2e3)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),r=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),l=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==o&&t.target!==n&&t.target!==r&&t.target!==c||(()=>{let t=+o.options[o.selectedIndex].value;const a=n.value;let u=0,s=1,i=1;0!=t&&0!=a||(l.textContent=0),r.value>1&&(s+=r.value/10),c.value&&c.value<5?i=2:c.value&&c.value<10&&(i=1.5),o.value&&n.value?(u=e*t*a*s*i,(()=>{let e=+l.textContent,t=setInterval((()=>{e<u?e+=5:e>u?e-=5:e==u&&clearInterval(t),l.textContent=e}),0)})()):u=0})()}))})()})();