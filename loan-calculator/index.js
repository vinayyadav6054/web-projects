function calculateLoan(){
    loanAmountValue = document.getElementById("loan-amount").value;
    interestRateValue = document.getElementById("interest-rate").value;
    MonthsToPayValue = document.getElementById("months-to-pay").value;

    // console.log(loanAmountValue.value);
    // console.log(interestRateValue.value);

    interest = (loanAmountValue * (interestRateValue * 0.01) )/ MonthsToPayValue;
    monthlyPayment = (loanAmountValue / MonthsToPayValue) + interest;

    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment.toFixed(2)}`
}