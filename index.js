const nextBtn = document.getElementById("next-btn");
const checkBtn = document.getElementById("check-btn");
const cashDiv = document.querySelector(".cash-given");
const billAmt = document.getElementById("bill-amt")
const cashAmt = document.getElementById("cash-amt")
const billError = document.querySelector(".error-msg-bill")
const cashError = document.querySelector(".error-msg-cash")

nextBtn.addEventListener("click", () => {
  if (billAmt.value !== "") {
    cashDiv.style.display = "block"
    billError.innerText = ""
    nextBtn.style.display = "none"
  } else {
    billError.innerText = "Enter valid Bill amt"
  }
})

checkBtn.addEventListener("click", () => {
  console.log("Clciked")
  const returnChange = parseInt(cashAmt.value) - parseInt(billAmt.value);
  console.log(returnChange, cashAmt.value, billAmt)
  if (returnChange < 0) {
    cashError.innerText = "Cash is less than bill, please enter right amount"
  }
  else if (returnChange === 0) {
    cashError.innerText = "No amount should be returneds"
  }
})

