const hero = document.querySelector('.hero'),
    text = hero.querySelector('h1'),
    walk = 100;

const shadow = (e) => {
    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;
    if (!e.target.matches('.hero')) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }
    let walkX = Math.round(x / width * walk - (walk / 2)),
        walkY = Math.round(y / height * walk - (walk / 2));

    text.style.textShadow = `
        ${walkX}px ${walkY}px 0 rgba(255,0,255,0.7),
        ${walkX * -1}px ${walkY}px 0 rgba(0,255,255,0.7),
        ${walkY}px ${walkX * -1}px 0 rgba(0,255,0,0.7),
        ${walkY * -1}px ${walkX}px 0 rgba(0,0,255,0.7)
    `;
}
document.addEventListener('mousemove', (e) => {
    shadow(e);
});