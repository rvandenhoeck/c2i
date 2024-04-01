
// Fetch gets your JSON file…
fetch('chis.json')

	// processing it into a javascript object
	.then(contents => contents.json())

	.then(dogs => {
		// And passes the data to the function, above!
		renderItems(dogs) // In reverse order
	})


// takes the dogs data and render it to our page
const renderItems = (dogs) => {

	// The element where the items will be inserted
	const collectionList = document.getElementById('collection')

	// Loop through each item in the collection array
	dogs.forEach(dog => {
		// create the div for the dog
		const listItem = document.createElement('div')

		// creates the title
		const itemTitle = document.createElement('h2') // Make an `h2`
		itemTitle.innerHTML = dog.Name // Put the JSON title inside
		listItem.appendChild(itemTitle) // And add it to the `li`!

		// create the image
		const itemImage = document.createElement('img') // And an image
		itemImage.src = dog.Image // Set the `src` attribute from the JSON
		listItem.appendChild(itemImage) // And add that too`

		collectionList.appendChild(listItem);

	})




}
