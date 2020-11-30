const ui = new UI()

class State {

    // turning page to states
    // home state 
    static homeState() {
        // go to the top of the page 
        window.scrollTo(0, 0);
        
        ui.removeAndSetActiveTab(ui.homeTab, ui.playTab, ui.settingsTab);

        location.hash = '#tab=home';

        ui.showTable();
    }

    // play state 
    static playState() {
        // go to the top of the page 
        window.scrollTo(0, 0);
        
        ui.removeAndSetActiveTab(ui.playTab, ui.homeTab, ui.settingsTab);

        location.hash = '#tab=play';

        ui.showCategories();
    }

    // settings state 
    static settingsState() {
        // go to the top of the page 
        window.scrollTo(0, 0);
        
        ui.removeAndSetActiveTab(ui.settingsTab, ui.playTab, ui.homeTab);

        location.hash = '#tab=settings';

        ui.showSettings();
    }

    // game in progress 
    static gameInProgress(questions) {
        // go to the top of the page 
        window.scrollTo(0, 0);
        
        location.hash = `#tab=playing`;

        ui.showGameState(questions);

    }

    static result(score, totalQuestions) {
        ui.showResult(score, totalQuestions);
    }
    
    static removeResult() {
        ui.removeResult();
    }
}