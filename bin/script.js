const custMobile = "00123456789";
const custPinCode = "1234";

function isLoginGranted() {
  const txtMobile = document.getElementById("fld-mobile").value;
  const txtSecpin = document.getElementById("fld-secpin").value;

  if (txtMobile === null || txtSecpin === null) return false;
  if (txtMobile !== custMobile || txtSecpin !== custPinCode) return false;

  return true;
}

const btnLogin = document.getElementById("btn-login");
if (btnLogin) {
  btnLogin.addEventListener("click", function (e) {
    e.preventDefault();
    if (isLoginGranted()) console.log("ya");
    else alert("Login attempt failed");
  });
}
