document.addEventListener('DOMContentLoaded', () => {

  let nav = document.querySelector('.menu'),
    navLinks = nav.querySelectorAll('a'),
    navHeight = nav.clientHeight

  nav.addEventListener('click', event => {
    event.preventDefault()
    let target = event.target
    if (target.tagName !== 'A') return

    let id = document.querySelector(`${target.getAttribute('href')}`),
      position = id.offsetTop - navHeight

    window.scrollTo({
      top: position,
      behavior: "smooth"
    })
  })

  window.addEventListener('scroll', function () {
    let position = window.scrollY

    if (position < idPosition(navLinks[1])) {
      activeNav(0)
    } else if (position < idPosition(navLinks[2])) {
      activeNav(1)
    }  else if (position < idPosition(navLinks[3])) {
      activeNav(2)
    }  else if (position < document.body.scrollHeight) {
      activeNav(3)
    }
  })

  function idPosition(id) {
    return document.querySelector(`${id.getAttribute('href')}`).offsetTop - navHeight
  }
  function activeNav(n) {
    navLinks.forEach(e => e.classList.remove('active'))
    navLinks[n].classList.add('active')
  }
})