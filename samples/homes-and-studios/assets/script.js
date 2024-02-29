// find and store the html element we want to apply a function to
let firstBlock = document.querySelector('.collection-item');
// decide when exactly to run the function
document.addEventListener('click', () => {
	// what does the function actually do? in this case, just add a css class to the element
	firstBlock.classList.add('is-tilted');
})
