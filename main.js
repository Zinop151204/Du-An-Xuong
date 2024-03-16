const checkopen = document.querySelector('#checkopen');
const checkclose = document.querySelector('#checkclose');
const headernav= document.querySelector('.main-menu');
checkopen.addEventListener('click',()=>{
    // headernav.style.display = 'Block';
    headernav.style.left = 0;
    headernav.style.opacity = 1;
})
checkclose.addEventListener('click',()=>{
    // headernav.style.display = 'Block';
    headernav.style.left = '100%';
    headernav.style.opacity = 0;
})