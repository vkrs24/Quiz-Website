document.addEventListener("DOMContentLoaded", function () {
  var totalStudentsCard = document.getElementById("totalStudentsCard");
  var studentDetails = document.getElementById("studentDetails");

  totalStudentsCard.addEventListener("click", function () {
    studentDetails.style.display = "block";
  });
});

function goToHomePage() {
  window.location.href =
    "C:\\Users\\Malk-pc\\OneDrive\\Desktop\\PROJECTEXE\\Admin\\adminDashboard.html";
}

function resultPage() {
  window.location.href =
    "C:\\Users\\Malk-pc\\OneDrive\\Desktop\\PROJECTEXE\\Admin\\quiz_result.html";
}

function logout() {
  window.location.href =
    "C:\\Users\\Malk-pc\\OneDrive\\Desktop\\PROJECTEXE\\login.html";
}
