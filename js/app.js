
const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
        //toggle Nav
        nav.classList.toggle('nav-active');
        navLinks.forEach((link,index)=>{
            link.style.animation = link.style.animation ? link.style.animation = '' : link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`; 
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

const readMoreShow = ()=>{
    const hiddenshow = document.querySelector('.hiddenP');
    const txtmore = document.querySelector('.readless');

    txtmore.addEventListener('click',()=>{
        
        if(hiddenshow.hasAttribute('hidden')){
            hiddenshow.removeAttribute('hidden');
            txtmore.innerHTML = 'Read Less';
        }
        else{
            hiddenshow.setAttribute('hidden','hidden');
            txtmore.innerHTML = 'Read More';
        }
    });
}
const app = ()=>{
    navSlide();
    readMoreShow();
}
app();
