const open = document.querySelector('.open');
const close = document.querySelector('.close');
const navigation = document.querySelector('.navigation');

open.addEventListener("click", function(){
    navigation.classList.remove("hide");
});

close.addEventListener("click", function(){
    navigation.classList.add("hide");
});