// async function pusher(category, file, arr, index) {
//     await CodeCBT.getQuestionByIndex(category, file, index)
//         .then(question => {
//             arr.push(question);
//             pusher(category, file, questionsArr, randomNo)

//         })
// }

class CodeCBT {

    // get all data 
    // returns the full file content 
    static getData(category, file) {
        return fetch(`/api/v1.0.0/db/${category}/${file}`)
            .then(res => res.json())
            .catch(err => console.error(err) );
    }

    // returns all questions in that category 
    static getAllQuestions(category, file) {
        return this.getData(category, file)
                .then(data => data.questions)
                .catch( err => console.error(err) )
    }

    static getQuestionByIndex(category, file, questionIndex) {
        // get all questions in that category 
        return this.getAllQuestions(category, file).then(questions => {
            if(questionIndex >= questions.length) {
                // if the index is greater than the no of questions return the first question 

                // let the user know what action was taken 
                console.warn('the given index is more than the number of questions so the first question was returned: note that the question with index of');
                
                // return the first question 
                return questions[0]

            } else {
                return questions[questionIndex]
            }
        }).catch( err => console.error(err) )
    }

    static generateRandomIndexes(category, file, limit = 1) {
        return this.getAllQuestions(category, file)
                .then(questions => {
                    // instantiate the questions store 
                    const questionsIndexes = [];

                    // if the limit is less than the ammount of questions 
                    if(limit < questions.length) {
                        // loop through to generate a random number while the iteration is less than the limit 
                        for(let i = limit; i > questionsIndexes.length; ) {
                            // generate a random number always less than the length of questions 
                            const randomNo = Math.floor(Math.random() * questions.length)
    
                            // loop through the questions 
                            questions.forEach(question => {
    
                                // if the genrated number has not been included in the questions indexes array push it in
                                if( !(questionsIndexes.includes(randomNo)) ) {
                                    questionsIndexes.push(randomNo);
                                } 
                            });
    
                        }
                    } else {
                        // throw an error to the console 
                        console.error('the limit given is more than the number of questions available')
                    }

                    // return the generated indexes 
                    return [
                        questionsIndexes,
                        questions 
                    ];

                }).catch( err => console.error(err) )
    }

    static getRandomQuestions(category, file, limit = 1) {
        // make the call to get random indexes 
        return this.generateRandomIndexes(category, file, limit)
                .then(res => {
                    // store the generated questions so we can return them 
                    const generatedQuestions = [],
                        // get the indexes returned at the [0] of the response 
                            indexes = res[0],
                        // get the questions returned at the [1] of the response 
                            questions = res[1];

                    indexes.forEach(index => {
                        // push the question at that index (index is a random number which must have an index in the questions so push the question at that index to the generated questions array)
                        generatedQuestions.push(questions[index]);
                    })

                    // return the generatedQuestions 
                    return generatedQuestions;

                })
    }

    static getRandomQuestion(category, file, limit = 5) {
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

}