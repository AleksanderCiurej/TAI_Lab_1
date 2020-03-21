let preQuestions =
    [
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "The song &quot;Twin Size Mattress&quot; was written by which band?",
            "correct_answer": "The Front Bottoms",
            "answers": ["The Front Bottoms", "Twenty One Pilots", "The Wonder Years", "The Smith Street Band"]
        },
        {
            "category": "Vehicles",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which Japanese company is the world&#039;s largest manufacturer of motorcycles?",
            "correct_answer": "Honda",
            "answers": ["Yamaha", "Suzuki", "Kawasaki", "Honda"]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of the following buildings is example of a structure primarily built in the Art Deco architectural style?",
            "correct_answer": "Niagara Mohawk Building",
            "answers": ["Niagara Mohawk Building", "Taipei 101", "One Detroit Center", "Westendstrasse 1"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In most FPS video games such as Counter-Strike, shooting which part of the body does the highest damage?",
            "correct_answer": "Head",
            "answers": ["Arm", "Leg", "Chest", "Head"]
        },
        {
            "category": "General Knowledge",
            "type": "boolean",
            "difficulty": "medium",
            "question": "The term &quot;Spam&quot; came before the food product &quot;Spam&quot;.",
            "correct_answer": "False",
            "answers": ["True", "False"]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In the show Stranger Things, what is Eleven&#039;s favorite breakfast food?",
            "correct_answer": "Eggo Waffles",
            "answers": ["Toast", "Captain Crunch", "Bacon and Eggs", "Eggo Waffles"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In the game Paper Mario for the Nintendo 64 the first partner you meet is a Goomba, what is its name?",
            "correct_answer": "Goombario",
            "answers": ["Goombella", "Goombarry", "Goomby", "Goombario"]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "easy",
            "question": "When was Google founded?",
            "correct_answer": "September 4, 1998",
            "answers": ["October 9, 1997", "December 12, 1989", "Feburary 7th, 2000", "September 4, 1998"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which is not a playable character in the 2005 video game Killer7?",
            "correct_answer": "Frank Smith",
            "answers": ["Frank Smith", "Mask de Smith", "Dan Smith", "Coyote Smith"]
        },
        {
            "category": "Geography",
            "type": "boolean",
            "difficulty": "medium",
            "question": "The capital of the US State Ohio is the city of Chillicothe.",
            "correct_answer": "False",
            "answers": ["True", "False"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which company did Bethesda purchase the Fallout Series from?",
            "correct_answer": "Interplay Entertainment",
            "answers": ["Capcom", "Interplay Entertainment", "Blizzard Entertainment", "Nintendo"]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which iconic album cover features the pulsar waves of CP 1919 placed in the center of the cover?",
            "correct_answer": "Unknown Pleasures",
            "answers": ["The Dark Side of the Moon", "Unknown Pleasures", "London Calling", "The Velvet Underground &amp; Nico"]
        },
        {
            "category": "Politics",
            "type": "boolean",
            "difficulty": "medium",
            "question": "During the 2016 United States presidential election, the State of California possessed the most electoral votes, having 55.",
            "correct_answer": "True",
            "answers": ["False", "True"]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Who was the first prime minister of Canada?",
            "correct_answer": "John Macdonald",
            "answers": ["John Macdonald", "John Abbott", "Alexander Mackenzie", "Robert Borden"]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "medium",
            "question": "The land mass of modern day Turkey is called what?",
            "correct_answer": "Anatolia",
            "answers": ["Anatolia", "Ismuth of Ottoma", "Ottoma", "Ismuth of Anatolia"]
        },
        {
            "category": "Sports",
            "type": "boolean",
            "difficulty": "easy",
            "question": "In association football, or soccer, a corner kick is when the game restarts after someone scores a goal.",
            "correct_answer": "False",
            "answers": ["True", "False"]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who played the Cenobite called &quot;Pinhead&quot; in the original Hellraiser films?",
            "correct_answer": "Doug Bradley",
            "answers": ["Doug Bradley", "Doug Jones", "Doug Savant", "Doug Benson"]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of these countries is the smallest by population?",
            "correct_answer": "Norway",
            "answers": ["Slovakia", "Norway", "Finland", "Hong Kong"]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which internet company began life as an online bookstore called &#039;Cadabra&#039;?",
            "correct_answer": "Amazon",
            "answers": [
                "eBay",
                "Overstock",
                "Shopify",
                "Amazon"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Generally, which component of a computer draws the most power?",
            "correct_answer": "Video Card",
            "answers": [
                "Hard Drive",
                "Processor",
                "Power Supply",
                "Video Card"
            ]
        }];


let next = document.querySelector('.next');
let previous = document.querySelector('.previous');
let question = document.querySelector('.question');
let questionNumber = document.querySelector('.questionNumber');
let answers = document.querySelectorAll('.list-group-item');
let pointsElem = document.querySelector('.score');
let restart = document.querySelector('.restart');
let results = document.querySelector('.results');
let quiz = document.querySelector('.list');
let userScorePoint = document.querySelector(".userScorePoint");
let average = document.querySelector(".average");
let index = 0;
let points = 0;
let chosenAnswers = [];

for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener('click', doAction);
}

function setQuestion(index) {
    let actualIndex = index + 1;
    questionNumber.innerHTML = 'Question '+ actualIndex + ' out of ' + preQuestions.length;
    question.innerHTML = preQuestions[index].question;
    answers[0].innerHTML = preQuestions[index].answers[0];
    answers[1].innerHTML = preQuestions[index].answers[1];
    answers[2].innerHTML = preQuestions[index].answers[2];
    answers[3].innerHTML = preQuestions[index].answers[3];
    answeredQuestions(index);
    if (preQuestions[index].answers.length === 2) {
        answers[2].style.display = 'none';
        answers[3].style.display = 'none';
    } else {
        answers[2].style.display = 'block';
        answers[3].style.display = 'block';

    }
}

setQuestion(0);

next.addEventListener("click", function(event) {
    index++;
    if (index>=preQuestions.length) {
        quiz.style.display = 'none';
        results.style.display = "block";
        getDataFromLocalStorage();
        userScorePoint.innerHTML = points;
    }else{
        removeMarkedQuestions();
        activateAnswers();
        setQuestion(index);
    }
});


previous.addEventListener('click', function (event) {
    if(index>0){
        index--;
        removeMarkedQuestions();
        setQuestion(index);
    }
});

function answeredQuestions(index) {
    if (isAnswered()) {
        disableAnswers();
        for (let i = 0; i < answers.length; i++) {
            if (answers[i].innerHTML === preQuestions[index].correct_answer) {
                answers[i].classList.add("correct");
            } else if (
                answers[i].innerHTML === chosenAnswers[index].answer
            ) {
                answers[i].classList.add("incorrect");
            }
        }
    }
}

function doAction(event) {
    if (event.target.innerHTML === preQuestions[index].correct_answer) {
        points++;
        pointsElem.innerText = points;
        markCorrect(event.target);
    }
    else {
        markInCorrect(event.target);
        for (let i = 0; i < answers.length; i++) {
            if (answers[i].innerHTML === preQuestions[index].correct_answer) {
                answers[i].classList.add("correct");
            }
        }
    }
    disableAnswers();
}


function isAnswered() {
    for (let i = 0; i < chosenAnswers.length; i++) {
        if (chosenAnswers[i].index == index) {
            return true;
        }
    }
    return false;
}
function markCorrect(target){
    target.classList.add("correct");
    chosenAnswers.push({answer: target.innerHTML,index: index});
}

function markInCorrect(target){
    target.classList.add("incorrect");
    chosenAnswers.push(
        {
            answer: target.innerHTML,
            index: index
        }
        );
}

function disableAnswers(){
    for (let i = 0; i < answers.length; i++) {
        answers[i].removeEventListener("click",doAction);
    }
}

function activateAnswers(){
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click",doAction);
    }
}
function removeMarkedQuestions(){
    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.remove("correct");
        answers[i].classList.remove("incorrect");
    }
}
function getDataFromLocalStorage() {
    let playCount = JSON.parse(localStorage.getItem("playCount"));
    let sumOfPoints = JSON.parse(localStorage.getItem("sumOfPoints"));

    playCount += 1;
    sumOfPoints += points;
    avgPoints = sumOfPoints / playCount;

    average.innerHTML = avgPoints;

    localStorage.setItem("avgPoints", avgPoints);
    localStorage.setItem("playCount", playCount);
    localStorage.setItem("sumOfPoints", sumOfPoints);
}
restart.addEventListener('click', function (event) {
    event.preventDefault();

    index = 0;
    points = 0;
    let userScorePoint = document.querySelector('.score');
    userScorePoint.innerHTML = points;
    setQuestion(index);
    activateAnswers();
    removeMarkedQuestions();
    chosenAnswers = [];
    quiz.style.display = "block";
    results.style.display = "none";
});
