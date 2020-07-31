var question1Answers = ["EXtreme HyperText Markup Language", "EXtensible HyperText Marking Language",
    "EXtensible HyperText Markup Language", "EXtra Hyperlinks and Text Markup Language"];

var question2Answers = ["&lt/p&gt;&ltp&gt;>", "&ltp&gt;&lt/p&gt;", "&ltP&gt;&lt/p&gt;",
    "&ltP&gt;&lt/P&gt;"];

var question3Answers = ["&ltbreak/&gt;", "&ltbr /&gt;", "&ltbr&gt;"];

var correctAnswers = [ "EXtensible HyperText Markup Language", "<p></p>", "<br />"];

function makeQuiz() {
    var body = document.getElementById("body");
    var form = document.createElement("form");
    var quizTitle = document.createElement("h1");
    var checkAnswers = document.createElement("button");
    var scoreLabel = document.createElement('label');
    var scoreBox = document.createElement('input');

    form.setAttribute('name', 'quiz');
    form.setAttribute('id', 'quiz');

    quizTitle.innerHTML = "Online Quiz on XHTML";
    form.appendChild(quizTitle);

    form.appendChild(makeQuestion1());
    form.appendChild(makeQuestion2());
    form.appendChild(makeQuestion3());

    form.appendChild(document.createElement("hr"));

    checkAnswers.innerHTML = "Check score";
    checkAnswers.setAttribute('type','button');
    checkAnswers.setAttribute('onClick','checkScore()');
    form.appendChild(checkAnswers);
    form.appendChild(document.createElement("br"));

    scoreLabel.setAttribute('for','#scoreBox');
    scoreLabel.innerHTML="Your score is: ";

    scoreBox.setAttribute('id','scoreBox');
    scoreBox.setAttribute('type', 'text');

    form.appendChild(scoreLabel);
    form.appendChild(scoreBox);

    body.appendChild(form)
}

function makeQuestion1() {
    var question = document.createElement("h2");
    var select = document.createElement("select");

    question.innerHTML = "Question 1: What does XHTML stand for?";
    question.appendChild(document.createElement("br"));

    select.setAttribute('name', 'question1');

    for (let i = 0; i < question1Answers.length; i++) {
        select.appendChild(document.createElement("option")).innerHTML = question1Answers[i].valueOf();
    }

    question.appendChild(select);
    return question;

}

function makeQuestion2() {
    var question = document.createElement("h2");
    var select = document.createElement("select");

    question.innerHTML = "Question 2: What is the correct XHTML for a paragraph?";
    question.appendChild(document.createElement("br"));

    select.setAttribute('name', 'question2');

    for (let i = 0; i < question2Answers.length; i++) {
        select.appendChild(document.createElement("option")).innerHTML = question2Answers[i].valueOf();
    }

    question.appendChild(select);
    return question;
}

function makeQuestion3() {
    var question = document.createElement("h2");
    var select = document.createElement("select");

    question.innerHTML = "Question 3: What is the correct XHTML for a line break?";
    question.appendChild(document.createElement("br"));

    select.setAttribute('name', 'question3');

    for (let i = 0; i < question3Answers.length; i++) {
        select.appendChild(document.createElement("option")).innerHTML = question3Answers[i].valueOf();
    }

    question.appendChild(select);
    return question;
}

function getSelectValue(formname,selectname){
    var theMenu = document[formname][selectname];
    var selecteditem = theMenu.selectedIndex;
    return theMenu.options[selecteditem].value;
}

function checkScore() {
    var score = 0;

    if (getSelectValue('quiz','question1') === correctAnswers[0]){
        score ++;
    }
    if(getSelectValue('quiz', 'question2') === correctAnswers[1]){
        score ++;
    }
    if (getSelectValue('quiz', 'question3') === correctAnswers[2]){
        score ++;
    }

    document.getElementById('scoreBox').value = score;

    return false;
}
