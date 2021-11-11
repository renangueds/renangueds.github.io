/* menu show */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')

/* active and remove menu */
const navLink = document.querySelectorAll('.nav-link')
function linkAction() {
  //Active link
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')
  //Remove menu mobile
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/* scroll reveal animation */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})
sr.reveal('.title', { interval: 100 })
sr.reveal('.home-title', { delay: 50 })
sr.reveal('.home-cidade', { delay: 75 })
sr.reveal('.home-social-icon', { interval: 250 })
sr.reveal('.about-img', { interval: 150 })
sr.reveal(' .title ', { delay: 100 })
sr.reveal('.text', { delay: 150 })
sr.reveal('.subtitle ', {})
sr.reveal('.text', { delay: 50 })
sr.reveal('.skills-data', { interval: 75 })
sr.reveal('.work-contents', { interval: 50 })
sr.reveal('.work-img', { interval: 150 })
sr.reveal('.subtitle ', { interval: 50 })
sr.reveal('.contact-text', { interval: 100 })
sr.reveal('.button', { interval: 150 })

/*  back to top button */
window.onload = function () {
  const backToTopButton = document.querySelector('.back-to-top')
  const footer = document.querySelector('#footer')
  const footerHeigth = footer.offsetHeight
  const windowHeight = document.documentElement.scrollHeight
  const topFooter = windowHeight - footerHeigth - window.innerHeight
  function backToTop() {
    if (window.scrollY >= 480) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  }

  /* change color back to top button when on footer */
  function changeColorBackToTopButton() {
    if (window.scrollY >= topFooter) {
      backToTopButton.classList.add('add')
    } else {
      backToTopButton.classList.remove('add')
    }
  }

  /* activate menu alt color at current section */
  const sections = document.querySelectorAll('main section[id]')
  function activateMenuAtCurrentSection() {
    const sectionLimit = window.pageYOffset + (window.innerHeight / 8) * 3
    for (const section of sections) {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute('id')
      const startSectionLimit = sectionLimit >= sectionTop
      const endSectionLimit = sectionLimit <= sectionTop + sectionHeight
      if (startSectionLimit && endSectionLimit) {
        document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
      } else {
        document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
      }
    }
  }
  window.addEventListener('scroll', function () {
    backToTop(),
      changeColorBackToTopButton(),
      activateMenuAtCurrentSection()
  })
}



