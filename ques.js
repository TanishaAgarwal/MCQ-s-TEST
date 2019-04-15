document.querySelector('.inner').width = window.innerWidth;
document.querySelector('.inner').heigth = window.innerHeight;
function countDown(secs){
	var elem = document.querySelector('.status');
	
	elem.innerHTML = '<br><br><h2>Please wait for</h2>' + secs +'<h2>seconds..</h2>';
	if(secs < 1){
		clearTimeout(timer);
		elem.innerHTML = '<br><br><h1 style="color:red;font-Family:arial;">!!Test Loaded...!!</h1>';
		elem.innerHTML += '<a href="quiz.html" class="btn">START TEST</a>';
	}
	secs--;
	var timer = setTimeout('countDown('+secs+')',1000);
}
countDown(10);
