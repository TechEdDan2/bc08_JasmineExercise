desribe('this section tests the Payments ', function () {
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
        expect(allPayments['payment1'].tipPercent).toEqual('20');

    });


    //after
});