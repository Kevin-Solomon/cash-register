const nextBtn = document.getElementById("next-btn");
const checkBtn = document.getElementById("check-btn");
const cashDiv = document.querySelector(".cash-given");
const billAmt = document.getElementById("bill-amt")
const cashAmt = document.getElementById("cash-amt")
const billError = document.querySelector(".error-msg-bill")
const cashError = document.querySelector(".error-msg-cash")
const outputDiv = document.querySelectorAll(".numOfNotes")
const notes = [2000,500,100,20,10,5,1]
const noteCounter = Array(9).fill(0)

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
  let returnChange = parseInt(cashAmt.value) - parseInt(billAmt.value);
  console.log(returnChange, cashAmt.value, billAmt)
  if (returnChange < 0) {
    cashError.innerText = "Cash is less than bill, please enter right amount"
  }
  else if (returnChange === 0) {
    cashError.innerText = "No amount should be returned"
  }
  else{
    for(let i = 0;i<notes.length;i++){
      if(returnChange>=notes[i]){
        noteCounter[i] = Math.floor(returnChange/notes[i])
        returnChange-=(noteCounter[i]*notes[i])
      }
    }
    console.log(noteCounter)
    for (let i = 0;i<9;i++){
      outputDiv[i].innerHTML = noteCounter[i]
    }
  }
})

