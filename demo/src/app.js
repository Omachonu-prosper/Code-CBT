// handle states on page load and element click 
(
    () => {
        // instantiate the state constructor
        const state = new State();
        
        // redirect to home tab 
        document.addEventListener('DOMContentLoaded', () => {
            // set the location to the home state 
            window.location.hash = '#tab=home';

            state.homeState()
        });

        // listen for a click on the tab-bar and decidewhich state to show
        document.querySelector('.tab-bar').addEventListener('click', decideState);

        // decide state 
        function decideState(e) {

            // checkif dataset.tab is either home, play or settings 
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
)()