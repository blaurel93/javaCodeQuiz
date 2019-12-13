
$(document).ready(function () {
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

    var questions = [
        {
            question: "Commonly used data types DO NOT include:",
            choice1: 'strings',
            choice2: 'booleans',
            choice3: 'alerts',
            choice4: 'numbers',
            answer: 0
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
            question: "This is a question named 2:",
            choice1: 'hello',
            choice2: 'this',
            choice3: 'issss',
            choice4: 'question 2',
            answer: 3
        },
        {
            question: "this is a question named 3:",
            choice1: 'strings',
            choice2: 'booleans',
            choice3: 'alerts',
            choice4: 'numbers',
            answer: 2
        },
        {
            question: "this is a question named 4:",
            choice1: 'strings',
            choice2: 'booleans',
            choice3: 'alerts',
            choice4: 'numbers',
            answer: 1
        }
    ];






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
        // var counter = 0;
        // var timeLeft = 60;

        // var timer = $("#timer");
        // timer.html(timeLeft - counter);
        // function timeIt() {
        //     counter++;
        //     if (timeLeft == 55) {

        //     }
        //     timer.html(timeLeft - counter);
        // };
        // setInterval(timeIt, 1000);

    }



    var lastquestion = questions.length - 1;
    var runningQuestion = 0;
    // render it to the page
    function renderQuestion() {
        var q = questions[runningQuestion];
        questionSpot.text(q.question);
        a.text(q.choice1);
        b.text(q.choice2);
        c.text(q.choice3);
        d.text(q.choice4);
    };


    ////// CREATE A FUNCTION TO RE UPDATE QUESTIONS WHEN A ANSWER IS SELECTED
    ////// AND NEXT BUTTON IS CLICKED
    function setNextQuestion() {

    }
    // nextBtn.on('click', setNextQuestion)
    function showQuestion(question) {


    }

    ///// CREATE A FUNCTION THAT CORRESPONDS WITH ANSWER SELECTED ////

    function answerSelected() {

    }

    function checkAnswer(answer) {
        if (answer === questions[runningQuestion].answer) {
            console.log('workin')
        } else {
            console.log('not working')
        }
    }
    $("#answerbutton0").on("click", checkAnswer());

});
