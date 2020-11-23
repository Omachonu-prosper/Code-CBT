const ui = new UI()

class State {

    // turning page to states
    // home state 
    homeState() {
        ui.removeAndSetActiveTab(ui.homeTab, ui.playTab, ui.settingsTab)

        ui.showTable();
    }

    // play state 
    playState() {
        ui.removeAndSetActiveTab(ui.playTab, ui.homeTab, ui.settingsTab)

        ui.showCategories();
    }

    // settings state 
    settingsState() {
        ui.removeAndSetActiveTab(ui.settingsTab, ui.playTab, ui.homeTab)

        ui.showSettings();
    }

}