class State {
    constructor() {
        this.homeTag = document.querySelector('#home');
        this.playTag = document.querySelector('#play');
        this.settingsTag = document.querySelector('#settings');
        this.mainContent = document.querySelector('.main-content');
    }
 
    // this helps to remove and set the active tab 
    removeAndSetActiveTab(add, removeA, removeB) {
        add.classList.add('active');
        removeA.classList.remove('active');
        removeB.classList.remove('active');
    }

    // turning page to states
    // home state 
    homeState() {
        this.removeAndSetActiveTab(this.homeTag, this.playTag, this.settingsTag)

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

    // play state 
    playState() {
        this.removeAndSetActiveTab(this.playTag, this.homeTag, this.settingsTag)

        let output = '';

        output = `
        <div class="my-5 pt-3">
            <h2>Pick a category</h2>

            <ul class="list-group play-list mx-auto mt-5">
                <li class="list-group-item data-category="javascript" data-file="js.json">
                    JavaScript
                </li>

                <li class="list-group-item data-category="web_dev" data-file="web.json">
                    Web Development
                </li>

                <li class="list-group-item data-category="javascript" data-file="git.json">
                    Git
                </li>

                <li class="list-group-item data-category="javascript" data-file="github.json">
                    GitHub
                </li>
            </ul>
        </div>
        `

        // set main contents innerhtml to output 
        this.mainContent.innerHTML = output;
    }

    // settings state 
    settingsState() {
        this.removeAndSetActiveTab(this.settingsTag, this.playTag, this.homeTag)

    }
}