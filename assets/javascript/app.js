// --------------------------------
// Array of Objects
// --------------------------------
var questions = [
    {
        question: "1. How did Daenerys Targaryen eventually hatch her dragon eggs?",
        a1: "1. In a lightning storm",
        a2: "2. In a funeral pyre",
        a3: "3. In a fireplace",
        a4: "4. In a frozen cave",
        correct: "2. In a funeral pyre"
    },
    {
        question: "2. The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:",
        a1: "1. Valar Dohaeris or 'all men must serve'",
        a2: "2. Valar Rohnas or 'all men must live'",
        a3: "3. Valar GoGo or 'all men must dance'",
        a4: "4. Valr Dohatraz or 'all men must sing'",
        correct: "1. Valar Dohaeris or 'all men must serve'"
    },
    {
        question: "3. American actor Peter Dinklage, who plays Tyrion Lannister, also had a starring role in this fantasy franchise:",
        a1: "1. Lord of the Rings",
        a2: "2. Highlander",
        a3: "3. The Chronicles of Narnia",
        a4: "4. The Legend of Zelda",
        correct: "3. The Chronicles of Narnia"
    },
    {
        question: "4. What is the only thing that can put out volatile Wildfire?",
        a1: "1. Sand",
        a2: "2. Water",
        a3: "3. Dragon's blood",
        a4: "4. Sunlight",
        correct: "1. Sand"
    },
    {
        question: "5. Besides dragonglass, what is the only other substance capable of defeating White Walkers?",
        a1: "1. Weirwood",
        a2: "2. Wildfire",
        a3: "3. Valyrian Steel",
        a4: "4. Snowballs",
        correct: "3. Valyrian Steel"
    },
    {
        question: "6. How many times has Beric Dondarrion been brought back to life?",
        a1: "1. Three times",
        a2: "2. Five times",
        a3: "3. Six times",
        a4: "4. Seven times",
        correct: "3. Six times"
    }
]
// --------------------------------
// Variables
// --------------------------------
var questionRotation = 0;
var interval;
var timeLeft = 30;
var questionHolder;
var questionsTried = 6;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unansweredQuestion = 0;
// --------------------------------
//Jquery Events
// --------------------------------
$("#try-again").on("click", function() {
    tryAgain();
})
$("#start-game").on("click", function(){
    run();
    $("#start-game").css("display", "none");
    $("#trivia").css("display", "inline-block");
    triviaStart();
})
$("#a1").on("click", function() {
    questionHolder = $("#a1").text();
    compareAnswer();
})
$("#a2").on("click", function() {
    questionHolder = $("#a2").text();
    compareAnswer();
})
$("#a3").on("click", function() {
    questionHolder = $("#a3").text();
    compareAnswer();
})
$("#a4").on("click", function() {
    questionHolder = $("#a4").text();
    compareAnswer();
})
$("li").hover(function(){
    $(this).css("backgroundColor", "black");
}, function(){
    $(this).css("backgroundColor", "rgba(0,0,0,0)");
})
// --------------------------------
//Functions
// --------------------------------
function decrementTime(){

    // decrease number by one
    timeLeft--,

    //show number in the html
    $("#time-left").text(timeLeft);

    // If time hits 0
    if (timeLeft === 0) {
        stop();
    }
}

function run() {
    clearInterval(interval);
    interval = setInterval(decrementTime, 1000);
    }

function stop() {
    clearInterval(interval);
    endTrivia();
}
function triviaStart() {
    
    if (questionRotation !== 6) {
    $("#question-section").text(questions[questionRotation].question);
    $("#a1").text(questions[questionRotation].a1);
    $("#a2").text(questions[questionRotation].a2);
    $("#a3").text(questions[questionRotation].a3);
    $("#a4").text(questions[questionRotation].a4);
    }
    else {
        endTrivia();
    }
    

}
function compareAnswer() {

        if (questionHolder === questions[questionRotation].correct) {
            questionsTried--
            questionRotation++;
            correctAnswer++
            triviaStart();
        } 
        else {
            questionsTried--
            questionRotation++;
            incorrectAnswer++
            triviaStart();
        }
}
function endTrivia() {
    if (correctAnswer < 4){
        $("#bg").css("backgroundImage", "url(assets/images/bronn-loss.jpg)");
        $("#trivia").css("display", "none");
        $("#trivia-end").css("display", "inline-block");
        $("#correct-answer").text("Correct answers: " + correctAnswer);
        $("#incorrect-answers").text("Incorrect answers: " + incorrectAnswer);
        $("#unanswered").text("Unanswered questions: " + questionsTried);
        $("#image-j").attr("src", "assets/images/no.gif");
        
    }
    else if (correctAnswer > 4) {
        $("#bg").css("backgroundImage", "url(assets/images/bron-win.jpg)");
        $("#trivia").css("display", "none");
        $("#trivia-end").css("display", "inline-block");
        $("#correct-answer").text("Correct answers: " + correctAnswer);
        $("#incorrect-answers").text("Incorrect answers: " + incorrectAnswer);
        $("#unanswered").text("Unanswered questions: " + questionsTried);
        $("#image-j").attr("src", "assets/images/GoT_joffrey_approves.gif");
    };
}
function tryAgain() {
    questionRotation = 0;
    interval;
    timeLeft = 30;
    questionHolder;
    questionsTried = 6;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unansweredQuestion = 0;
    $("#bg").css("backgroundImage", "url(assets/images/tyrion-interogation.jpg)");
    $("#trivia-end").css("display", "none");
    $("#start-game").css("display", "inline-block");
}