// javascript recap
console.log('hello world');

const myElement = document.querySelector('.myElementsClass')  // single object
const myGroup = document.querySelectorAll('.myElementsClass') // multple objects

myElement.classList.add('classIWantToAdd');
myElement.classList.remove('classIWantToRemove');
myElement.classList.toggle('classIWantToToggle');

myGroup.forEach(item => {
	// do something to the singular item
	// add/remove a class, attached an event listener
})

const myDiv = createElement('DIV');
myElement.appendChild(myDiv) // inserting a new element into an existing one

// create HTML via "template strings", which are wrapped in tick marks
const myHTML = 
`
	<div>
		<span>Hello World</span>
	</div>
`

// four positioning options
'beforebegin'
'afterbegin'
'beforeend'
'afterend'

// decide where to insert it
myElement.insertAdjacentHTML('beforeend', myHTML)


Math.max(3,4,56,6) // return 56
Math.min(3,4,56,6) // return 3
Math.abs(-10) // return 10

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
animals.slice(2,4);

const MyString = 'hello world';
MyString.replace('hello', ''); // return 'world'

// also see the scrollTo method

scrollBy(0, 1000) // x, y

scrollBy({
  top: 1000,
  left: 0,
  behavior: "smooth",
});



// conditionals
if (condition) {
	// do something if true
} else {
	// do something if false
}

if (condition) {
	// do something if true
} else if(anotherCondition) {
	// do something if false
}

// shorthand aka ternary operator
condition
? true // do something if true
: false // do something if false

// conditional variable
const conditionVariable = condition ? valueIfTrue : valueIfFalse

const myText = 'Hello Word';
const myArray = myText.split(' ')
console(myArray);

// click
// wheel
// scroll
// mousemove
// resize
// change

document.addEventListener('wheel', event => {
	console.log(event)
})