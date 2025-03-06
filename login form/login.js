let first_button = document.querySelector('.btn1');
let container1 = document.querySelector('.container1');
let container2 = document.querySelector('.container2');
let mail = document.querySelector('.mail');
let userid = document.querySelector('.userid');
let userid_copy = userid;
let backbtn = document.querySelector('.userid button');
let second_button = document.querySelector('.btn2');
let show_password = document.querySelector('.showpass');
let second_input = document.querySelector('.second_input');
let for_password  = false;

let firstbtn_clicked = function() {
    if(mail.value != '' && mail.value.endsWith('@outlook.com')) {
        container1.style.transform = 'translateX(-100%)';
        container2.style.transform = 'translateX(-100%)';
        userid.textContent = `${userid_copy.textContent} ${mail.value}`;
        userid.style.cursor = 'pointer';
    }
    else {
        let ele = document.createElement('p').textContent = 'Enter valid email address';
        container1.append(ele);
    }
}

first_button.addEventListener('click',firstbtn_clicked);
show_password.addEventListener('click',(e) =>  {
    if(for_password){
        e.target.style.backgroundColor = 'transparent';
        second_input.setAttribute('type','password');
        for_password = false;
    }
    else{
        e.target.style.backgroundColor = 'red';
        second_input.setAttribute('type','text');
        for_password = true;
    }
})
userid.addEventListener('click',function() {
    container1.style.transform = 'translateX(0)';
    container2.style.transform = 'translateX(0)';
    userid.textContent = userid_copy.textContent[0];
})