 new TypeIt("#myElement", {
    strings: [`<h2 class="display-3 text-intro" >Hi,</h2>`, 
            `<h2 class="display-3 text-intro" > I'm <span class="sign display-3 text-intro" >&#60;</span> <span class="name-gz display-3 text-intro" >Guilherme Zanin</span> <span class="sign display-3 text-intro">&#62;</span></h2>`,
            `<h4 class="display-4 text-intro" id="typed2"> <span class="sign display-3 text-intro" >&#123;</span>  Front end Developer <span class="sign display-3 text-intro">&#125;</span></h4>`,
            // `<button class="contactBtn" onclick="location.href='#contact-section'">Contact me!</button>`
        ],
    cursor: false,
    speed: 30
  }).go();


const link1 = document.querySelector('.container-text1')
const link2 = document.querySelector('.container-text2')

const mask1 = document.querySelector('.mask1')
const mask2= document.querySelector('.mask2')

link1.style.display = 'none'
link2.style.display = 'none'

link1.addEventListener('mouseover', () => {
    mask1.style.backgroundColor = 'rgba(0, 0, 0, 0.511)'
    link1.style.display = 'block'
})
link2.addEventListener('mouseover', () => {
    mask2.style.backgroundColor = 'rgba(0, 0, 0, 0.511)'
    link2.style.display = 'block'
})
link1.addEventListener('mouseleave', () => {
    mask1.style.backgroundColor = 'transparent'
    link1.style.display = 'none'
})
link2.addEventListener('mouseleave', () => {
    mask2.style.backgroundColor = 'transparent'
    link2.style.display = 'none'
})
mask1.addEventListener('mouseover', () => {
    mask1.style.backgroundColor = 'rgba(0, 0, 0, 0.511)'
    link1.style.display = 'block'
})
mask1.addEventListener('mouseleave', () => {
    mask1.style.backgroundColor = 'transparent'
    link1.style.display = 'none'
})
mask2.addEventListener('mouseover', () => {
    mask2.style.backgroundColor = 'rgba(0, 0, 0, 0.411)'
    link2.style.display = 'block'
})
mask2.addEventListener('mouseleave', () => {
    mask2.style.backgroundColor = 'transparent'
    link2.style.display = 'none'
})

