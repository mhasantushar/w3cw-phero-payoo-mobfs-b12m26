const custMobile = "00123456789";
const custSecpin = "1234";

let oldSelNavigId = "nav-addmoney"; //the page loads with this navigation option selected

//SECTION - COMMON FUNCTIONS START HERE
function getCustomerBalance() {
  const element = document.getElementById("lbl-cust-currbalance");
  if (!element) {
    alert("System err: Element not found");
    return 0;
  }
  return parseFloat(element.innerText);
}

function saveCustomerBalance(balance) {
  const element = document.getElementById("lbl-cust-currbalance");
  if (!element) {
    alert("System err: Element not found");
    return false;
  }
  element.innerText = balance.toFixed(2);
  return true;
}
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

  //TODO - following block can be done using .parent() and .children() methods of node collection
  const oldNavigLblId = "lbl" + oldSelNavigId.slice(3);
  const newNavigLblId = "lbl" + newSelNavigId.slice(3);
  const oldNavigLabel = document.getElementById(oldNavigLblId);
  const newNavigLabel = document.getElementById(newNavigLblId);
  // console.log(oldNavigLabel.innerText, newNavigLabel.innerText);

  //making new sel navigation option blue themed
  // and old sel navigation option normai-themed...
  oldSelNavig.classList.remove("border-blue-500");
  oldSelNavig.classList.remove("bg-blue-50");
  oldSelNavig.classList.add("border-[#0874f20d]");
  newSelNavig.classList.remove("border-[#0874f20d]");
  newSelNavig.classList.add("border-blue-500");
  newSelNavig.classList.add("bg-blue-50");

  //now processing navigation options' labels...
  oldNavigLabel.classList.remove("font-bold");
  oldNavigLabel.classList.remove("text-blue-500");
  oldNavigLabel.classList.add("text-[#080808b3]");
  newNavigLabel.classList.remove("text-[#080808b3]");
  newNavigLabel.classList.add("font-bold");
  newNavigLabel.classList.add("text-blue-500");

  //finally invoking associated tab...
  const oldTabId = "tab" + oldSelNavigId.slice(3);
  const newTabId = "tab" + newSelNavigId.slice(3);
  const oldTabox = document.getElementById(oldTabId);
  const newTabox = document.getElementById(newTabId);
  // console.log(oldTabId, newTabId);

  oldTabox.classList.add("hidden");
  newTabox.classList.remove("hidden");

  oldSelNavigId = newSelNavigId;
}
//!SECTION - main page > common navig area scripts end

//SECTION - MAIN PAGE > TAB ADD MONEY SCRIPTS START HERE
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
  // console.log(element);
  if (!element) {
    alert("Bank field not found");
    return false;
  }
  uInput = element.value.replaceAll(" ", "");
  // console.log(uInput);
  if (uInput.length === 0) {
    alert("Bank name not specified");
    return false;
  }

  element = document.getElementById("fld-custbacc-of-addm");
  // console.log(element);
  if (!element) {
    alert("Bank account field not found");
    return false;
  }
  uInput = element.value.replaceAll(" ", "");
  // console.log(uInput);
  if (uInput.length !== 11) {
    alert("Bank account number not specified or invaid");
    return false;
  }

  element = document.getElementById("fld-securpin-of-addm");
  // console.log(element);
  if (!element) {
    alert("Pin field not found");
    return false;
  }
  uInput = element.value.replaceAll(" ", "");
  // console.log(uInput);
  if (uInput !== custSecpin) {
    alert("Pin number not specified or invalid");
    return false;
  }

  element = document.getElementById("fld-moneyval-of-addm");
  // console.log(element);
  if (!element) {
    alert("Amount field not found");
    return false;
  }
  uInput = parseFloat(element.value.replaceAll(" ", ""));
  // console.log(uInput);
  if (uInput <= 0 || Number.isNaN(uInput)) {
    alert("Amount value not specified or invalid");
    return false;
  }

  const oldBalance = getCustomerBalance();
  const newBalance = oldBalance + uInput;
  saveCustomerBalance(newBalance);

  document.getElementById("fld-moneyval-of-addm").value = "";
  return true;
}
//!SECTION - tab add money scripts end

//SECTION - MAIN PAGE > TAB CASH OUT SCRIPTS START HERE
const btnCashout = document.getElementById("btn-cashout");
if (btnCashout) {
  btnCashout.addEventListener("click", function (e) {
    e.preventDefault();
    if (processCashoutReq()) alert("Cash out succeeded!");
  });
}

function processCashoutReq() {
  let element;
  let uInput;

  element = document.getElementById("fld-agentacc-of-cout");
  // console.log(element);
  if (!element) {
    alert("Agent field not found");
    return false;
  }
  uInput = element.value.replaceAll(" ", "");
  // console.log(uInput);
  if (uInput.length !== 11) {
    alert("Agent number not specified or invaid");
    return false;
  }

  element = document.getElementById("fld-securpin-of-cout");
  // console.log(element);
  if (!element) {
    alert("Pin field not found");
    return false;
  }
  uInput = element.value.replaceAll(" ", "");
  // console.log(uInput);
  if (uInput !== custSecpin) {
    alert("Pin number not specified or invalid");
    return false;
  }

  element = document.getElementById("fld-moneyval-of-cout");
  // console.log(element);
  if (!element) {
    alert("Amount field not found");
    return false;
  }
  uInput = parseFloat(element.value.replaceAll(" ", ""));
  // console.log(uInput);
  if (uInput <= 0 || Number.isNaN(uInput)) {
    alert("Amount value not specified or invalid");
    return false;
  }

  const oldBalance = getCustomerBalance();
  if (uInput > oldBalance) {
    alert("Insufficient balance");
    return false;
  }
  const newBalance = oldBalance - uInput;
  saveCustomerBalance(newBalance);

  document.getElementById("fld-moneyval-of-cout").value = "";
  return true;
}
//!SECTION - tab cash out scripts end

