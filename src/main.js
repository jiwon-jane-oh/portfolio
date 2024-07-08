//window: global object
//window.document.querySelector();

//Header 에 페이지 아래로 스크롤시 다크 스타일링 적용

const header = document.querySelector('.header');
const headerRect = header.getBoundingClientRect();
const headerHeight = headerRect.height;

document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
  const value = 1 - window.scrollY / homeHeight;
  home.style.opacity = `${value}`;
});

const arrow = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrow.style.opacity = 1;
    // arrow.classList.add('arrow-hide');
  } else {
    arrow.style.opacity = 0;
    //  arrow.classList.remove('arrow-hide');
  }
});

//Navbar toggle button click
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});
