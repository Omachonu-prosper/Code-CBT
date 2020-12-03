const ui = new UI()

class State {

    // turning page to states
    // home state 
    static homeState() {
        // go to the top of the page 
        window.scrollTo(0, 0);
        
        ui.removeAndSetActiveTab(ui.homeTab, ui.playTab, ui.settingsTab);

        location.hash = '#tab=home';

        ui.noRegisteredUser();
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

    static result(score, totalQuestions, remark, result) {
        // go to the top of the page 
        window.scrollTo(0, 0);
        
        ui.showResult(score, totalQuestions, remark, result);
    }
    
    static removeResult() {
        ui.removeResult();
    }

    static loading() {
        ui.showLoader();
    }

    static gameStartError(error, category, file) {
        const errorMsg = `
        <p class="lead text-center mt-4">
            Sorry an error occured while trying to connect
            <br>

            Details: ${error.message}

            <br>
            <a href="#tab=playing" data-category="${category}" data-file="${file}" onclick="appCtrl.gameStart(this)">
                Reload
            </a>
        </p>
        `
        
        ui.showErrorOnMainContent(errorMsg)
    }
}