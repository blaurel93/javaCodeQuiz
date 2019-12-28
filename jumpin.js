

/// START BUTTON STUFF ///
var startButton = $("#startButton");
var questionSpot = $("#questionSpot");
var nextBtn = $("#nextQuestion")
/// DISPLAY THE QUESTIONS AFTER START IS RAN AND START IS HIDDEN //
var thingsHidden = $(".hide");

var progress = $("#progressSection");
var a = $("#answerBtn0");
var b = $("#answerBtn1");
var c = $("#answerBtn2");
var d = $("#answerBtn3");

var update = '1';

// var lastquestion = questions.length - 1;
var runningQuestion = 0;


var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: 'strings',
        choice2: 'booleans',
        choice3: 'alerts',
        choice4: 'numbers',
        answer: 2
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choice1: 'quotes',
        choice2: 'curly brackets',
        choice3: 'parentheses',
        choice4: 'square brackets',
        answer: 2
    },
    {
        question: "Which company has the fastest production car?",
        choice1: 'Tesla',
        choice2: 'Corvette',
        choice3: 'Mercedes',
        choice4: 'Subaru',
        answer: 0
    },
    {
        question: "Which company makes the fastest production motorcycle?",
        choice1: 'BMW',
        choice2: 'Harley Davidson',
        choice3: 'Honda',
        choice4: 'Kawasaki',
        answer: 3
    },
    {
        question: "What is considered to be the hardest programming language?",
        choice1: 'Brainfuck',
        choice2: 'Malbolge',
        choice3: 'INTERCAL',
        choice4: 'COW',
        answer: 1
    }
];


var runTime = true;



///// CREATE A FUNCTION TO START THE GAME ie START QUIZ /////
startButton.click('click', startQuiz);

function startQuiz() {
    startButton.hide();
    thingsHidden.show();
    renderQuestion();
    //// NOW THAT EVERYTHING IS SHOWING AGAIN ///
    /// WE NEED TO SHOW THE QUESTIONS & ANSWERS IN THEIR SPOTS ///
    // question1();
    // popAnswer();
    var counter = 0;
    var timeLeft = 60;

    var timer = $("#timer");
    timer.html(timeLeft - counter);
    function timeIt() {
        counter++;

        if (runTime === true) {
            timer.html(timeLeft - counter);
        }
    };
    setInterval(timeIt, 1000);
    updateProgress();
}

function stopTimer() {
    runTime = false;
}


function endQuiz() {

    questionSpot.text('Congratz you got 5 out of 5 !')
    $("#answer-btns").empty();
    stopTimer();
}


// render it to the page
function renderQuestion() {


    if (runningQuestion === 5) {
        endQuiz()
    } else {
        var q = questions[runningQuestion];
        questionSpot.text(q.question);
        a.text(q.choice1);
        b.text(q.choice2);
        c.text(q.choice3);
        d.text(q.choice4);
    }
};


////// CREATE A FUNCTION TO RE UPDATE QUESTIONS WHEN A ANSWER IS SELECTED
////// AND NEXT BUTTON IS CLICKED

///// CREATE A FUNCTION THAT CORRESPONDS WITH ANSWER SELECTED ////

function updateProgress() {
    // $("#progressSection").html(update);
    if (runningQuestion < 5) {
        $("#progressSection").html(update);
    } else {
        return;
    }
}

function checkAnswer(answer) {
    if (answer === questions[runningQuestion].answer && runningQuestion < 5) {
        console.log('Correct')
        runningQuestion++
        console.log(runningQuestion);
        renderQuestion();
        update++
        updateProgress();
    } else {
        console.log('Choose again')
    }
}
// $("#answerbutton0").on("click", checkAnswer());



