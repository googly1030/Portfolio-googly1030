function openGmail() {
  var subject = document.getElementsByClassName("subject");
  var bodyElements = document.getElementsByClassName("body");
  var toValue = "pradeepgoogly2002@gmail.com";
  var subjectvalue = subject[0].value;
  var bodyValue = bodyElements[0].value;

  var gmailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&to=" +
    encodeURIComponent(toValue) +
    "&su=" +
    encodeURIComponent(subjectvalue) +
    "&body=" +
    encodeURIComponent(bodyValue);
  window.open(gmailUrl, "_blank");
}

var EducationLayout = document.getElementsByClassName("education");
var learnbtn = document.querySelector(".learnbtn");

function learnmore() {
  var currentDisplay = window.getComputedStyle(EducationLayout[0]).display;

  if (currentDisplay === "block" || currentDisplay === "") {
    EducationLayout[0].style.display = "none";
    learnbtn.innerHTML = "More About me";
  } else {
    EducationLayout[0].style.display = "block";
    learnbtn.innerHTML = "Hide";
  }
}

var cv = document.getElementsByClassName("cv");
var count = 0;
function Clickcv() {
  for (var i = 0; i < cv.length; i++) {
    cv[i].addEventListener("click", function (e) {
      count++;
      if (count > 1) {
        alert("ARE YOU SURE DO YOU WANT TO DOWNLOAD THE CV AGAIN");
        e.currentTarget.removeattributes("download");
        e.currentTarget.removeEventListener("click", cv);
      }
    });
  }
}
