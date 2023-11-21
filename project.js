function handleDeposit() {
  var convertedInputValue = getConvertedValue("deposit-input", "value");

  var converteddepostiteAmount = getConvertedValue(
    "deposit-amount",
    "innerText"
  );
  var sum = convertedInputValue + converteddepostiteAmount;
  setInnerText("deposit-amount", sum);

  var convertedTotalAmount = getConvertedValue("total-amount", "innerText");
  var totalSum = convertedInputValue + convertedTotalAmount;
  setInnerText("total-amount", totalSum);
  document.getElementById("deposit-input").value = "";
}

function getConvertedValue(id, element) {
  if (element == "innerText") {
    var value = document.getElementById(id).innerText;
    return parseFloat(value);
  } else {
    var value = document.getElementById(id).value;
    return parseFloat(value);
  }
}

function handleWithdraw() {
  var convertedInputWithdraw = getConvertedValue("withdraw-input", "value");
  var convertedWithdrawAmount = getConvertedValue(
    "withdraw-amount",
    "innerText"
  );
  var sum = convertedInputWithdraw + convertedWithdrawAmount;
  setInnerText("withdraw-amount", sum);
  var convertedTotalAmount = getConvertedValue("total-amount", "innerText");
  var totalSum = convertedTotalAmount - convertedInputWithdraw;
  setInnerText("total-amount", totalSum);
  document.getElementById("withdraw-input").value = "";
}
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
