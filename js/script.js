const nav = document.getElementById('navbar')

//scrolling window change navbar background
window.addEventListener('scroll' , ()=> {
  const windowOffsetTop = window.scrollY;

  if(windowOffsetTop > 0 ) {
    nav.classList.add('scroll')
    nav.style.borderBottom = 'ips solid #000'
  } else {
    nav.classList.remove('scroll')
  }
})

//validate form input fields
const errorMessage = document.querySelectorAll('form .form-div .error-message')
const errorIcons = document.querySelectorAll('form .form-div .error-icon')
const inputs = document.querySelectorAll('form .input')

for(let i=0 ; i<inputs.length ; i++) {
  inputs[i].addEventListener('blur' , ()=> {

    if(inputs[i].value.length === 0) {
      errorIcons[i].style.display='block'
      errorMessage[i].style.display='block'
    } else {
      errorIcons[i].style.display='none'
      errorMessage[i].style.display='none'
    }
  })

}