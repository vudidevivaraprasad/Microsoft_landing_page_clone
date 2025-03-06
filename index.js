//navigation na navigation bar
let burger = document.querySelector('.burger');
let scrolling_nav = document.querySelector('.scrolling_nav');
let close_nav = document.querySelector('.close_button');

burger.addEventListener('click',() => {
    scrolling_nav.classList.add('active');
    burger.style.display = 'none';
    close_nav.style.display = 'initial';

})

close_nav.addEventListener('click',() => {
    scrolling_nav.classList.remove('active');
    burger.style.display = 'initial';
    close_nav.style.display = 'none'
})

//image-slider
let image_slider = document.querySelector('.image_slider');
let left_button = document.querySelector('.left_button');
let right_button = document.querySelector('.right_button');
let first_image = document.querySelector('.first');
let second_image = document.querySelector('.second');
let activated = true;
let left_clicked = function()  {
    first_image.classList.add('active');
    second_image.classList.remove('active');
    left_button.classList.add('active');
    right_button.classList.remove('active');
}

let right_clicked = function() {
    first_image.classList.remove('active');
    second_image.classList.add('active');
    left_button.classList.remove('active');
    right_button.classList.add('active');
}
left_button.addEventListener('click',left_clicked);

right_button.addEventListener('click',right_clicked);

setInterval(function() {
    if(activated) {
        left_clicked();
        activated = false;
    }
    else {
        right_clicked();
        activated = true;
    }
},3000);

// all microsoft button
let allmicrosoft  = document.querySelector('.allmicrosoft');
let footerfixed = document.querySelector('.footer_fixed');
allmicrosoft.addEventListener('click',() => {
    footerfixed.classList.toggle('active');
})

//collapsable all microsoft
let collapsable =  document.querySelectorAll('.opening');
let opening_collapsaable = document.querySelectorAll('.software');
opening_collapsaable.forEach(item => {
    item.addEventListener('click',(e) => {
        item.children[2].classList.toggle('active');
        item.children[0].classList.toggle('active');
    })
})

//animation
let edge = document.querySelector('.edge');
let boxes_container = document.querySelector('.boxes_container');
let edge_bound = boxes_container.getBoundingClientRect();
window.addEventListener('scroll',() => {
    if(scrollY > edge_bound.top) {
        edge.classList.add('active');
    }
    else
        edge.classList.remove('active');
})

//search field
let search_btn = document.querySelector('.search_btn');
let search = document.querySelector('.search');
search_btn.addEventListener('click',() => {
    search.classList.toggle('active');
})

//card field
let card_container = document.querySelector('.card_container');
let card = document.querySelector('.card');
card.addEventListener('mouseenter',() => {
    card_container.classList.add('active');
})

card.addEventListener('mouseout',() => {
    card_container.classList.remove('active');
})

card.addEventListener('click',() => {
    card_container.classList.toggle('active');
})

