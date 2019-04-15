//questions js
function Question(text,choices,answer){
	this.text = text;
	this.choices = choices;
	this.answer = answer;
	this.correctAnswer = function(choice){
		return choice === this.answer;	
	}
}

//quiz_controller js
function Quiz(questions){
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
	this.getQuestionIndex = function(){
		return this.questions[this.questionIndex];
	}
	this.isEnded = function(){
		return this.questions.length === this.questionIndex;
	}
	this.guess = function(answer){
		if(this.getQuestionIndex().correctAnswer(answer)){
			this.score++;
		}
		this.questionIndex++;
	}
}

//app js





function populate(){
	if(quiz.isEnded()){
		showScores();
	}
	else{
		var elem = document.getElementById('question');
		elem.innerHTML = quiz.getQuestionIndex().text;
		
		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i < choices.length; i++){
			var ele = document.getElementById('choice'+i);
			ele.innerHTML = choices[i];
			guess('btn'+i, choices[i]);
		}
		show();
	}
}

function guess(id,guess){
	var elem = document.getElementById(id);
	elem.onclick = function(){
		quiz.guess(guess);
		populate();
	}
}

function show(){
	var curr = quiz.questionIndex + 1;
	var ele = document.getElementById('progress');
	ele.innerHTML = 'Question number '+curr+' out of '+quiz.questions.length;
}

function showScores(){
	
	var gameOver = '<h1>Result</h1>';
	gameOver += '<h2 id="score">Your scores: '+quiz.score+'</h2>';
	var elem = document.getElementById('quiz');
	elem.innerHTML = gameOver;
}

var questions = [
	new Question('JavaScript Code can be called by using _________.',["Method","Preprocessor","Triggering Event","RMI"],'Method'),
	new Question('Select all the correct option(s). State the correct place of JS Code inside HTML -',["Inside Body","outise page","Inside Head","All of these"],'All of these'),
	new Question('JavaScript Code is written inside file having extension __________.',[".jvs",".jsc",".jvt",".js"],'.js'),
	new Question('Local Browser used for validations on the Web Pages uses __________.',["java","HTML","js","CSS"],'js'),
	new Question('Which of the following Attribute is used to include External JS code inside your HTML Document -',["link","src","ext","script"],'src')
];

var quiz = new Quiz(questions);
populate();