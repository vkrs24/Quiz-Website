function getService() {
  window.location.href =
    "C:\\Users\\Malk-pc\\OneDrive\\Desktop\\PROJECTEXES.1\\service.html";
}

user = [];

admin = [];

adminUser = { emailId: "diliprajk2004@gmail.com", password: "Admin@04" };
studentUser = { emailId: "admin@gmail.com", password: "admin@123" };
admin.push(adminUser);
user.push(studentUser);

function userSignUp() {
  var emailId = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  userObject = { emailId: emailId, password: password };
  user.push(userObject);
  console.log("iscreated");
  document.getElementById("isCreated").innerHTML = "successfully created";
}
function userLogin() {
  var emailId = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  isUser = false;
  isAdmin = false;
  for (let i = 0; i < user.length; i++) {
    var obj = user[i];
    em = obj.emailId;
    pass = obj.password;

    if (em == emailId) {
      if (pass == password) {
        isUser = true;
        break;
      }
    }
  }

  for (let i = 0; i < admin.length; i++) {
    var obj = user[i];
    em = obj.emailId;
    pass = obj.password;

    if (em == emailId) {
      if (pass == password) {
        isAdmin = true;
        break;
      }
    }
  }

  if (isUser == true) {
    //  alert("success");
    window.location.href =
      "C:\\Users\\Malk-pc\\OneDrive\\Desktop\\PROJECTEXE\\Admin\\adminDashboard.html";
  } else if (isAdmin == true) {
    //  window.location.href =
    //  "C:\\Users\\Malk-pc\\OneDrive\\Desktop\\PROJECTEXE\\Admin\\adminDashboard.html";
  } else {
    alert("wrong password");
  }
}
