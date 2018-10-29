function check(form)
{
 
 if(form.uname.value == "id" && form.upassword.value == "pswrd")
  {
    window.location='welcome.html';
  }
 else
 {
   alert("Error Password or Username");
  }
}