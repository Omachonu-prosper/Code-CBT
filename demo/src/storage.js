// all data will be saved to session storage 
class DB {
    static saveUserPreferences(name = 'milo', noOfQuestions = 0) {
        let userPreferences = {};

        // set the name and no of questios in userPref (if found or create new userpref if not found) to he corresponding values
        userPreferences.name = name;
        userPreferences.noOfQuestions = noOfQuestions;

        sessionStorage.setItem('userPref', JSON.stringify(userPreferences));
    }

    static getUserPreferences() {
        let userPreferences = JSON.parse( sessionStorage.getItem('userPref') );

        return userPreferences
    }

    static saveGameData(name, category, file, score, noOfQuestions) {
        let gameData = [ ];

        // set the schema(or template) for the new datea to follow
        const schema = {
            name,
            category,
            file,
            score,
            noOfQuestions
        }

        if( sessionStorage.getItem('gameData') ) { // if someone has already set a user
            // get the data already in session storage 
            gameData = JSON.parse( sessionStorage.getItem('gameData') );

        }

        // push the schema with the data to the gameData array 
        gameData.push(schema);
        // set the game Data array to sessionStorage 
        sessionStorage.setItem('gameData', JSON.stringify(gameData) );
    }

    static getGameData() {
        let gameData = JSON.parse( sessionStorage.getItem('gameData') );

        return gameData; 
    }

}