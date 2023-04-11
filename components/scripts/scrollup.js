const button = document.querySelector(`.scrollbutton`)

button.addEventListener("click", () => {

    document.documentElement.scrollTop = 0;

})

window.onscroll = () => {

    if ( document.documentElement.scrollTop > 100){
        button.style.display = "block";
    } else {

        button.style.display = "none";
    }

}

  

