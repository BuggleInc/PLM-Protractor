describe('Exo2', function() {
    
    var until = protractor.ExpectedConditions;
    var title = element(by.css('.title'));
    var cross = element(by.css('.close-reveal-modal[ng-click]'));
    var button = element(by.css('.button-with-icon'));
    var congratsW = element(by.css('#successModal[style]'));
    var congratsTitle = element(by.css('#successModal h2 span'));
    var congratsCross = element.all(by.css('.close-reveal-modal')).get(2);
    
    beforeEach(function() {
        browser.get('https://plm.telecomnancy.univ-lorraine.fr/#/ui/lessons/welcome/welcome.lessons.welcome.instructions.Instructions');
        //browser.get('http://152.81.65.60:9000');
        browser.ignoreSynchronization=true;
        browser.wait(until.visibilityOf(cross), 5000, "Pop-up isn't here");
        browser.actions().click(cross).perform();
    });
    
    afterEach(function() {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });
    
    it('should congrats the user for passing the exercise', function() {
        browser.executeScript("window.editor.setValue(\"baisseBrosse();avance();avance();droite();avance();avance();droite();avance();avance();droite();avance();avance();droite();leveBrosse();avance();droite();avance();droite();droite();droite();\"); ");
        browser.wait(until.visibilityOf(button), 500, "Button unclickable");
        button.click();
        browser.wait(until.visibilityOf(congratsW), 5000, "Congrats pop-up isn't here");
        browser.wait(until.textToBePresentInElement(congratsTitle,'Exercice réussi \\o/'), 5000, "Congrats pop-up isn't here");
        //congratsCross.click();
        browser.driver.sleep(1000);
        expect(congratsTitle.getText()).toEqual('Exercice réussi \\o/');
    });
});