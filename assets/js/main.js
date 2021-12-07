const buy_tv_packets_btn = document.querySelectorAll('#buy_tv_packets_btn');
const price_tv_packets = document.querySelectorAll('.price-tv-packets');

for(let i = 0 ; i < buy_tv_packets_btn.length ; i++){
    buy_tv_packets_btn[i].addEventListener('mousemove' , (e) => {
        price_tv_packets[i].classList.add('active')
    })
}

for(let i = 0 ; i < buy_tv_packets_btn.length ; i++){
    buy_tv_packets_btn[i].addEventListener('mouseout' , (e) => {
        price_tv_packets[i].classList.remove('active')
    })
}


const one_person_packets_btn = document.getElementById("one_person_packets_btn");
const two_person_packets_btn = document.getElementById("two_person_packets_btn");
const one_person_packets = document.querySelector('.one-person-packets')
const two_person_packets = document.querySelector('.two-person-packets')

one_person_packets_btn.addEventListener('click' , (e) => {
    one_person_packets.classList.remove('active');
    two_person_packets.classList.remove('active');
    one_person_packets_btn.classList.remove('active');
    two_person_packets_btn.classList.remove('active');
    one_person_packets.classList.add('active');
    one_person_packets_btn.classList.add('active');
})

two_person_packets_btn.addEventListener('click' , (e) => {
    one_person_packets.classList.remove('active');
    two_person_packets.classList.remove('active');
    one_person_packets_btn.classList.remove('active');
    two_person_packets_btn.classList.remove('active');
    two_person_packets.classList.add('active');
    two_person_packets_btn.classList.add('active');
})


const hamburger_menu_btn = document.querySelector('.hamburger_menu_btn');
const mobile_menu = document.querySelector('.mobile_menu');
const mobile_menu_li = document.querySelectorAll('.mobile_menu .nav-list ul li');
hamburger_menu_btn.addEventListener('click' , (e) => {
    hamburger_menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('active');
})
for(let i = 0 ; i<mobile_menu_li.length ; i++){
    mobile_menu_li[i].addEventListener('click' , (e) => {
        hamburger_menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('active');
    })
}



const open_directory_btn = document.querySelectorAll('#open_directory_btn');
const open_content = document.querySelectorAll('.open_content');

for(let i = 0 ; i< open_directory_btn.length;i++){
    open_directory_btn[i].addEventListener('click' , (e) => {
        open_content[i].classList.toggle('active')
    })
}

