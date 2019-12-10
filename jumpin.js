$(document).ready(function () {
    $(".quizQuestions").hide();
    $("#submitButton").hide();

    // variables //
    var counter = 0;
    var timeLeft = 60;
    
    
    
    
    
    
    var timer = $("#timer");
    timer.html(timeLeft - counter);


    function timeIt() {
        counter++;
        var timer = $("#timer");
        timer.html(timeLeft - counter);

    };
    setInterval(timeIt, 1000);


    // variables //

    // functions //

    //start button//                /// need a start timer function //  /// also display questions //
    $("#startButton").on("click", function () {
        $("#startButton").hide();
        $("#quizQuestion1").show();
        $("#submitButton").show();
    });
    // start button//    /// methods important   .empty   .hide   .show  .html //// 





    // functions //

    // gameplay actual calling function //



    // gameplay //




    // questions //
    var questions = [
        {
            title: "Commonly used data types DO NOT include:",
            choices: ["strings", "booleans", "alerts", "numbers"],
            answer: 2
        },
        {
            title: "The condition in an if / else statement is enclosed within ____.",
            choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
            answer: 2
        },
        {
            title: "This is a question about javascript",
            choices: ["its cold", "its hot", "its medium", "its soft"],
            answer: 0
        },
        {
            title: "This is another question about javaScript",
            choices: ["its these {}", "its these []", "its these ||", "its these()"],
            answer: 0
        },
        {
            title: "This is the last question about javaScript",
            choices: ["might be this one", "could be this one", "defiantly not this one", "this one"],
            answer: 0
        }
    ];


    // questions //
});