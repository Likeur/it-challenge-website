import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { SplitType } from "split-type"
 


const btnMenu = document.querySelector('#menubtn')
const menuToggle = document.querySelector('#menu__toggle')
const menuToggle2 = document.querySelector('#menu__toggle2')
const beforemenu = document.querySelector('#beforemenu')
const barUn = document.querySelector('#bar-1')
const barDeux = document.querySelector('#bar-2')

btnMenu.addEventListener('click', () => {
    beforemenu.classList.toggle('h-[100vh]')
    setTimeout(() => {
        menuToggle2.classList.toggle('scale-100')
    }, 200);
    barUn.classList.toggle('rotate-45')
    barUn.classList.toggle('absolute')
    barDeux.classList.toggle('mt-2')
    barDeux.classList.toggle('-rotate-45')
})

// ----------- animated element-----------------

const logo = document.querySelector('#logo')
const lien1 = document.querySelector('#lien1')
const lien2 = document.querySelector('#lien2')
const lien3 = document.querySelector('#lien3')

const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')
const img3 = document.querySelector('#img3')
const img4 = document.querySelector('#img4')
// const fleche1 = document.querySelector('#fleche1')
// const fleche2 = document.querySelector('#fleche2')
const uplPresent = document.querySelector('#uplpresente')
const imageBox = document.querySelector('#image_box')
const text1 = document.querySelector('#headtext1')
const text2 = document.querySelector('#headingtext2')
const paragraph = document.querySelector('#paragraph')
const inscription = document.querySelector('#inscri_btn')

const partnerText= document.querySelector('#partner_text')
const partner1 = document.querySelector('#partnerimg1')
const partner2 = document.querySelector('#partnerimg2')
const partner3 = document.querySelector('#partnerimg3')
const partner4 = document.querySelector('#partnerimg4')

// const headingtext1 = new SplitType(text1, {types: 'word'})
// const paragraph = new SplitType('#paragraph', {types:'lines'})

const heroElements = [ logo ,lien1, lien2, lien3, btnMenu,uplPresent,img1, text1, text2,img2, paragraph, inscription, img3, imageBox, img4]

function firstAnimation(){
    gsap.from(heroElements,{
        y:64,
        opacity:0,
        duration:0.8,
        stagger:{amount:1},
        ease:'ease'
    })
}

firstAnimation()

gsap.registerPlugin(ScrollTrigger);
const partnerElements = [partnerText,partner1, partner2,partner3,partner4]

gsap.from(partnerElements,{
    scrollTrigger: {
        trigger: partnerElements,
        start: 'top 90%',
        end: 'top 40%',
        scrub : true
     
    },
    y:64,
    opacity:0,
    duration:0.5,
    stagger:{amount:1},
    ease:'ease',
    
})

const sec3 = document.querySelector('#sec3')
const tl = gsap.timeline()

const facBtnUn = document.querySelector('.fac-button1')
const faqBox = document.querySelector('.faq_box')
const faqReponse = document.querySelector('.faq_reponse1')

facBtnUn.addEventListener('click', () => {
    faqBox.classList.toggle('h-max')
    faqBox.classList.toggle('h-[10vh]')
    faqReponse.classList.toggle('opacity-1')
    faqReponse.classList.toggle('absolute')
    faqReponse.classList.toggle('opacity-0')
})


