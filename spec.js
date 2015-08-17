describe('PLM home page', function() {
    
    var until = protractor.ExpectedConditions;
    var cross = element(by.css('.close-reveal-modal[ng-click]'));
    var title = element(by.css('.title'));
    var lesson1 = element.all(by.css('.th.radius')).get(0);
    var button = element(by.css('.button-with-icon'));
    
    beforeEach(function() {
        browser.get('https://plm.telecomnancy.univ-lorraine.fr/#/');
        //browser.get('http://152.81.65.60:9000');
        browser.wait(until.visibilityOf(cross), 5000, "Pop-up isn't here");
        browser.actions().click(cross).perform();
    });
    
    afterEach(function() {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('PLM');
    });
    
    it('should have a home title', function() {
        expect(title.getText()).toEqual('Home');
        //expect($('.title').getText()).toEqual('Home');
    });
    
    it('should go to the first exercise', function() {
        browser.driver.sleep(500);
        browser.ignoreSynchronization=true;
        browser.actions().doubleClick(lesson1).perform();
        browser.wait(until.textToBePresentInElement(title,"Welcome / Environment"), 5000, "Page doesn't changed");
        //browser.driver.sleep(1000);
        expect(browser.getTitle()).toEqual('PLM');
        expect(title.getText()).toEqual('Welcome / Environment');
        //browser.actions().click(textarea).perform();
        browser.executeScript("window.editor.setValue(\"avance();\"); ");
        browser.actions().click(button).perform();
        browser.driver.sleep(5000);
    });
});