//SECTION - MAIN PAGE > TAB TRANSFER MONEY SCRIPTS START HERE
const btnTransfer = document.getElementById("btn-transfer");
if (btnTransfer) {
  btnTransfer.addEventListener("click", function (e) {
    e.preventDefault();
    if (processTransferReq()) alert("Transfer money succeeded!");
  });
}

function processTransferReq() {
  let element;
  let uInput;

  element = document.getElementById("fld-payeeacc-of-xfer");
  // console.log(element);
  if (!element) {
    alert("Payee acoount field not found");
    return false;
  }
  uInput = element.value.replaceAll(" ", "");
  // console.log(uInput);
  if (uInput.length !== 11) {
    alert("Payee account number not specified or invaid");
    return false;
  }

  element = document.getElementById("fld-securpin-of-xfer");
  // console.log(element);
  if (!element) {
    alert("Pin field not found");
    return false;
  }
  uInput = element.value.replaceAll(" ", "");
  // console.log(uInput);
  if (uInput !== custSecpin) {
    alert("Pin number not specified or invalid");
    return false;
  }

  element = document.getElementById("fld-moneyval-of-xfer");
  // console.log(element);
  if (!element) {
    alert("Amount field not found");
    return false;
  }
  uInput = parseFloat(element.value.replaceAll(" ", ""));
  // console.log(uInput);
  if (uInput <= 0 || Number.isNaN(uInput)) {
    alert("Amount value not specified or invalid");
    return false;
  }

  const oldBalance = getCustomerBalance();
  if (uInput > oldBalance) {
    alert("Insufficient balance");
    return false;
  }
  const newBalance = oldBalance - uInput;
  saveCustomerBalance(newBalance);

  document.getElementById("fld-moneyval-of-xfer").value = "";
  return true;
}
//!SECTION - tab transfer money scripts end

//SECTION - MAIN PAGE > TAB GET BONUS SCRIPTS START HERE
const btnGetbonus = document.getElementById("btn-getbonus");
if (btnGetbonus) {
  btnGetbonus.addEventListener("click", function (e) {
    e.preventDefault();
    if (processGetbonusReq()) alert("Get bonus succeeded!");
  });
}

function processGetbonusReq() {
  let element;
  let uInput;

  element = document.getElementById("fld-couponno-of-getb");
  // console.log(element);
  if (!element) {
    alert("Coupon field not found");
    return false;
  }
  uInput = element.value.replaceAll(" ", "");
  // console.log(uInput);
  if (uInput.length === 0) {
    alert("Coupon number not specified or invaid");
    return false;
  }

  const minBonus = 100;
  const maxBonus = 500; 
  const oldBalance = getCustomerBalance();
  const newBalance = oldBalance + Math.floor(Math.random() * (maxBonus - minBonus + 1)) + minBonus;

  saveCustomerBalance(newBalance);
  return true;
}
//!SECTION - tab get bonus scripts end

//SECTION - MAIN PAGE > TAB PAY BILL SCRIPTS START HERE
const btnPaybill = document.getElementById("btn-paybill");
if (btnPaybill) {
  btnPaybill.addEventListener("click", function (e) {
    e.preventDefault();
    if (processPaybillReq()) alert("Pay bill succeeded!");
  });
}

function processPaybillReq() {
  let element;
  let uInput;

  element = document.getElementById("fld-billtype-of-payb");
  // console.log(element);
  if (!element) {
    alert("Select to pay field not found");
    return false;
  }
  uInput = element.value.replaceAll(" ", "");
  // console.log(uInput);
  if (uInput.length === 0) {
    alert("Select to pay option not specified");
    return false;
  }

  element = document.getElementById("fld-billracc-of-payb");
  // console.log(element);
  if (!element) {
    alert("Biller account field not found");
    return false;
  }
  uInput = element.value.replaceAll(" ", "");
  // console.log(uInput);
  if (uInput.length !== 11) {
    alert("Biller account number not specified or invaid");
    return false;
  }

  element = document.getElementById("fld-securpin-of-payb");
  // console.log(element);
  if (!element) {
    alert("Pin field not found");
    return false;
  }
  uInput = element.value.replaceAll(" ", "");
  // console.log(uInput);
  if (uInput !== custSecpin) {
    alert("Pin number not specified or invalid");
    return false;
  }

  element = document.getElementById("fld-moneyval-of-payb");
  // console.log(element);
  if (!element) {
    alert("Amount field not found");
    return false;
  }
  uInput = parseFloat(element.value.replaceAll(" ", ""));
  // console.log(uInput);
  if (uInput <= 0 || Number.isNaN(uInput)) {
    alert("Amount value not specified or invalid");
    return false;
  }

  const oldBalance = getCustomerBalance();
  if (uInput > oldBalance) {
    alert("Insufficient balance");
    return false;
  }
  const newBalance = oldBalance - uInput;
  saveCustomerBalance(newBalance);

  document.getElementById("fld-moneyval-of-payb").value = "";
  return true;
}
//!SECTION - tab pay bill scripts end