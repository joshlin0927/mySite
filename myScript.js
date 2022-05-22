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

// language change
localStorage.setItem("language", "TC");
let currentLocate = localStorage.getItem("language");
if (currentLocate == "TC") {
  $('[name="EN"]').toggle();
} else {
  $('[name="TC"]').toggle();
}

$('li[name="TC"]').click(() => {
  localStorage.setItem("language", "EN");
  $('[name="TC"]').toggle();
  $('[name="EN"]').toggle();
});

$('li[name="EN"]').click(() => {
  localStorage.setItem("language", "TC");
  $('[name="TC"]').toggle();
  $('[name="EN"]').toggle();
});

grecaptcha.ready(function () {
  grecaptcha
    .execute("6LeWUQsgAAAAAI2LVDGHMMH13bvO5lpeVzsJKx7i", { action: "homepage" })
    .then(function (token) {
      document.getElementById("captchaResponse").value = token;
    });
});
