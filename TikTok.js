const yesbtn = document.querySelector('#yesbtn');

yesbtn.addEventListener ('click',function () {
    alert('Asi con mas ganas dan de chambear')
});
const nobtn = document.querySelector('#nobtn');

nobtn.addEventListener('mouseover', function (){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    nobtn.style.setProperty('top',randomX+'%');
    nobtn.style.setProperty('left',randomY+'%');
    nobtn.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`);

})