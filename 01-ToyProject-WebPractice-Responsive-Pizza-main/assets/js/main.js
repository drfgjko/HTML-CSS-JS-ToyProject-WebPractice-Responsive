/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)

/*=============== SWIPER POPULAR ===============*/
const swiperPopular = new Swiper('.popular__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto'
})

/*=============== SHOW SCROLL UP ===============*/
const scrollUP = () => {
    const scrollUP = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUP.classList.add('show-scroll') 
    : scrollUP.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUP)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const scrollActive = ()=>{
    const scrollDown = window.scrollY
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId+']')
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:300,
})

sr.reveal(`.home__data, .popular__container,.footer`)
sr.reveal(`.home__board`,{delay:700,distance:'100px',origin:'right'})
sr.reveal(`.home__pizza`,{delay:700,distance:'100px',origin:'bottom',rotate:{z:-90}})
sr.reveal(`.home__ingredient`,{delay:2000,interval:100})
sr.reveal(`.about__data, .recipe__list, .contact__data`,{origin:'right'})
sr.reveal(`.about__img, .recipe__img, .contact__image`,{origin:'left'})
sr.reveal(`.products__card`,{interval:100})
