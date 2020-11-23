const state = new State()


// handle all states
class StateHandler {

    // what happens when the page is loaded 
    onPageLoad() {
        
        // redirect to home tab 
        // set the location to the home state 
        window.location.hash = '#tab=home';

        // turn the state to the home state and render the right ui
        state.homeState();
    }

    // decide the state to show when a tab is clicked 
    decideState(e) {

        // checkif dataset.tab is either home, play or settings 
        // e.target is either the link or the icon in the tab-bar, it depends on which was clicked 
        if(e.target.dataset.tab === 'home') {

            // run the homeState
            state.homeState();
        } else if(e.target.dataset.tab === 'play') {

            // run the play state 
            state.playState();
        } else {
            // run the settings State 
            state.settingsState();
        }

    }
}

// Event listeners (this should come last) 
(
    () => {
        const stateHandler = new StateHandler();

        // when dom content loads reun stateHandler.onPageLoad
        document.addEventListener('DOMContentLoaded', stateHandler.onPageLoad);

        // listen for a click on the tab-bar and decidewhich state to show
        document.querySelector('.tab-bar').addEventListener('click', stateHandler.decideState);

    }
)()