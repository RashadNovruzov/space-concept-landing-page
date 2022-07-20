var burger = document.querySelector(".burger");
var header_menu = document.querySelector('.header__menu');
var body = document.querySelector('body');

burger.addEventListener('click',function(){
	if (header_menu.style.opacity == "") {
		header_menu.style.opacity = '1';
		header_menu.style.transform = 'translateX(0)';
		body.style.overflow = 'hidden';
		this.style.transform = "rotate(-90deg)";
	}else{
		header_menu.style.opacity = "";
		header_menu.style.transform = 'translateX(-100%)';
		body.style.overflow = 'auto';
		this.style.transform = "rotate(0deg)";
	}
})