const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

$(".click-me1").click(function(){
    $(".hide-me1").slideToggle("slow");
});

$(".click-me2").click(function(){
    $(".hide-me2").slideToggle("slow");
});

$(".click-me3").click(function(){
    $(".hide-me3").slideToggle("slow");
});