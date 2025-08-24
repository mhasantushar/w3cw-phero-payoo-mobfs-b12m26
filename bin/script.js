const custMobile = "00123456789";
const custSecpin = "1234";

let oldSelNavigId = "nav-addmoney"; //the page loads with this navigation option selected

//SECTION - COMMON FUNCTIONS START HERE

//!SECTION common functions end

//SECTION - LOGIN PAGE SCRIPTS START HERE
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
  const txtSecpin = document.getElementById("fld-securpin-of-addm").value;

  if (txtMobile === null || txtSecpin === null) return false;
  if (txtMobile !== custMobile || txtSecpin !== custSecpin) return false;

  console.log(txtMobile, txtSecpin);

  return true;
}
//!SECTION login page scripts end

//SECTION - MAIN PAGE > COMMON NAVIG AREA SCRIPTS START HERE
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
      if (oldSelNavigId !== selOpt) processNewSelection(selOpt);
    });
  }
}

//NOTE - code till the function def below has been replace by above array+loop implementation, so it has been commented out for now

// const cmdAddmoney = document.getElementById("nav-addmoney");
// if (cmdAddmoney) {
//   cmdAddmoney.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (oldSelNavigId !== "nav-addmoney") processNewSelection("nav-addmoney");
//   });
// }
// const cmdCashout = document.getElementById("nav-cashout");
// if (cmdCashout) {
//   cmdCashout.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (oldSelNavigId !== "nav-cashout") processNewSelection("nav-cashout");
//   });
// }
// const cmdTransfer = document.getElementById("nav-transfer");
// if (cmdTransfer) {
//   cmdTransfer.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (oldSelNavigId !== "nav-transfer") processNewSelection("nav-transfer");
//   });
// }
// const cmdGetbonus = document.getElementById("nav-getbonus");
// if (cmdGetbonus) {
//   cmdGetbonus.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (oldSelNavigId !== "nav-getbonus") processNewSelection("nav-getbonus");
//   });
// }
// const cmdPaybill = document.getElementById("nav-paybill");
// if (cmdPaybill) {
//   cmdPaybill.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (oldSelNavigId !== "nav-paybill") processNewSelection("nav-paybill");
//   });
// }
// const cmdTransact = document.getElementById("nav-transact");
// if (cmdTransact) {
//   cmdTransact.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (oldSelNavigId !== "nav-transact") processNewSelection("nav-transact");
//   });
// }

function processNewSelection(newSelNavigId) {
  const oldSelNavig = document.getElementById(oldSelNavigId);
  const newSelNavig = document.getElementById(newSelNavigId);
  // console.log(oldSelNavig.innerText, newSelNavig.innerText);

  const oldNavigLblId = "lbl" + oldSelNavigId.slice(3);
  const newNavigLblId = "lbl" + newSelNavigId.slice(3);
  const oldNavigLabel = document.getElementById(oldNavigLblId);
  const newNavigLabel = document.getElementById(newNavigLblId);
  // console.log(oldNavigLabel.innerText, newNavigLabel.innerText);

  //making new sel navigation option blue themed and old sel navigation option normai-themed...
  oldSelNavig.classList.remove("border-blue-500");
  oldSelNavig.classList.remove("bg-blue-50");
  oldSelNavig.classList.add("border-[#0874f20d]");
  newSelNavig.classList.remove("border-[#0874f20d]");
  newSelNavig.classList.add("border-blue-500");
  newSelNavig.classList.add("bg-blue-50");

  //doing the same treatment for new and old navigation option's labels...
  oldNavigLabel.classList.remove("font-bold");
  oldNavigLabel.classList.remove("text-blue-500");
  oldNavigLabel.classList.add("text-[#080808b3]");
  newNavigLabel.classList.remove("text-[#080808b3]");
  newNavigLabel.classList.add("font-bold");
  newNavigLabel.classList.add("text-blue-500");

  //now, invoking associated action panel...
  //TODO - need to code to show/hide bottom panels based on user selection
  switch (newSelNavigId) {
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

  oldSelNavigId = newSelNavigId;
}
//!SECTION - main page > common navig area scripts end

//SECTION - BOTTOM TABBED > TAB ADD MONEY SCRIPTS START HERE
const btnAddmoney = document.getElementById("btn-addmoney");
if (btnAddmoney) {
  btnAddmoney.addEventListener("click", function (e) {
    e.preventDefault();
    if (processAddmoneyReq()) alert("Add money succeeded!");
  });
}

function processAddmoneyReq() {
  let element;
  let uInput;

  element = document.getElementById("fld-custbank-of-addm");
  console.log(element);
  if (!element) {
    alert("Bank field not found");
    return false;
  }
  uInput = element.value.replaceAll(" ", "");
  console.log(uInput);
  if (uInput.length === 0) {
    alert("Bank name not specified");
    return false;
  }
  element = document.getElementById("fld-custbacc-of-addm");
  console.log(element);
  if (!element) {
    alert("Account field not found");
    return false;
  }
  uInput = element.value.replaceAll(" ", "");
  console.log(uInput);
  if (uInput.length !== 11) {
    alert("Account value not specified or invaid");
    return false;
  }
  element = document.getElementById("fld-securpin-of-addm");
  console.log(element);
  if (!element) {
    alert("Pin field not found");
    return false;
  }
  uInput = element.value.replaceAll(" ", "");
  console.log(uInput);
  if (uInput !== custSecpin) {
    alert("Pin value not specified or invalid");
    return false;
  }

  element = document.getElementById("fld-moneyval-of-addm");
  console.log(element);
  if (!element) {
    alert("Amount field not found");
    return false;
  }
  uInput = parseFloat(element.value.replaceAll(" ", ""));
  console.log(uInput);
  if (uInput <= 0 || Number.isNaN(uInput)) {
    alert("Amount value not specified or invalid");
    return false;
  }

  element = document.getElementById("lbl-cust-currbalance");
  const newBalance = uInput + parseFloat(element.innerText);
  element.innerText = newBalance.toFixed(2);
  document.getElementById("fld-moneyval-of-addm").value = "";

  return true;
}
//!SECTION - tab add money scripts end
