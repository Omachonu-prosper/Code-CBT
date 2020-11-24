class CodeCBT {

    // get all data 
    // returns the full file content 
    getData(category, file) {
        return fetch(`/api/v1.0.0/db/${category}/${file}`)
            .then(res => res.json())
            .catch(err => console.error(err) );
    }

    // returns all questions in that category 
    getAllQuestions(category, file) {
        return this.getData(category, file)
                .then(data => data.questions)
                .catch( err => console.error(err) )
    }

    getRandomQuestion(limit = 5, category, file) {
        // generate a random id 
        // dont add 1 to limit because index is 0 based and if we call limit as 5 then we are calling questions[4]
        let questionIndex = Math.floor(Math.random() * limit );


        return this.getAllQuestions(category, file).then(questions => {
        
            if(questionIndex >= questions.length) {
                // if the generated random id is greater than the ammount of question return the first question 

                // let the user know what action was taken 
                console.warn('the given limit is more than the number of questions so the first question was returned');
                
                // return the first question 
                return questions[0]

            } else {
                return questions[questionIndex]
            }
        }).catch( err => console.error(err) )
        
    }

    getQuestionById(questionId, category, file) {
        // get all questions in that category 
        return this.getAllQuestions(category, file).then(questions => {
            if(questionId >= questions.length) {
                // if the index is greater than the no of questions return the first question 

                // let the user know what action was taken 
                console.warn('the given index is more than the number of questions so the first question was returned: note that the question with index of');
                
                // return the first question 
                return questions[0]

            } else {
                return questions[questionId - 1]
            }
        }).catch( err => console.error(err) )
    }
}
