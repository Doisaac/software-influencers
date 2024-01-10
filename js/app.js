const menuBtn = document.querySelector('.menu')
const navbar = document.querySelector('.nav-list')
const links = document.querySelectorAll('.nav-link')

menuBtn.addEventListener('click', function(){
    navbar.classList.toggle('nav-list-show')
})

links.forEach(function(link){
    link.addEventListener('click', function(){
        navbar.classList.remove('nav-list-show')
    })
})