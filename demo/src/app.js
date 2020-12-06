
// app controller 
const appCtrl = ( () => {
    // handle all states
    class StateHandler {
        constructor() {
            this.gameInProgress = false;
            this.gameCategory = null;
            this.gameFile = null;
            this.questions = null;
            this.score = 0;
        }        
    }
 
    function passOrFail(score, total) {
        // this will determine wether the player passed the test or otherwise 
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

    function validateForm(inputValue) {
        // regular expression for name to be two or more letters
        const regExp = /^[\w]{2,}/;
        
        // if regExp is found in the inputValue
        if(regExp.test(inputValue)) {
            return true;
        } else {
            return false;
        }
    }

    const stateHandler = new StateHandler();
   
    return {
        showTabOnPageLoad: () => {
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
        },
        decideStateOnTabClick : (element) => {
                const resultBoard = document.querySelector('.result-board').style.display;
        
                // if the result board is shown remove it 
                if(resultBoard === 'block') {
                    State.removeResult();
                }

                // checkif dataset.tab is either home, play or settings 
                if(element.dataset.tab === 'settings') {

                    // run the settings State 
                    State.settingsState();
                } else if(element.dataset.tab === 'play') {


                    // run the play state 
                    State.playState();
                } else {
                    
                    // run the homeState
                    State.homeState();
                }
        },
        gameStart(element) {
            // show the loader first 
            State.loading();

            setTimeout(() => {
                stateHandler.gameInProgress = true;
                stateHandler.gameCategory = element.dataset.category;
                stateHandler.gameFile = element.dataset.file;
                // if nothing has been set in localStorage use the default of 10 questions 
                const noOfQuestions = DB.getUserPreferences() === null ? 9 : DB.getUserPreferences().noOfQuestions ;

                CodeCBT.getRandomQuestions( stateHandler.gameCategory, stateHandler.gameFile, noOfQuestions)
                        .then(questions => {
                            // set the questions key to the fetched questions 
                            stateHandler.questions = questions;
                            // set the score to 0 
                            stateHandler.score = 0;
                            
                            // run the game with all questions 
                            State.gameInProgress(questions);
                        }).catch( err => {
                            // show the user that there was an error and pass the category and file so the reload functionality can work
                            State.gameStartError(err, stateHandler.gameCategory, stateHandler.gameFile);
                        } );
            }, 1000);

        },
        submit: () =>  {
            // loopthrough all the questions 
            stateHandler.questions.forEach(question => {
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
                            stateHandler.score += 1;
                        }
                    }
                })
            })

            const userPref = DB.getUserPreferences();
            // if there is a current user 
            if( userPref !== null ) {
                // set the game data to localStorage 
                DB.saveGameData(userPref.name, stateHandler.gameCategory, stateHandler.gameFile, stateHandler.score, stateHandler.questions.length);
            }

            // run to see if the player passed or not 
            passOrFail(stateHandler.score, stateHandler.questions.length);   
            // get ready for a new game 
            stateHandler.gameInProgress = false;
            stateHandler.gameCategory = null;
            stateHandler.gameFile = null;
            stateHandler.questions = null;
            stateHandler.score = 0;
        },
        saveUserPreferences() {
            let name = document.querySelector('#inlineFormInput').value,
                    noOfQuestions = Number(document.querySelector('#inlineFormCustomSelect').value);
            
            // if the validateForm function returns true
            if( validateForm(name) ) {
                // save to localStorage 
                DB.saveUserPreferences(name, noOfQuestions)
                // show the alert 
                UI.showAlert('Changes saved!!', 'alert-success', 3000);

            } else {
                UI.showAlert('Not saved. Player name must be at leat 2 letters and not start with a space', 'alert-danger', 5000);
            }
            
        }

    }
})();

// Event listeners (this should come last) 
(
    () => {

       // when dom content loads reun stateHandler.onPageLoad
        document.addEventListener('DOMContentLoaded', appCtrl.showTabOnPageLoad);

        // All other event listeners are set on the element itself using attributes like onclick, etc 

    }
)()