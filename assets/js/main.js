/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop:true,
    spaceBetween: -24,
    grabCursor:true,
    slidesPerview:'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay:3000,
        disableOnInteraction:false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }

    
  });
  /*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
    loop:true,
    spaceBetween: 16,
    grabCursor:true,
    slidesPerview:'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    breakpoints: {
        1150: {
            slidesPerview: 4,
            centeredSlides: false,
        }
    }

    
  })


/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
    loop:true,
    spaceBetween: 16,
    slidesPerview:'auto',

      
    breakpoints: {
        1150: {
            slidesPerview: 3,
            
        }
    }

    
  });


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                 : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections =document.querySelectorAll('section[id')
const scrollActive = () =>{

    const scrollDown = window.scrollY
    
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
             sectionTop = current.offsetTop - 58,
             sectionId = current.getAttribute('id'),
             sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
             
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')

        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme ='ri-sun-line'
//previously selected topic
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// we validate if the user previosly choose a topic
if(selectedTheme){
    // if the validation id fulfilled we ask what the issue was to know if we activated or deactivited the dark
    document.body.classList[selectedTheme==='dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon ==='ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// active / deactivate the theme manually with the button

themeButton.addEventListener('click', () => {
    // ada or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.background-image2, .background-image3, .background-image4,
           .background-image5, .testominial__container, .footer`)
sr.reveal(`.home__images`,{delay: 600})
sr.reveal(`.services__card`,{interval: 100})
sr.reveal(`.discount__data`,{origin: 'left'})
sr.reveal(`.discount__iamges`,{origin: 'right'})

