document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector(".add_button");
    const incomeRadio = document.querySelector("input[value='income']");
    const expenseRadio = document.querySelector("input[value='expense']");
    const amountInput = document.querySelector("input[type='number']");
    const incomeAmountDiv = document.querySelector(".income_Amount");
    const expenseAmountDiv = document.querySelector(".Expance_Amount");
    const balanceAmountDiv = document.querySelector(".Balance_amount");

    let incomeTotal = 0;
    let expenseTotal = 0;

    addButton.addEventListener("click", function () {
        let amount = parseFloat(amountInput.value);
  
        

        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount!");
            return;
        }

        if (incomeRadio.checked) {
            incomeTotal += amount;
            incomeAmountDiv.textContent = incomeTotal;
        } else if (expenseRadio.checked) {
            expenseTotal += amount;
            expenseAmountDiv.textContent = expenseTotal;
        }else if(expenseAmountDiv=0){
            balanceAmount.textContent = incomeTotal;
        }else if(expenseAmountDiv>0){
            balanceAmount.textContent = incomeAmountDiv-expenseAmountDiv;
        } else {
            alert("Please select either Income or Expense!");
            return;
        }

        let balance = incomeTotal - expenseTotal;
        balanceAmountDiv.textContent = balance;

        amountInput.value = "";
    });
});
