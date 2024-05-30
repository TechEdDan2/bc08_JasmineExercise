describe('this section tests the Payments ', function () {
    //before
    beforeEach(function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
    });

    //tests
    it('should add a new payment to when submitPaymentInfo is called', function () {
        submitPaymentInfo();

        expect(allPayments['payment1'].billAmt).toEqual('50');
        expect(allPayments['payment1'].tipAmt).toEqual('10');
        expect(allPayments['payment1'].tipPercent).toEqual(20);

    });


    //after
    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});