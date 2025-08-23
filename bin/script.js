const custMobile = "00123456789";
const custSecpin = "1234";
const mobAgent = "00123456789"

let oldSelButtonId = "inv-addmoney"; //the page loads with this button selected

//SECTION - LOGIN PAGE SCRIPTS STARTS HERE
function isLoginGranted() {
  const txtMobile = document.getElementById("fld-mobile").value;
  const txtSecpin = document.getElementById("fld-secpin").value;

  if (txtMobile === null || txtSecpin === null) return false;
  if (txtMobile !== custMobile || txtSecpin !== custSecpin) return false;

  console.log(txtMobile, txtSecpin);

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
//!SECTION login page scripts ends


//SECTION - MAIN PAGE > COMMON NAVIG SECTION'S SCRIPTS STARTS HERE
const btnAddmoney = document.getElementById("inv-addmoney");
if (btnAddmoney) {
  btnAddmoney.addEventListener("click", function (e) {
    e.preventDefault;
    if (oldSelButtonId !== "inv-addmoney") processNewSeleion("inv-addmoney");
  });
}
const btnCashout = document.getElementById("inv-cashout");
if (btnCashout) {
  btnCashout.addEventListener("click", function (e) {
    e.preventDefault;
    if (oldSelButtonId !== "inv-cashout") processNewSeleion("inv-cashout");
  });
}
const btnTransfer = document.getElementById("inv-transfer");
if (btnTransfer) {
  btnTransfer.addEventListener("click", function (e) {
    e.preventDefault;
    if (oldSelButtonId !== "inv-transfer") processNewSeleion("inv-transfer");
  });
}
const btnGetbonus = document.getElementById("inv-getbonus");
if (btnGetbonus) {
  btnGetbonus.addEventListener("click", function (e) {
    e.preventDefault;
    if (oldSelButtonId !== "inv-getbonus") processNewSeleion("inv-getbonus");
  });
}
const btnPaybill = document.getElementById("inv-paybill");
if (btnPaybill) {
  btnPaybill.addEventListener("click", function (e) {
    e.preventDefault;
    if (oldSelButtonId !== "inv-paybill") processNewSeleion("inv-paybill");
  });
}
const btnTransacts = document.getElementById("inv-transact");
if (btnTransacts) {
  btnTransacts.addEventListener("click", function (e) {
    e.preventDefault;
    if (oldSelButtonId !== "inv-transact") processNewSeleion("inv-transact");
  });
}

function processNewSeleion(newSelButtonId) {
  const oldSelButton = document.getElementById(oldSelButtonId);
  const newSelButton = document.getElementById(newSelButtonId);
  // console.log(oldSelButton.innerText, newSelButton.innerText);

  const oldButtonLblId = "lbl" + oldSelButtonId.slice(3);
  const newButtonLblId = "lbl" + newSelButtonId.slice(3);
  const oldButtonLabel = document.getElementById(oldButtonLblId);
  const newButtonLabel = document.getElementById(newButtonLblId);
  // console.log(oldButtonLabel.innerText, newButtonLabel.innerText);

  //making new sel button blue themed and old sel button normai-themed...
  oldSelButton.classList.remove("border-blue-500");
  oldSelButton.classList.remove("bg-blue-50");
  oldSelButton.classList.add("border-[#0874f20d]");

  newSelButton.classList.remove("border-[#0874f20d]");
  newSelButton.classList.add("border-blue-500");
  newSelButton.classList.add("bg-blue-50");

  //doing the same treatment for new and old buttons's labels...
  oldButtonLabel.classList.remove("font-bold");
  oldButtonLabel.classList.remove("text-blue-500");
  oldButtonLabel.classList.add("text-[#080808b3]");
  newButtonLabel.classList.remove("text-[#080808b3]");
  newButtonLabel.classList.add("font-bold");
  newButtonLabel.classList.add("text-blue-500");

  //now, invoking associated action panel...
  switch (newSelButtonId) {
    case "inv-addmoney": {
      break;
    }
    case "inv-cashout": {
      break;
    }
    case "inv-transfer": {
      break;
    }
    case "inv-getbonus": {
      break;
    }
    case "inv-paybill": {
      break;
    }
    case "inv-transact": {
      break;
    }
  }

  oldSelButtonId = newSelButtonId;
}
//!SECTION - main page > common navig section's scripts ends
