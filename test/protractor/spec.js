describe('hello world app', function () {
    it('should have a title', function () {
        browser.get('http://localhost:8000/src');
        expect(browser.getTitle()).toEqual('Angular UI Template');
    });

    describe('name fields', function () {
        xit('should be filled out and editable', function () {
            browser.get('http://localhost:8000/src');
            var fname = element.all(by.tagName('input')).first();
            var lname = element.all(by.tagName('input')).get(1);

            expect(fname.getAttribute('value')).toEqual("Jane");
            expect(lname.getAttribute('value')).toEqual("Doe");

            fname.clear().sendKeys('John');
            lname.clear().sendKeys('Smith');

            expect(fname.getAttribute('value')).toEqual("John");
            expect(lname.getAttribute('value')).toEqual("Smith");

        });
    });

});