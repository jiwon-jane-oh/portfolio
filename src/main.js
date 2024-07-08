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
