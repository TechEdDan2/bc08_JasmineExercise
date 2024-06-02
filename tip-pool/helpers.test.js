describe('this section tests the helpers', function () {

    // Before to set testing values
    beforeEach(function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
        submitPaymentInfo();
    });

    // Tests - sumPaymentTotal
    it('should find the totals for each value', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(50);
        expect(sumPaymentTotal('tipAmt')).toEqual(10);

        billAmtInput.value = 40;
        tipAmtInput.value = 8;

        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(90);
        expect(sumPaymentTotal('tipAmt')).toEqual(18);

    });

    // Tests - calculateTipPercent
    it('should calculate the tip percentage', function () {
        expect(calculateTipPercent(40, 8)).toEqual(20);
    });


    // After testing clean up all of the variables created in payments.js and the row of data
    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });

});