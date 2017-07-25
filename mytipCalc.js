var billAmtTxt = document.getElementById("bill-amount"),
    tipPerTxt = document.getElementById("tip-percentage"),
    calcTipBtn = document.getElementById("calculate-the-tip"),
    ttlPayDiv = document.getElementById("total-pay");


    calcTipBtn.addEventListener("click", function() {
        var billAmt = parseFloat(billAmtTxt.value),
        tipPer = parseFloat(tipPerTxt.value)/100,
        tipAmt = billAmtTxt *  tipPer,
        totalAmount = billAmtTxt + tipAmt;

        ttlPayDiv.innerHTML = "<strong>Bill Amount:</strong> $" + billAmt + 
            "<strong>Tip Percentage:</strong> " + tipPer * 100 + "%<br>" + 
            "<strong>Tip Amount:</strong> $" + tipAmt + "<br>" +
            "<strong>Total to Pay:</strong> $" + totalAmount;

    });