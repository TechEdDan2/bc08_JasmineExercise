window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

// The + operater converts the retrieved String into a number
function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const userAmount = document.querySelector("#loan-amount");
  const userYears = document.querySelector("#loan-years");
  const userRate = document.querySelector("#loan-rate");

  const loanData = { amount: 10000, years: 5, rate: 8.99 };

  userAmount.value = loanData.amount;
  userYears.value = loanData.years;
  userRate.value = loanData.rate;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const userLoanData = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(userLoanData));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  //Need to convert percent to decimal and months 
  const monthlyRate = (values.rate / 100) / 12;
  const monthlyPaymet = (values.amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -Math.floor(values.years * 12)));
  // console.log(monthlyPaymet);
  return monthlyPaymet;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const paymentOutput = document.querySelector("#monthly-payment");
  paymentOutput.innerHTML = "$" + monthly.toFixed(2);
}
