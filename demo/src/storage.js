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
}