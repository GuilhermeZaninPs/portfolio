const projectTitle1 = document.querySelector('.project-title1')
const projectTitle2 = document.querySelector('.project-title2')
const projectContent1 = document.querySelector('.project-content1')
const projectContent2 = document.querySelector('.project-content2')

const mask1 = document.querySelector('.mask1')
const mask2= document.querySelector('.mask2')

projectTitle1.style.display = 'none'
projectTitle2.style.display = 'none'
projectContent1.style.display = 'none'
projectContent2.style.display = 'none'


mask1.addEventListener('mouseover', () => {

    mask1.style.backgroundColor = 'rgba(0, 0, 0, 0.411)'

    projectTitle1.style.display = 'block'

    projectContent1.style.display = 'block'
   
})

mask1.addEventListener('mouseleave', () => {

    mask1.style.backgroundColor = 'transparent'

    projectTitle1.style.display = 'none'
   
    projectContent1.style.display = 'none'
  

})


mask2.addEventListener('mouseover', () => {
    mask2.style.backgroundColor = 'rgba(0, 0, 0, 0.411)'

  
    projectTitle2.style.display = 'block'
   
    projectContent2.style.display = 'block'
})

mask2.addEventListener('mouseleave', () => {
    mask2.style.backgroundColor = 'transparent'

   
    projectTitle2.style.display = 'none'

    projectContent2.style.display = 'none'

})

