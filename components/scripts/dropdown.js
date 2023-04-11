const navigation = document.querySelector(".navigation")
const burger = document.querySelector(".menu")


burger.addEventListener("click", ()=>{

 

    if (navigation.className == "navigation") {

        navigation.className = `dropdown`

    } else {

        navigation.className = `navigation`

    }




})

window.addEventListener('resize', setNavigationClassName);
function setNavigationClassName() {
    const navList = document.querySelector('.dropdown');
    if (window.innerWidth >= 799) {
        navList.className = 'navigation';
    } else {
        navList.className = navList.classList.contains('dropdown') ? 'dropdown' : 'navigation';
    }
}