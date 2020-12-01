// handle all states
class StateHandler {
    constructor() {
        this.gameInProgress = false;
        this.gameCategory = null;
        this.gameFile = null;
        this.questions = null;
        this.score = 0;
    }

    // what happens when the page is loaded 
    onPageLoad() {
        let hash = location.hash;

        // if the user is already on a tab dont redirect to the home tab 
        if(hash === '#tab=play') {
            // set the location to the home tab 
            State.playState();
        } else if (hash === '#tab=playing') {
            // set to playing tab
            // State.gameInProgress()
            State.playState()
        } else if (hash === '#tab=settings') {
            // set to the settings tab 
            State.settingsState();
        } else {
            // set to the home tab
            State.homeState()
        }

    }

    // decide the state to show when a tab is clicked 
    decideState(e) {
        const resultBoard = document.querySelector('.result-board').style.display;
        
        // if the result board is shown remove it 
        if(resultBoard === 'block') {
            State.removeResult();
        }

        // checkif dataset.tab is either home, play or settings 
        // e.target is either the link or the icon in the tab-bar, it depends on which was clicked 
        if(e.target.dataset.tab === 'settings') {

            // run the settings State 
            State.settingsState();
        } else if(e.target.dataset.tab === 'play') {

            // run the play state 
            State.playState();
        } else {
            
            // run the homeState
            State.homeState();
        }

    }

    gameStart(e) {
        // if there is a category in the element's dataset 
        if(e.target.dataset.category) {
            this.gameInProgress = true;
            this.gameCategory = e.target.dataset.category;
            this.gameFile = e.target.dataset.file;

            CodeCBT.getRandomQuestions(this.gameCategory, this.gameFile, 9)
                    .then(questions => {
                        // set the questions key to the fetched questions 
                        this.questions = questions;
                        // set the score to 0 
                        this.score = 0;
                        
                        // run the game with all questions 
                        State.gameInProgress(questions);
                    })
        }    
    }

    static submit(e) {
        // if what was clicked was the submit button 
        if(e.target.id === 'submit') {
            // loopthrough all the questions 
            this.questions.forEach(question => {
                const radioBtns = document.querySelectorAll(`.form-check-input[name=${question.id}]`);

                // loop through all radios for a particular question 
                radioBtns.forEach(btn => {
                    // if any option was picked
                    if(btn.checked) {
                        const checkedLabelText = btn.nextElementSibling.innerText;
                    
                        // check if what is checked === the answer 
                        // if labelText === question.answer
                        if(checkedLabelText === question.answer) {
                            // add one to the score 
                            this.score += 1;
                        }
                    }
                })
            })

            // run to see if the player passed or not 
            passOrFail(this.score, this.questions.length);   
            
            this.gameInProgress = false;
            this.gameCategory = null;
            this.gameFile = null;
            this.questions = null;
            this.score = 0;
        }
    } 

}

// this will determine wether the player passed the test or otherwise 
function passOrFail(score, total) {
    let remark,
        result,
        percentagePass = Math.floor( (score / total) * 100 );

    if( percentagePass >= 50 ) {
        remark = 'Excellent work!!';
        result = 'pass';
    } else if ( percentagePass >= 30 && percentagePass < 50) {
        remark = 'Not bad!!';
        result = 'poor';
    } else if ( percentagePass < 30 ) {
        remark = 'Better luck next time!!';
        result = 'fail';
    }
    
    // show the results board to the user 
    State.result(score, total, remark, result);
}

// Event listeners (this should come last) 
(
    () => {
        const stateHandler = new StateHandler(),
              mainContent = document.querySelector('.main-content');

        // when dom content loads reun stateHandler.onPageLoad
        document.addEventListener('DOMContentLoaded', stateHandler.onPageLoad);

        // listen for a click on the tab-bar and decide which state to show
        document.querySelector('.tab-bar').addEventListener('click', stateHandler.decideState);

        // click on the main content
        document.querySelector('.main-content').addEventListener('click', stateHandler.gameStart );
        
        // clicking on the submit btn 
        document.querySelector('.main-content').addEventListener('click', StateHandler.submit );

        // listen for a click on the resultboard's link and decide which state to show
        document.querySelector('.result-board').addEventListener('click', stateHandler.decideState);

    }
)()