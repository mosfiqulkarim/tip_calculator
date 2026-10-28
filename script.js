const billInput = document.getElementById("bill")
const tipInput = document.getElementById("tip")
const result = document.getElementById("result")


function calculate(){
    const bill = Number(billInput.value);
    const tip = Number(tipInput.value);

    const tips = bill * tip / 100;
    const totalBill = bill + tips;
    result.textContent = totalBill;
}
const btn = document.getElementById("calc")
btn.addEventListener("click", calculate);