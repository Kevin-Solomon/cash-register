const nextBtn = document.getElementById("next-btn");
const checkBtn = document.getElementById("check-btn");
const cashDiv = document.querySelector(".cash-given");
const billAmt = document.getElementById("bill-amt")
const cashAmt = document.getElementById("cash-amt")
const billError = document.querySelector(".error-msg-bill")
const cashError = document.querySelector(".error-msg-cash")
const outputTable = document.querySelectorAll(".numOfNotes")
const outputDiv = document.querySelector(".output")
console.log(outputDiv)
const notes = [2000,500,100,20,10,5,1]
const noteCounter = Array(7).fill(0)

nextBtn.addEventListener("click", () => {
  if (billAmt.value === "" || Number(billAmt.value)<0) {
    billError.innerText = "Enter valid Bill amt"
  }
  else{
    cashDiv.style.display = "block"
    billError.innerText = ""
    nextBtn.style.display = "none"
  }
})

checkBtn.addEventListener("click", () => {
  const noteCounter = Array(7).fill(0);
  cashError.innerText = ""
  billError.innerText = ""
  if(cashAmt.value === "" || Number(cashAmt.value)<0){
    cashError.innerText = "Enter valid cash amt"
    return
  }
  if(billAmt.value === "" || Number(billAmt.value)<0){
    billError.innerText = "Enter valid Bill amt"
    return
  }
  let returnChange = parseInt(cashAmt.value) - parseInt(billAmt.value);
  console.log(returnChange, cashAmt.value, billAmt)
  if (returnChange < 0) {
    cashError.innerText = "Cash is less than bill, please enter right amount"
  }
  else if (returnChange === 0) {
    cashError.innerText = "No amount should be returned"
  }
  else{
    console.log("sike")
    outputDiv.style.display = "block";
    for(let i = 0;i<notes.length;i++){
      if(returnChange>=notes[i]){
        noteCounter[i] = Math.floor(returnChange/notes[i])
        returnChange-=(noteCounter[i]*notes[i])
      }
    }
    console.log(noteCounter)
    for (let i = 0;i<outputTable.length;i++){
      if(noteCounter[i] === 0){
        console.log('sike',noteCounter[i])
        outputTable[i].innerHTML=''
      }
      else{
      outputTable[i].innerHTML = noteCounter[i]
    }
  }
  }
})

