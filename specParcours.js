describe('Welcome Lesson', function() {
    
    var until = protractor.ExpectedConditions;
    var title = element(by.css('.title'));
    //var cross = element(by.css('.close-reveal-modal[ng-click]'));
    var cross = element(by.css('.alert'));
    //var button = element(by.css('.button-with-icon'));
    var leftMenuButton = element(by.css('.left-off-canvas-toggle'));
    var closeMenu = element(by.css('.exit-off-canvas'));
    var congratsW = element(by.css('#successModal[style]'));
    var congratsTitle = element(by.css('#successModal h2 span'));
    var congratsCross = element.all(by.css('.close-reveal-modal')).get(2);
    
    beforeEach(function() {
        browser.driver.sleep(3000);
        browser.get('https://plm.telecomnancy.univ-lorraine.fr/#/ui/lessons/welcome/welcome.lessons.welcome.environment.Environment');
        //browser.get('http://152.81.65.60:9000');
        browser.ignoreSynchronization=true;
        browser.wait(until.visibilityOf(cross), 5000, "Pop-up isn't here");
        browser.actions().click(cross).perform();
    });
    
    afterEach(function() {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
        console.log("toto");
    });
    
    it('should be on the first Welcome exercise', function() {
        expect(title.getText()).toEqual('Welcome / Environment');
    });

    it('should go to the good exercise', function() {
        var exo = element.all(by.css('[href="#/ui/lessons/welcome/welcome.lessons.welcome.conditions.Conditions"] a')).get(0);
        browser.wait(until.visibilityOf(leftMenuButton), 1000, "Button unclickable");
        browser.driver.sleep(1000);
        leftMenuButton.click();
        browser.wait(until.visibilityOf(exo), 1000, "Exo unclickable");
        exo.click();
        //browser.wait(until.visibilityOf(closeMenu), 1000, "CloseMenu unclickable");
        browser.driver.sleep(1000);
        element(by.css('.exit-off-canvas')).click();
        //closeMenu.click();
        browser.driver.sleep(2000);
        expect(title.getText()).toEqual('Welcome / Conditions');
    });
    
        it('should reset the popup ?', function() {
        expect(title.getText()).toEqual('Welcome / Environment');
    });
    
    it('should go to the good exercise FU', function() {
        var chapter = element.all(by.css('.accordion-navigation')).get(0);
        var exo = element.all(by.css('[href="#/ui/lessons/welcome/welcome.lessons.welcome.instructions.Instructions"] a')).get(0);
        browser.wait(until.visibilityOf(leftMenuButton), 1000, "Button unclickable");
        browser.driver.sleep(1000);
        leftMenuButton.click();
        browser.wait(until.visibilityOf(chapter), 1000, "Chapter unclickable");
        browser.driver.sleep(1000);
        chapter.click();
        browser.wait(until.visibilityOf(exo), 1000, "Exo unclickable");
        exo.click();
        closeMenu.click();
        browser.driver.sleep(2000);
        expect(title.getText()).toEqual('Welcome / Instructions');
    });
    
    /*
    it('should congrats the user for passing the exercise', function() {
        browser.wait(until.visibilityOf(button), 500, "Button unclickable");
        button.click();
        browser.wait(until.visibilityOf(congratsW), 5000, "Congrats pop-up isn't here");
        browser.wait(until.textToBePresentInElement(congratsTitle,'Exercice réussi \\o/'), 5000, "Congrats pop-up isn't here");
        //congratsCross.click();
        browser.driver.sleep(1000);
        expect(congratsTitle.getText()).toEqual('Exercice réussi \\o/');
    });
    //*/
});