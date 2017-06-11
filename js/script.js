/*  PART WITH 2 PICTURES 
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
*/

/* PART WITH LIST : LIST OF DOGS SEE COMMIT OF 10 JUNE 2017 'CHANGE TO LIST OF DOGS INSTEAD OF 2 DOGS'*/
var numberOfItems = 3;
var dogArray = [];

for(var i=1; i <=numberOfItems; i++) {
	var dog = {
		imageName: 'fenji' + i + '.jpg',
		dogName: 'Fenji ' + i,
		score: 0,
		id: i
	};

	dogArray.push(dog);
}

var $sideList = $('#list');
var $art= $('article');
var $imgContainer = $('.img-container');
var $timesClicked = $('.times-clicked');
var $dogName = $('.click-me');

// Let's loop over the numbers in our array
for (var i = 0; i < numberOfItems; i++) {
	var currentElement = dogArray[i];
	var elementToAdd = '<input type="radio" name="dogName" class="list-item" id="charButton' + currentElement.id + '" value="dog">' + currentElement.dogName + '<br>';
	$sideList.append(elementToAdd);
	var newElement = document.getElementById('charButton'+ currentElement.id);

	newElement.addEventListener('click', (function(elem) {
		return function(){
			var imgToAdd= '<img class="image-large" src="images/' + elem.imageName + '" id="dog' + elem.id + '">';
			$imgContainer.empty();
			$imgContainer.append(imgToAdd);
			$dogName.html(elem.dogName)
			var imgAdded = document.getElementById('dog' + elem.id);
			$timesClicked.html(elem.score);
			
			

			imgAdded.addEventListener('click',function(){
				elem.score++;
				$timesClicked.html(elem.score);
			});
			
		}
	})(currentElement));

};
