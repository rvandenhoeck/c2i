
// Fetch gets your JSON file…
fetch('chis.json')
	.then(response => response.json())
	.then(dogs => {
		// And passes the data to the function, above!
		renderItems(dogs) // In reverse order
	})



const renderItems = (dogs) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')

	// Loop through each item in the collection array
	dogs.forEach(dog => {
		const listItem = document.createElement('li') // Make the `li`

		// You can make each element inside of that…
		const itemTitle = document.createElement('h2') // Make an `h2`
		listItem.innerHTML = dog.Name // Put the JSON title inside
		listItem.appendChild(itemTitle) // And add it to the `li`!

		const itemImage = document.createElement('img') // And an image
		itemImage.src = dog.Image // Set the `src` attribute from the JSON
		listItem.appendChild(itemImage) // And add that too

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}