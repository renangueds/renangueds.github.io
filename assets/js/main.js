/*===== menu show=====*/
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle','nav-menu')

/*===== active and remove menu =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  //Active link
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')

  //Remove menu mobile
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== scroll reveal animation =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})



/* scrool home */
sr.reveal('.home__title',{})
sr.reveal('.home__subtitle',{delay: 100})
sr.reveal('.home__cidade',{delay: 150})
sr.reveal('.button',{delay: 200})
sr.reveal('.home__img',{interval: 300})
sr.reveal('.home__social-icon',{interval: 300})

/* scroll about */
sr.reveal(' .section-title ', {delay:100})
sr.reveal('.text',{delay: 300})

/* scroll skills */
sr.reveal('.subtitle ',{})
sr.reveal('.text',{delay: 200})
sr.reveal('.skills__data',{interval: 200})
sr.reveal('.skills__img',{delay: 300})


/* scroll work */
sr.reveal('.work__contents',{interval: 100})
sr.reveal('.work__img',{interval: 200})

/* scroll contact */
sr.reveal('.subtitle ',{interval: 100})
sr.reveal('.contact__text',{interval: 100})

