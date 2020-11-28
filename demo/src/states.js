const ui = new UI()

class State {

    // turning page to states
    // home state 
    static homeState() {
        ui.removeAndSetActiveTab(ui.homeTab, ui.playTab, ui.settingsTab)

        location.hash = '#tab=home';

        ui.showTable();
    }

    // play state 
    static playState() {
        ui.removeAndSetActiveTab(ui.playTab, ui.homeTab, ui.settingsTab)

        location.hash = '#tab=play';

        ui.showCategories();
    }

    // settings state 
    static settingsState() {
        ui.removeAndSetActiveTab(ui.settingsTab, ui.playTab, ui.homeTab)

        location.hash = '#tab=settings';

        ui.showSettings();
    }

    // game in progress 
    static gameInProgress(questions) {
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