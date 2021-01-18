let sky = document.querySelector(".sky")
let bottom = document.querySelector(".bottom")
let sun = document.querySelector("section .sun")
let text = document.querySelector("section h1")
let photo = document.querySelector(".photo")

window.addEventListener("scroll", function(){
    var value = window.scrollY;
    sun.style.left = value * 0.6 + "px";
    sun.style.top = value * 1 + "px";
    bottom.style.bottom = value * 0.5 + "px";
    text.style.top = value * 0.5 + "px";
    photo.style.top = value * 2 + "px";
    if (value > 500 ){
        sun.style.visibility = "hidden";
        text.style.visibility = "hidden";
    }
    else {
        sun.style.visibility = "visible";
        text.style.visibility = "visible";
    } 
    
    
})

var element_position = document.querySelector('.photo').offsetTop;

window.addEventListener('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = element_position;
    console.log(y_scroll_pos);
    console.log(scroll_pos_test);
    if(y_scroll_pos + 100 > scroll_pos_test) {
        alert("hek");
    }
});