class UI {
    constructor() {
        this.homeTab = document.querySelector('#home');
        this.playTab = document.querySelector('#play');
        this.settingsTab = document.querySelector('#settings');
        this.tabBar = document.querySelector('.tab-bar')
        this.mainContent = document.querySelector('.main-content');
        this.resultBoard = document.querySelector('.result-board')

    }

    // show the active tab rightly for  greater ux
    removeAndSetActiveTab(add, removeA, removeB) {
        // add the active class to the add parameter
        add.classList.add('active');

        // remove the active class from these
        removeA.classList.remove('active');
        removeB.classList.remove('active');
    }

    showTab(tabIndex) {
        // if tabindex = 1 show first tab, hide second else do the opposite
        if(tabIndex === 1) {
            // show the first tab bar if hidden and hide the second one
            this.tabBar.firstElementChild.classList.remove('d-none');
            this.tabBar.lastElementChild.classList.add('d-none');
        } else {
            // show the second tab bar if hidden and hide the first one
            this.tabBar.firstElementChild.classList.add('d-none');
            this.tabBar.lastElementChild.classList.remove('d-none');
        }
    }
    
    // show table for home state 
    showTable() {
        this.showTab(1)
        
        let output = '';
        
        output += `              
        <table class="table">
            <thead class="thead-light">
                <tr>
                <th scope="col">Player Name</th>
                <th scope="col">Category</th>
                <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Omachonu Prosper</td>
                    <td>Javascript</td>
                    <td><span class="pass"> 89/100 </span></td>
                </tr>
            </tbody>
        </table> 
        `

        // set main contents innerhtml to output 
        this.mainContent.innerHTML = output;

    }


    // show list of categories 
    showCategories() {
        this.showTab(1)

        let output = '';

        output = `
        <div class="my-5 pt-3 box">
            <h2>Pick a category</h2>

            <div class="list-group play-list mx-auto mt-5">
                <a href="#tab=playing" class="list-group-item" data-category="javascript" data-file="js.json">
                    JavaScript
                </a>

                <a href="#tab=playing" class="list-group-item" data-category="web_dev" data-file="web.json">
                    Web Development
                </a>

                <a href="#tab=playing" class="list-group-item" data-category="version_control" data-file="git.json">
                    Git
                </a>

                <a href="#tab=playing" class="list-group-item" data-category="version_control" data-file="github.json">
                    GitHub
                </a>
            </div>
        </div>
        `

        // set main contents innerhtml to output 
        this.mainContent.innerHTML = output;
    }

    showSettings() {
        this.showTab(1)

        let output = '';

        output += `
        <h2>
            Game Settings
        </h2>
        
        <form class="mt-4 mx-auto form-settings">
            <div class="form-row align-items-center">
                <div class="col-12">
                    <label class="sr-only" for="inlineFormInput">Name</label>
                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="player Name">
                </div>

                <div class="col-12 my-1">
                    <label class="" for="inlineFormCustomSelect">Number of Questions</label>
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option selected> Default (10) </option>
                        <option value="1">five (5)</option>
                        <option value="2">fiveteen (15)</option>
                        <option value="3">twenty (20)</option>
                    </select>
                </div>              
                
                <div class="col-12 mt-3">
                    <button type="submit" class="btn btn-primary mb-2">Save Changes</button>
                </div>
            </div>
        </form>
        `
        // set main contents innerhtml to output 
        this.mainContent.innerHTML = output;
    }

    showGameState(questions) {
        this.showTab(2);

        let output = '';

        questions.forEach(question => {
            
            output +=  `
            <div class="card question-box my-3 mx-auto">
                <div class="card-body">
                    <h6 class="card-title">${question.question}</h6>

                    <div class="options ml-3">
                        <div class="form-check pl-2">
                            <input class="form-check-input" type="radio" name="${question.id}" id="${question.id}-1" value="option1">
                            <label class="form-check-label" for="${question.id}-1">
                                ${question.options[0]}
                            </label>
                        </div>
                        <div class="form-check pl-2">
                            <input class="form-check-input" type="radio" name="${question.id}" id="${question.id}-2" value="option2">
                            <label class="form-check-label" for="${question.id}-2">
                                ${question.options[1]}
                            </label>
                        </div>
                        <div class="form-check pl-2">
                            <input class="form-check-input" type="radio" name="${question.id}" id="${question.id}-3" value="option3">
                            <label class="form-check-label" for="${question.id}-3">
                                ${question.options[2]}
                            </label>
                        </div>
                        <div class="form-check pl-2">
                            <input class="form-check-input" type="radio" name="${question.id}" id="${question.id}-4" value="option4">
                            <label class="form-check-label" for="${question.id}-4">
                                ${question.options[3]}
                            </label>
                        </div>
                    </div>

                </div>
            </div>
            `;
        })

        output += `
        <button class="btn btn-success mx-auto d-block my-5" id="submit" type="submit">
            Submit
        </button>
        `

        this.mainContent.innerHTML = output;
    }

    showResult(score, totalQuestions) {
        this.resultBoard.style.display = 'block';

        let output = '';

        output += `
        <div class="full-screen p-3">
            <h1 class="">Good Job</h1>

            <p class="mt-5 lead">
                you scored ${score} out of ${totalQuestions} questions
            </p>

            <div class="game-over-links">
                <a href="#tab=play" data-tab="play" class="btn btn-success my-2 mx-1">Play again</a>
                
                <a href="#tab=home" data-tab="home" class="btn btn-success my-2 mx-1">Go home</a> 

                <a href="#tab=settings" data-tab="settings" class="btn btn-success my-2 mx-1">Go to settings</a>
            </div>
        </div>
        `

        this.resultBoard.innerHTML = output;
    }

    removeResult() {
        this.resultBoard.style.display = 'none';
    }

}