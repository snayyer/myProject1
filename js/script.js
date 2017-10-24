function formCheck() {

  var userEmail = document.userForm.emailAddress.value;
  var vaildEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

 if(vaildEmail.test(userEmail) ==  false) {
    alert("Please enter a vaild email address");
    document.userForm.emailAddress.focus();
    return false;
  } else {
    alert("Thanks for signing up!");
    return true;
  }
}
