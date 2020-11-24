const ui = new UI()

class State {

    // turning page to states
    // home state 
    homeState() {
        ui.removeAndSetActiveTab(ui.homeTab, ui.playTab, ui.settingsTab)

        location.hash = '#tab=home';

        ui.showTable();
    }

    // play state 
    playState() {
        ui.removeAndSetActiveTab(ui.playTab, ui.homeTab, ui.settingsTab)

        location.hash = '#tab=play';

        ui.showCategories();
    }

    // settings state 
    settingsState() {
        ui.removeAndSetActiveTab(ui.settingsTab, ui.playTab, ui.homeTab)

        location.hash = '#tab=settings';

        ui.showSettings();
    }

}