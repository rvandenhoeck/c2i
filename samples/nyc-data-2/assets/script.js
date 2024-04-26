const nycURL = 'https://data.cityofnewyork.us/resource/nu7n-tubp.json?$limit=50000'

const workWithData = data => {

	// how do we get an array of a specific property value (dog breed == Boxer, in this case)
	const boxers = data.filter(object => object.breedname == 'Boxer');
	
	// how do i get all the unique instances of something
	const breedNames = data.map(object => object.breedname);
	const uniqueBreedNames = new Set(breedNames);
	const arrayUniqueBreedNames = Array.from(uniqueBreedNames);

	const uniqueBreedNamesWithValues = data.reduce((newArray, object) => {
		// do something
		const breedname = object.breedname;

		// check if the breedname exists in the new array yet?
		newArray[breedname]
		? newArray[breedname] += 1 // if it is true
		: newArray[breedname] = 1; // if it is false

		return newArray;

	}, {});

	console.log(uniqueBreedNamesWithValues)
	
}

fetch(nycURL)
.then(response => response.json())
.then(json => {
    workWithData(json)
})