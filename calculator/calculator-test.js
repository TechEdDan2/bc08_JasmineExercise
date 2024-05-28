describe('this is all the Loan Calculation Tests', function () {

  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({ amount: 10000, years: 10, rate: 5 }).toFixed(2)).toEqual('106.07');
  });


  it("should return a result with 2 decimal places", function () {
    const testCase = {
      amount: 8999.9,
      years: 6,
      rate: 8.95,
    };
    expect(calculateMonthlyPayment(testCase).toFixed(2)).toEqual('162.00');
  });

});


