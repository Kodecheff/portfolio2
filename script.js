let links = document.querySelectorAll('nav ul a');
let showMoreBtn = document.querySelector('#showMore')
let otherWorks = document.querySelectorAll('.otherWorks')

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


function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// showMoreBtn.textContent = "Show more"

function expand() {
  otherWorks.forEach(otherWork => {
    otherWork.classList.toggle('otherWorks')
  })

  showMoreBtn.textContent == "Show more" ? showMoreBtn.textContent = "Show less" : showMoreBtn.textContent = "Show more"
}
