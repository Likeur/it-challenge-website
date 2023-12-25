import { gsap } from "gsap"
// import { SplitType } from "split-type"

const btnMenu = document.querySelector('#menubtn')
const menuToggle = document.querySelector('#menu__toggle')
const beforemenu = document.querySelector('#beforemenu')
const barUn = document.querySelector('#bar-1')
const barDeux = document.querySelector('#bar-2')

btnMenu.addEventListener('click', () => {
    beforemenu.classList.toggle('h-[100vh]')
    menuToggle.classList.toggle('scale-100')
    barUn.classList.toggle('rotate-45')
    barUn.classList.toggle('absolute')
    barDeux.classList.toggle('mt-2')
    barDeux.classList.toggle('-rotate-45')
})

// ----------- animated element-----------------

const logo = document.querySelector('#logo')
const uplPresent = document.querySelector('#uplpresente')
const imageBox = document.querySelector('#image_box')
const text1 = document.querySelector('#headtext1')
const text2 = document.querySelector('#headingtext2')
const paragraph = document.querySelector('#paragraph')
const inscription = document.querySelector('#inscri_btn')

// const headingtext1 = new SplitType(text1, {types: 'word'})
// const paragraph = new SplitType('#paragraph', {types:'lines'})




const heroElements = [ logo , menuToggle, btnMenu,uplPresent, text1, text2, paragraph, inscription, imageBox]


gsap.from(heroElements,{
    y:34,
    opacity:0,
    duration:0.8,
    stagger:{amount:1},
    ease:'ease'
})


// gsap.from(btnMenu,{
//     opacity: 0,
//     duration:2
// })