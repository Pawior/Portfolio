var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.5.1.min.js";
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);

let sky = document.querySelector(".sky");
let bottom = document.querySelector(".bottom");
let sun = document.querySelector("section .sun");
let text = document.querySelector("section h1");
let photo = document.querySelector("#photo");
let desc = document.querySelector(".desc");
let anim = document.querySelector(".animated");

window.addEventListener("scroll", function () {
  var value = window.scrollY;
  sun.style.left = value * 0.6 + "px";
  sun.style.top = value * 1 + "px";
  bottom.style.bottom = value * 0.5 + "px";
  text.style.top = value * 0.6 + "px";
  photo.style.top = value * 2 + "px";
  if (value > 300) {
    sun.style.visibility = "hidden";
    text.style.visibility = "hidden";
  } else {
    sun.style.visibility = "visible";
    text.style.visibility = "visible";
  }
});

// window.addEventListener('scroll', function() {
//     var y_scroll_pos = window.pageYOffset;
//     var scroll_pos_test = element_position;
//     console.log(y_scroll_pos);
//     console.log(scroll_pos_test);
//     if(y_scroll_pos + 100 > scroll_pos_test) {
//         alert("hek");
//     }
// });

//var element_position = $(elem).offset().top;
var element_position = document.querySelector("#photo").offsetTop;
var screen_height = $(window).height();
var activation_offset = 0.4; //determines how far up the the page the element needs to be before triggering the function
var activation_point = element_position - screen_height * activation_offset;
var max_scroll_height = $("body").height() - screen_height - 5; //-5 for a little bit of buffer

let i = 0;
$(window).on("scroll", function () {
  var y_scroll_pos = window.pageYOffset;

  var element_in_view = y_scroll_pos > activation_point;
  var has_reached_bottom_of_page =
    max_scroll_height <= y_scroll_pos && !element_in_view;
  if (i == 0) {
    if (element_in_view || has_reached_bottom_of_page) {
      //alert("hek");
      i++;
      desc.classList.add("animated");
      desc.style.visibility = "visible";
    }
  }
});

var canvas = document.getElementById("canvas");

// animate();
const mailDiv = document.querySelector(".mailDiv");
const mailInput = document.querySelector(".mail");
mailDiv.addEventListener("click", () => {
  mailInput.classList.add("animated2");
  mailInput.style.visibility = "visible";
  setTimeout(() => {
    mailInput.style.overflow = "visible";
  }, 1001);
});
