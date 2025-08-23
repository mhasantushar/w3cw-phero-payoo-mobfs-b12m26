//SECTION - LOGIN PAGE SCRIPTS STARTES HERE
const custMobile = "00123456789";
const custSecpin = "1234";

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
//!SECTION login scripts ends here


//SECTION - MAIN PAGE SCRIPTS STARTS HERE
let oldSelButton = "addmoney";


function invokeSelAction(newSelButtonId){



  switch (selact) {

  }
}

const btnAddmoney = document.getElementById("inv-addmoney");
if (btnAddmoney){
  btnAddmoney.addEventListener("click", function(e) {
    e.preventDefault;
    console.log("inv-addmoney");
    })
}
const btnCashout = document.getElementById("inv-cashout");
if (btnCashout){
  btnCashout.addEventListener("click", function(e) {
    e.preventDefault;
    console.log("inv-cashout");
    })
}
const btnTransfer = document.getElementById("inv-transfer");
if (btnTransfer){
  btnTransfer.addEventListener("click", function(e) {
    e.preventDefault;
    console.log("inv-transfer");
    })
}
const btnGetbonus = document.getElementById("inv-getbonus");
if (btnGetbonus){
  btnGetbonus.addEventListener("click", function(e) {
    e.preventDefault;
    console.log("inv-getbonus");
    })
}
const btnPaybill = document.getElementById("inv-paybill");
if (btnPaybill){
  btnPaybill.addEventListener("click", function(e) {
    e.preventDefault;
    console.log("inv-paybill");
    })
}
const btnTransacts = document.getElementById("inv-transact");
if (btnTransacts){
  btnTransacts.addEventListener("click", function(e) {
    e.preventDefault;
    console.log("inv-transact");
    })
}




//!SECTION - main page scripts ends here