window.onload = function(){
let links = document.querySelectorAll('nav ul a');

window.addEventListener('scroll', event => {
  let fromTop = window.scrollY

  links.forEach(link => {
    let section = document.querySelector(link.hash)

    if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
      link.classList.add('active')
    }else{
      link.classList.remove('active')
    }
  })
})
}

