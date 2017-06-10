var dogPictureLeft = document.getElementById('firstDogPicture');
var dogPictureRight = document.getElementById('secondDogPicture');
var numberOfClicksLeft = parseInt(document.getElementById('numberOfClicks1').innerHTML);
var numberOfClicksRight = parseInt(document.getElementById('numberOfClicks2').innerHTML);


dogPictureLeft.addEventListener('click',function(){
	numberOfClicksLeft++;
	 document.getElementById('numberOfClicks1').innerHTML = numberOfClicksLeft;
})

dogPictureRight.addEventListener('click',function(){
	numberOfClicksRight++;
	 document.getElementById('numberOfClicks2').innerHTML = numberOfClicksRight;
})