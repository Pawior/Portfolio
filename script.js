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

//var elem = document.querySelector('#photo');
//var element_position = $(elem).offset().top;
var element_position = document.querySelector("#photo").offsetTop;
var screen_height = $(window).height();
var activation_offset = 0.4; //determines how far up the the page the element needs to be before triggering the function
var activation_point = element_position - screen_height * activation_offset;
var max_scroll_height = $("body").height() - screen_height - 5; //-5 for a little bit of buffer

//Does something when user scrolls to it OR
//Does it when user has reached the bottom of the page and hasn't triggered the function yet
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
// var ctx = canvas.getContext("2d");

// function drawLine(x1, y1, x2, y2, ratio) {
//   ctx.fillRect(0, 0, 300, 300);
//   ctx.beginPath();
//   ctx.moveTo(x1, y1);
//   x2 = x1 + ratio * (x2 - x1);
//   y2 = y1 + ratio * (y2 - y1);
//   ctx.lineTo(x2, y2);
//   ctx.stroke();
//   ctx.fillStyle = "green";
//   ctx.fillRect(20, 10, 150, 100);
//   ctx.closePath();

//   // And if we intend to start new things after
//   // this, and this is part of an outline,
//   // we probably also want a ctx.closePath()
// }

// function animate(ratio) {
//   ratio = ratio || 0;
//   drawLine(0, 0, 300, 300, ratio);
//   if (ratio < 1) {
//     requestAnimationFrame(function () {
//       animate(ratio + 0.01);
//     });
//   }
// }

// animate();
const mailDiv = document.querySelector(".mailDiv");
const mailInput = document.querySelector(".mail");
mailDiv.addEventListener("click", () => {
  // mailInput.classList.add("mailText");
  mailInput.classList.add("animated2");
  mailInput.style.visibility = "visible";
});

// NIEUDANE NIE ZATRZYMANIE ANIMACJI HOVER

// let adding = document.getElementsByClassName('fas');

// for (let j = 0; j <= adding.length; j++) {
//   adding[j].addEventListener('animationend', function(e) {
//     adding[j].classList.remove('biggerClass');
//   });

//  adding[j].addEventListener('mouseover', function(e) {
//    adding[j].classList.add('biggerClass')
//  })
// }

// $("i").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
//     $(this).removeClass("biggerClass")
//   })

//   $("i").hover(function(){
//     $(this).addClass("biggerClass");
//   })
