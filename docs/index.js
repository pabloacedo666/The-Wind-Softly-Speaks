
const pablal = document.getElementById('pablal');


document.addEventListener('mousemove', (e) => {
    // console.log(e.clientX)
    pablal.style.left = e.clientX + 'px'
    pablal.style.top = e.clientY + 'px'
})
document.addEventListener('touchmove', (e) => {
    // console.log(e)
    pablal.style.left = e.touches[0].clientX + 'px'
    pablal.style.top = e.touches[0].clientY + 'px'
})


document.querySelector('audio').addEventListener('mouseenter', () => {
    console.log('on')
    document.body.classList.add('vanish')
})
document.querySelector('audio').addEventListener('mouseleave', () => {
    console.log('off')
    document.body.classList.remove('vanish')
})