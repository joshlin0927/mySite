// YT pause
const vidModal = [
  "#Donut",
  "#JGTrueStock",
  "#ShenMing5sec",
  "#FarGlory",
  "#OPTCPromotion",
  "#OKminiPromotion",
  "#LearningTaiwanese",
];

vidModal.forEach((element) => {
  // console.log(element + " " + "iframe");
  $(element).on("hidden.bs.modal", (e) => {

    $(element + " " + "iframe").attr(
      "src",
      $(element + " " + "iframe").attr("src")
    );
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
