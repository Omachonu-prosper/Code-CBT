class UI {
    constructor() {
        this.homeTab = document.querySelector('#home');
        this.playTab = document.querySelector('#play');
        this.settingsTab = document.querySelector('#settings');
        this.mainContent = document.querySelector('.main-content');
    }

    // show the active tab rightly for  greater ux
    removeAndSetActiveTab(add, removeA, removeB) {
        // add the active class to the add parameter
        add.classList.add('active');

        // remove the active class from these
        removeA.classList.remove('active');
        removeB.classList.remove('active');
    }
    
    // show table for home state 
    showTable() {
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

    showSettings() {
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
}