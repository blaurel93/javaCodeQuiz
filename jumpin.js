
$(document).ready(function () {
    $("#extraControls").hide();

    var highScores = $("#highScores");
    var timer = $("#timer");
    var hideShow = $("#hideShow");


    $("#startButton").click(function () {
        $("#extraControls").show();
        $("#startButton").hide();
    });


});
