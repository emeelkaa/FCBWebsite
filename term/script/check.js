function check() {
    var name = "";
    var password = "";
    name = myform.uname.value;
    password = myform.psw.value;
    if(name == password) {
      alert("Good Data");
      window.location = "index.html";
      return 0;
    }
    else {
      alert("Wrong Data");
    }
  }