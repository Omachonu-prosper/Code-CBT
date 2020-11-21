# Code CBT
Code CBT is a frontend api where you can get code related questions you can use for practise, job interview tests (can be used by employers or potential employees) or by code instructors to teach their students how to make api calls or to test their knowledge on what they have learnt.

## Getting started
You can use the Code CBT API either by making Http requests or downloading the json files and hosting it yourself.

## Making Http GET requests
Using Code CBT through http requests requires you to make HTTP GET requests to our hosted server.

#### For Example

> Request template
```
    http://127.0.0.1:5500/api/-version-/db/-category-/-category-initials-.json
```

> Request
```
    http://127.0.0.1:5500/api/v1.0.0/db/javascript/js.json
```

> Response
```json
{
    "category": "JavaScript",
    "category_initial": "js",
    "questions": [
        {
            "id": "js1",
            "source": "code CBT",
            "question": "What does XHR stand for",
            "answer": "XML Http Request",
            "options": [
                "Xtensive Http Response",
                "Xtensive Http Request",
                "XML Http Request",
                "XML Http Response"
            ]
        },\.\.\.
    ]
} 
```

## Contributing 
You can contribute to the project by starring, cloning or downloading the repository and then making pull requests (PRs). You can also create github issues if you have a sujjestion or a problem. 

> NOTE: if you make a change to any question file you must point it out either in a commit  message or raise an issue else your pull request will not be acknowledged. information to update, correct or add a question is stated bellow.

### Feedback 
Let me know what you think about this software i'm open minded to any suggestion, criticism, bug report, bug fix or any thing on your mind.

### Adding your new question 
> locally 
If you are downloading the json files you are free to add, update or delete any question. You have the liberty to set the questions as you like but you must make reference to Code CBT.

>On our servers
You can make a pull request with a commit message stating the file you editted and the question id added on to from the last id in the right structure. For example if the last id in the js.json file was js43 then if i am to add a question the new questions id should be js44.
> NOTE: Any alterance to any other part of the repo without due information on why and where the change will not be honoured (ie your pull request will not be merged but deleted).

