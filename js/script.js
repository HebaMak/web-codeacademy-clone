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
