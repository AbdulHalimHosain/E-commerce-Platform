const menuIcon = document.getElementById('menu-icon')
const navMenu = document.getElementById('menu')


menuIcon .addEventListener('click', () => {
    if(navMenu.className == 'nav'){
        navMenu.classList.remove('nav')
    }else{
        navMenu.classList.add('nav')
    }
})