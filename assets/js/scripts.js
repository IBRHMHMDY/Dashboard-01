/*=============== Show Hide Aside ===============*/
const sideMenu = document.querySelector("aside");
const btnMenu = document.querySelector("#btn-menu");
const btnClose = document.querySelector("#btn-close");
btnMenu.addEventListener('click', () => {
   sideMenu.style.display = 'block';
})

btnClose.addEventListener('click', () => {
   sideMenu.style.display = 'none';
})

/*=============== DARK LIGHT THEME ===============*/
const btnTheme = document.querySelector(".theme-toggler");
const btnLight = document.querySelector(".light-mode");
const btnDark = document.querySelector(".dark-mode");
const currentTheme = localStorage.getItem('current-theme');

const setDarkTheme = () => {
   document.body.classList.add('dark-theme');
   btnTheme.querySelector('span:nth-child(1)').classList.remove('active');
   btnTheme.querySelector('span:nth-child(2)').classList.add('active');
}
const setLightTheme = () => {
   document.body.classList.remove('dark-theme');
   btnTheme.querySelector('span:nth-child(1)').classList.add('active');
   btnTheme.querySelector('span:nth-child(2)').classList.remove('active');
}

const getCurrentTheme = () => {
   if(currentTheme === 'dark'){
      setDarkTheme();
   }else{
      setLightTheme();
   }

}

getCurrentTheme();


btnLight.addEventListener('click', () =>{
   window.localStorage.clear();
   localStorage.setItem('current-theme', 'light');
   setLightTheme();
})
btnDark.addEventListener('click', () =>{
   window.localStorage.clear();
   localStorage.setItem('current-theme', 'dark');
   setDarkTheme();
})
