describe('Exo14', function() {
    
    var until = protractor.ExpectedConditions;
    var cross = element(by.css('.close-reveal-modal[ng-click]'));
    var button = element(by.css('.button-with-icon'));
    var redButton = element(by.css('ul:first-child li .button-with-icon.alert'));
    var congratsW = element(by.css('#successModal[style]'));
    var congratsTitle = element(by.css('#successModal h2 span'));
    var congratsCross = element.all(by.css('.close-reveal-modal')).get(2);
    
    beforeEach(function() {
        browser.get('https://plm.telecomnancy.univ-lorraine.fr/#/ui/lessons/welcome/welcome.lessons.welcome.loopfor.LoopCourse');
        browser.ignoreSynchronization=true;
        browser.wait(until.or(until.visibilityOf(cross),until.visibilityOf(button)), 5000, "Pop-up isn't here");
        cross.isDisplayed().then(function(isVisible){
            if (isVisible)
                browser.actions().click(cross).perform();
        });
    });
    
    afterEach(function() {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });
    
    it('should warn the user that world are unequal if no code is submitted', function() {
        browser.wait(until.visibilityOf(button), 500, "Button unclickable");
        button.click();
        browser.wait(until.visibilityOf(redButton), 5000, "Button isn't red");
        expect(protractor.ExpectedConditions.visibilityOf(redButton)()).toEqual(true);
    });
    
    it('should congrats the user for passing the exercise', function() {
        browser.executeScript("window.editor.setValue(\"public void run() {for (int i = 0; i<10;i++) for (int side=0;side<4;side++){for (int step=0;step<8;step++)forward();left();}}\"); ");
        browser.wait(until.visibilityOf(button), 500, "Button unclickable");
        button.click();
        browser.wait(until.visibilityOf(congratsW), 5000, "Congrats pop-up isn't here");
        browser.wait(until.textToBePresentInElement(congratsTitle,'Exercice réussi \\o/'), 5000, "Congrats pop-up isn't here");
        expect(congratsTitle.getText()).toEqual('Exercice réussi \\o/');
        congratsCross.click();
        browser.wait(until.visibilityOf(button), 500, "Pop-up still here");
    });
});