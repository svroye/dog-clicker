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

/* PART WITH LIST : LIST OF DOGS SEE COMMIT OF 10 JUNE 2017 'CHANGE TO LIST OF DOGS INSTEAD OF 2 DOGS'
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


*/

var $sideList = $('#list');
var $art= $('article');
var $imgContainer = $('.img-container');
var $timesClicked = $('.times-clicked');
var $dogName = $('.click-me');
var $imgDog = $('.dog-picture');


var model = {
	currentDog: null,
	dogs: [
		{
			imageName: "images/fenji1.jpg",
			dogName: "Fenji 1",
			score: 0
		},
		{
			imageName: "images/fenji2.jpg",
			dogName: "Fenji 2",
			score: 0
		},
		{
			imageName: "images/fenji3.jpg",
			dogName: "Fenji 3",
			score: 0
		}
	]
};

var viewClicker = {
	init: function(){
		this.dogElement = $('article');
		this.dogNameElement = document.getElementById('clickMe');
		this.dogImageElement = document.getElementById('dogPicture');
		this.scoreElement = document.getElementById('timesClicked');

		this.dogImageElement.addEventListener('click', function(){
			octopus.incrementCounter();
		});

		this.render();
	},
	render: function(){
		var currentDog = octopus.getCurrentDog();
		this.scoreElement.textContent = currentDog.score;
		this.dogNameElement.textContent = currentDog.dogName;
		this.dogImageElement.src = currentDog.imageName;
	}
};

var viewList = {
	init: function(){
		this.dogList = document.getElementById('list');
		this.render();
	},
	render: function(){
		var dog,elem;
		var dogs = octopus.getDogs();
		this.dogList.innerHTML = '';

		for (i = 0; i < dogs.length; i++) {
            // this is the cat we're currently looping over
            dog = dogs[i];

            // make a new cat list item and set its text
            elem = document.createElement('label');
            elem.innerHTML = '<input type="radio" name="dogName" class="list-item" value="dog">' + dog.dogName + '<br>';
            //elem.setAttribute('type','radio');
            //elem.setAttribute('name','dogname');
            //elem.setAttribute('class','list-item');
            //elem.setAttribute('value','dog');


            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            elem.addEventListener('click', (function(dogCopy) {
                return function() {
                    octopus.setCurrentDog(dogCopy);
                    viewClicker.render();
                };
            })(dog));

            // finally, add the element to the list
            this.dogList.appendChild(elem);

        }

	}
};

var octopus = {
	init: function(){
		model.currentDog = model.dogs[0];
		viewList.init();
		viewClicker.init();
	},
	getCurrentDog: function(){
		return model.currentDog;
	},
	getDogs: function(){
		return model.dogs;
	},
	setCurrentDog: function(dog){
		model.currentDog = dog;
	},
	incrementCounter: function(){
		model.currentDog.score++;
		viewClicker.render();
	}
};

octopus.init();