gsap.to('.demo', {opacity:1})

const blue = document.querySelector('.blue')
const restart = document.querySelector('.restart')
const animation = gsap.timeline()
.to(blue, {x:445})
.to(blue, {y:445})
.to(blue, {x:0})
.to(blue, {y:0})
.to(blue, {opacity:0, duration:0.3}, '-=0.25')

restart.addEventListener('click', () => {
    animation.restart()
})