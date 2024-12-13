
const pablal = document.getElementById('pablal');


document.addEventListener('mousemove', (e) => {
    console.log(e.clientX)
    pablal.style.left = e.clientX + 'px'
    pablal.style.top = e.clientY
        + 'px'

})