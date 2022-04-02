var swiper = new Swiper('.black-bar-swiper', {
	spaceBetween: 0,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		loop: true,
		disableOnInteraction: false,
	},
});

var swiper = new Swiper('.classics__swiper', {
	loop: true,
	navigation: {
		prevEl: '.swiper-button-prev-classics',
		nextEl: '.swiper-button-next-classics',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		683: {
			slidesPerView: 2,
		},
		1025: {
			slidesPerView: 3,
		},
		1300: {
			slidesPerView: 6,
			loop: false,
		},
	},
});

var swiper = new Swiper('.swiper-categorias', {
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 5000,
		loop: true,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		391: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
			centeredSlides: false,
		},
		1025: {
			slidesPerView: 3,
			loop: false,
			autoplay: false,
			centeredSlides: false,
		},
		1300: {
			slidesPerView: 3,
			spaceBetween: 20,
			loop: false,
			autoplay: false,
			centeredSlides: false,
		},
	},
});

var swiper = new Swiper('.novidades-carousel', {
	loop: false,
	breakpoints: {
		320: {
			slidesPerView: 2.34,
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 17.5,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 15,
			navigation: {
				prevEl: '.swiper-button-prev-novidades',
				nextEl: '.swiper-button-next-novidades',
			},
		},
		1400: {
			slidesPerView: 4.33,
			spaceBetween: 16,
			navigation: {
				prevEl: '.swiper-button-prev-novidades',
				nextEl: '.swiper-button-next-novidades',
			},
		},
	},
});

var swiper = new Swiper('.mais-vendidos-carousel', {
	loop: false,
	breakpoints: {
		1400: {
			slidesPerView: 4.33,
			spaceBetween: 16,
			navigation: {
				prevEl: '.swiper-button-prev-mais-vendidos ',
				nextEl: '.swiper-button-next-mais-vendidos ',
			},
		},
	},
});

const buttonSelectVans = document.querySelector('[data-select-vans]');
const menuOptionsVans = document.querySelector('.footer__list-vans--ativo');

buttonSelectVans.addEventListener('click', () => {
	menuOptionsVans.classList.toggle('footer__list-vans--ativo');
});

const buttonSelectAjuda = document.querySelector('[data-select-ajuda]');
const menuOptionsSuport = document.querySelector('.footer__list-ajuda--ativo');

buttonSelectAjuda.addEventListener('click', () => {
	menuOptionsSuport.classList.toggle('footer__list-ajuda--ativo');
});

const botaoMenuMasculino = document.querySelector('[data-select-masculino]');
const menuMasculino = document.querySelector('.nav__masculino--list--ativo');

botaoMenuMasculino.addEventListener('click', () => {
	menuMasculino.classList.toggle('nav__masculino--list--ativo');
	botaoMenuMasculino.classList.toggle('nav__item--ativo');
});

const botaoMenuFeminino = document.querySelector('[data-select-feminino]');
const menuFeminino = document.querySelector('.nav__feminino--list--ativo');

botaoMenuFeminino.addEventListener('click', () => {
	menuFeminino.classList.toggle('nav__feminino--list--ativo');
	botaoMenuFeminino.classList.toggle('nav__item--ativo');
});

const botaoMenuInfantil = document.querySelector('[data-select-infantil]');
const menuInfantil = document.querySelector('.nav__infantil--list--ativo');

botaoMenuInfantil.addEventListener('click', () => {
	menuInfantil.classList.toggle('nav__infantil--list--ativo');
	botaoMenuInfantil.classList.toggle('nav__item--ativo');
});

const botaoMenuMais = document.querySelector('[data-select-mais]');
const menuMais = document.querySelector('.nav__mais--list--ativo');

botaoMenuMais.addEventListener('click', () => {
	menuMais.classList.toggle('nav__mais--list--ativo');
	botaoMenuMais.classList.toggle('nav__item--ativo');
});

const botaoMenuNav = document.querySelector('.toggle-menu');
const botaoCloseNav = document.querySelector('.toggle-menu');
const menu = document.querySelector('.menu-bar');
const shadowMain = document.querySelector('.content-home');
const blockScrollBody = document.querySelector('body');

botaoMenuNav.addEventListener('click', () => {
	menu.classList.toggle('menu-bar-ativo');
	botaoMenuNav.classList.toggle('icon-menu');
	botaoCloseNav.classList.toggle('icon-close');
	shadowMain.classList.toggle('shadow-main');
	blockScrollBody.classList.toggle('block-scroll');
});
