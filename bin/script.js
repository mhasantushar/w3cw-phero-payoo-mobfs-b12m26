const custMobile = "00123456789";
const custSecpin = "1234";

let oldSelButtonId = "nav-addmoney"; //the page loads with this button selected

//SECTION - LOGIN PAGE SCRIPTS STARTS HERE
const btnLogin = document.getElementById("btn-login");
if (btnLogin) {
  btnLogin.addEventListener("click", function (e) {
    e.preventDefault();
    if (isLoginGranted()) window.location.href = "./main.html";
    else alert("Login attempt failed");
  });
}

function isLoginGranted() {
  const txtMobile = document.getElementById("fld-mobile").value;
  const txtSecpin = document.getElementById("fld-secpin").value;

  if (txtMobile === null || txtSecpin === null) return false;
  if (txtMobile !== custMobile || txtSecpin !== custSecpin) return false;

  console.log(txtMobile, txtSecpin);

  return true;
}
//!SECTION login page scripts ends

//SECTION - MAIN PAGE > COMMON NAVIG SECTION'S SCRIPTS STARTS HERE
const navOptions = [
  "nav-addmoney",
  "nav-cashout",
  "nav-transfer",
  "nav-getbonus",
  "nav-paybill",
  "nav-transact",
];

for (const selOpt of navOptions) {
  const navOpt = document.getElementById(selOpt);
  if (navOpt) {
    navOpt.addEventListener("click", function (e) {
      e.preventDefault();
      if (oldSelButtonId !== selOpt) processNewSelection(selOpt);
    });
  }
}

//NOTE - code till the function def below has been replace by above array+loop implementation, so it has been commented out for now

// const cmdAddmoney = document.getElementById("nav-addmoney");
// if (cmdAddmoney) {
//   cmdAddmoney.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (oldSelButtonId !== "nav-addmoney") processNewSelection("nav-addmoney");
//   });
// }
// const cmdCashout = document.getElementById("nav-cashout");
// if (cmdCashout) {
//   cmdCashout.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (oldSelButtonId !== "nav-cashout") processNewSelection("nav-cashout");
//   });
// }
// const cmdTransfer = document.getElementById("nav-transfer");
// if (cmdTransfer) {
//   cmdTransfer.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (oldSelButtonId !== "nav-transfer") processNewSelection("nav-transfer");
//   });
// }
// const cmdGetbonus = document.getElementById("nav-getbonus");
// if (cmdGetbonus) {
//   cmdGetbonus.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (oldSelButtonId !== "nav-getbonus") processNewSelection("nav-getbonus");
//   });
// }
// const cmdPaybill = document.getElementById("nav-paybill");
// if (cmdPaybill) {
//   cmdPaybill.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (oldSelButtonId !== "nav-paybill") processNewSelection("nav-paybill");
//   });
// }
// const cmdTransact = document.getElementById("nav-transact");
// if (cmdTransact) {
//   cmdTransact.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (oldSelButtonId !== "nav-transact") processNewSelection("nav-transact");
//   });
// }

function processNewSelection(newSelButtonId) {
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
  //TODO - need to code to show/hide bottom panels based on user selection
  switch (newSelButtonId) {
    case "nav-addmoney": {
      break;
    }
    case "nav-cashout": {
      break;
    }
    case "nav-transfer": {
      break;
    }
    case "nav-getbonus": {
      break;
    }
    case "nav-paybill": {
      break;
    }
    case "nav-transact": {
      break;
    }
  }

  oldSelButtonId = newSelButtonId;
}
//!SECTION - main page > common navig section's scripts ends

//SECTION - BOTTOM TABBED AREA > ADD MONEY STARTS...
const btnAddmoney = document.getElementById("btn-addmoney");
if (btnAddmoney) {
  btnAddmoney.addEventListener("click", function (e) {
    e.preventDefault();
    processAddmoneyReq() ? alert("Add money succeeded!") : alert("Add money failed!");
  });
}

function processAddmoneyReq() {
  let element, uInput;

  element = document.getElementById("fld-custbank");
  if (!element) return false;
  uInput = element.value.replaceAll(" ", "");
  if (uInput.length === 0) return false;

  element = document.getElementById("fld-custbacc");
  if (!element) return false;
  uInput = element.value.replaceAll(" ", "");
  if (uInput.length !== 11) return false;

  element = document.getElementById("fld-secpin");
  if (!element) return false;
  uInput = element.value.replaceAll(" ", "");
  if (uInput !== custSecpin) return false;

  element = document.getElementById("fld-addamount");
  if (!element) return false;
  uInput = parseFloat(element.value.replaceAll(" ", ""));
  if (uInput <= 0 || Number.isNaN(uInput)) return false;

  const custCurrBal = document.getElementById("currBalance").innerText;
  uInput = uInput + parseFloat(custCurrBal);
  document.getElementById("currBalance").innerText = uInput.toFixed(2);
  document.getElementById("fld-addamount").value = null;

  return true;
}

//!SECTION - add money area ends
