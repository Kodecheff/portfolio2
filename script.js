let links = document.querySelectorAll('.hashLink');
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




// Script for blog.html

let blogPosts = document.querySelector('.blogPosts')

const query = `{
  user(username: "kodecheff"){
    publication {
      posts{
        slug
        title
        brief
        coverImage
      }
    }
  }
}`

let state = {
  post: []
}

// Fetches post via hashnode
const fetchPosts = async () => {
  const response = await fetch('https://api.hashnode.com', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({query})
  })

  const ApiResponse = await response.json()

  state.post = ApiResponse.data.user.publication.posts

  state.post.map((post, index) => {
    let anchor = document.createElement('a')
    Element.prototype.setAttributes = function(obj){ for(var prop in obj) this.setAttribute(prop, obj[prop]) }
    anchor.setAttributes({'href': `https://kodecheff.hashnode.dev/${post.slug}`, 'target': '_blank'})
    let div = document.createElement('div')
    let img = document.createElement('img')
    let h2 = document.createElement('h2')
    let p = document.createElement('p')

    img.setAttributes({'src': `${post.coverImage}`, 'alt': `${post.title}`, 'class': 'img-fluid'})
    h2.textContent = `${post.title}`
    p.textContent = `${post.brief}`

    div.append(img, h2, p)

    anchor.appendChild(div)

    blogPosts.appendChild(anchor)
  })
  console.log(ApiResponse.data.user.publication.posts)
}
