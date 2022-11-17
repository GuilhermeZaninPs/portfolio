
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

