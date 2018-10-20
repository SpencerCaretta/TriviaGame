//on load function to hide gifs and push question 1 to html
$(document).ready(function() {
    $('#correctGif').hide();
    $('#incorrectGif').hide();
    $('#question').html("<p>" + question1.question + "</p>");
    $('#button1').html("<p>" + question1.answer1 + "</p>");
    $('#button2').html("<p>" + question1.answer2 + "</p>");
    $('#button3').html("<p>" + question1.answer3 + "</p>");
    $('#button4').html("<p>" + question1.answer4 + "</p>");
    run();
    myTimer();

})


// variable declaration - need array of questions and the answers to them
var question1 = {
    question: "What is the first Pokemon in the Pokedex?",
    answer1: "Pikachu",
    answer2: "Mew",
    answer3: "Bulbasaur",
    answer4: "Squirtle",
    correctAnswer: "Bulbasaur",
}
var question2 = {
    question: "How many Pokemon are in the Kanto Region?",
    answer1: 96,
    answer2: 124,
    answer3: 185,
    answer4: 151,
    correctAnswer: 151,
}
var question3 = {
    question: "What is the name of the main character (protagonist) in the Pokemon TV Show?",
    answer1: "Brock",
    answer2: "Ash",
    answer3: "Youngster Joey",
    answer4: "Gary",
    correctAnswer: "Ash",
}
var question4 = {
    question: "How many Pokemon generations of games are there currently in Pokemon? (2018)",
    answer1: 7,
    answer2: 4,
    answer3: 1,
    answer4: 6,
    correctAnswer: 7,
}
var question5 = {
    question: "How many gym badges does one need to enter the elite four in most Pokemon games?",
    answer1: 4,
    answer2: 6,
    answer3: 8,
    answer4: 10,
    correctAnswer: 8,
}
var question6 = {
    question: "What are the off-colored Pokemon that you can find called?",
    answer1: "Glitches",
    answer2: "Mutated Pokemon",
    answer3: "Special Pokemon",
    answer4: "Shiny Pokemon",
    correctAnswer: "Shiny Pokemon",
}
var question7 = {
    question: "What was the first Pokemon created?",
    answer1: "Bulbasaur",
    answer2: "Pikachu",
    answer3: "Rhydon",
    answer4: "Tangela",
    
}
var question8 = {
    question: "What is the most number of badges in a single Pokemon game? (2018)",
    answer1: 4,
    answer2: 8,
    answer3: 16,
    answer4: 24,
    correctAnswer: 16,
}
var question9 = {
    question: "How many pokemon can Eevee evolve into? (2018)",
    answer1: 3,
    answer2: 5,
    answer3: 7,
    answer4: 8,
    correctAnswer: 8,
}
var question10 = {
    question: "Who is one of the creators of Pokemon?",
    answer1: "Ken Sugimori",
    answer2: "Masahiro Sakurai",
    answer3: "Satoru Iwata",
    answer4: "Reggie Fils-Aimé",
    correctAnswer: "Ken Sugimori",
}

var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]

//function used to wait 5 seconds after a question is answered, then move on to the next question 
function wait() {
    setTimeout(
        function() {
            for (i=0; i<questions.length; i++) {
                i++
                $('#question').html(questions.question);
                $('#button1').html(questions.answer1);
                $('#button2').html(questions.answer2);
                $('#button3').html(questions.answer3);
                $('#button4').html(questions.answer4);
            }
        }, 5000);
}
//timed function for timer
var timeLeft = 5;
var intervalId;
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(myTimer, 1000);
}
/* run out of time function, tells player times up, display correct answer,
 then move to next question after a few seconds */
function myTimer() {
    timeLeft--;
    $('#timeLeft').html("<p>" + timeLeft + " seconds </p>"); 
    if (timeLeft === 0) {
        alert("Times up!");
        $('#correctAnswer').html("<p> Correct Answer: " + questions[i].correctAnswer + "</p>");
        wait();
    }
    
}

// on click function for each button
/* correct answer function displaying a congratulations,
 then display next question after a few seconds */
/* if they get the question wrong, display correct answer,
then move to the next question after a few seconds */

$('#button1').click(function() {
    if (answer1 === correctAnswer) {
        $('#button1').hide();
        $('#button2').hide();
        $('#button3').hide();
        $('#button4').hide();
        $('#correctGif').show();
        wait();
    } else {
        $('#button1').hide();
        $('#button2').hide();
        $('#button3').hide();
        $('#button4').hide();
        $('#correctAnswer').append(correctAnswer);
        $('#incorrectGif').show();
        wait();
    }
})
$('#button2').click(function() {
    if (answer2 === correctAnswer) {
        $('#button1').hide();
        $('#button2').hide();
        $('#button3').hide();
        $('#button4').hide();
        $('#correctGif').show();
        wait();
    } else {
        $('#button1').hide();
        $('#button2').hide();
        $('#button3').hide();
        $('#button4').hide();
        $('#correctAnswer').append(correctAnswer);
        $('#incorrectGif').show();
        wait();
    }
    
})
$('#button3').click(function() {
    if (answer3 === correctAnswer) {
        $('#button1').hide();
        $('#button2').hide();
        $('#button3').hide();
        $('#button4').hide();
        $('#correctGif').show();
        wait();
    } else {
        $('#button1').hide();
        $('#button2').hide();
        $('#button3').hide();
        $('#button4').hide();
        $('#correctAnswer').append(correctAnswer);
        $('#incorrectGif').show();
        wait();
    }
    
})
$('#button4').click(function() {
    if (answer4 === correctAnswer) {
        $('#button1').hide();
        $('#button2').hide();
        $('#button3').hide();
        $('#button4').hide();
        $('#correctGif').show();
        wait();
    } else {
        $('#button1').hide();
        $('#button2').hide();
        $('#button3').hide();
        $('#button4').hide();
        $('#correctAnswer').append(correctAnswer);
        $('#incorrectGif').show();
        wait();
    }
    
})

/*After the array of questions is run through, show a final screen
Show number of correct answers, number of incorrect answers */
//button function to restart the game for user to play again