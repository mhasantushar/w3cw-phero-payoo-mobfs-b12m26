const custMobile = "00123456789";
const custSecpin = "1234";

//SECTION - LOGIN SCRIPTS
function isLoginGranted() {
  const txtMobile = document.getElementById("fld-mobile").value;
  const txtSecpin = document.getElementById("fld-secpin").value;

  if (txtMobile === null || txtSecpin === null) return false;
  if (txtMobile !== custMobile || txtSecpin !== custSecpin) return false;

  console.log (txtMobile, txtSecpin)

  return true;
}

const btnLogin = document.getElementById("btn-login");
if (btnLogin) {
  btnLogin.addEventListener("click", function (e) {
    e.preventDefault();
    if (isLoginGranted()) window.location.href = "./main.html";
    else alert("Login attempt failed");
  });
}
//!SECTION login scripts


//SECTION - NAVIGATION PANEL SCRIPTS


//!SECTION - navigation panel scripts