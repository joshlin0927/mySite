// language change
// localStorage.setItem("language", "TC");
// let currentLocate = localStorage.getItem("language");
// if (currentLocate == "TC") {
//   $('[name="EN"]').toggle();
// } else {
//   $('[name="TC"]').toggle();
// }

// $('li[name="TC"]').click(() => {
//   localStorage.setItem("language", "EN");
//   $('[name="TC"]').toggle();
//   $('[name="EN"]').toggle();
// });

// $('li[name="EN"]').click(() => {
//   localStorage.setItem("language", "TC");
//   $('[name="TC"]').toggle();
//   $('[name="EN"]').toggle();
// });

// index animation
$(document).ready(function () {
  // Add a delay of 1 second before removing
  setTimeout(function () {
    $("#selectionMenu").removeClass("collapse");
  }, 4000);

  // Initially hide the selectionMenu
  $(".menuHolder").css({
    height: "0",
  });

  // Add a delay and then animate the height
  setTimeout(function () {
    $(".menuHolder").css(
      {
        height: "100vh",
      },
      500, // Animation duration in milliseconds
      "ease" // Easing function (you can use "linear" or "ease-out" etc.)
    );
  }, 2000);
});

// showcase selector
function applyAnimation(index) {
  const menu = $(".menu");

  switch (index) {
    case 0:
      menu.css("grid-template-columns", "90% 5% 5%");
      break;
    case 1:
      menu.css("grid-template-columns", "5% 90% 5%");
      break;
    case 2:
      menu.css("grid-template-columns", "5% 5% 90% ");
      break;

    default:
      menu.css("grid-template-columns", "33.33% 33.33% 33.33%");
  }

  // Add a transition to smoothly animate the change
  menu.css("transition", "grid-template-columns 0.5s ease-in-out");
}
$(".menuHolder").on("mouseenter click", function () {
  const index = $(this).index(); // Get the index of the clicked/hovered element
  applyAnimation(index);
});
$(".menuHolder").on("mouseleave", function () {
  $(".menu").css("transition", "grid-template-columns 0.5s ease-in-out");
  $(".menu").css("grid-template-columns", "33.33% 33.33% 33.33%");
});

console.log(this);

// carousel
$(document).ready(function () {
  $(Window).on("scroll", function(){
    console.log("1");
  });
});

// YT pause
const vidModal = [
  "#Donut",
  "#JGTrueStock",
  "#FarGlory",
  "#OPTCPromotion",
  "#OKminiPromotion",
  "#LearningTaiwanese",
];

let videos = document.querySelectorAll("iframe, video");

vidModal.forEach((element) => {
  // console.log($(this).find("iframe"));
  $(element).on("hide.bs.modal", function (e) {
    $(this).find("iframe").attr("src", $(this).find("iframe").attr("src"));
  });
});
