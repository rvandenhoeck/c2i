const students = [
	"Daphne",
	"Ana",
	"Rohan",
	"Yeonjoo",
	"Jaq",
	"Cameron",
	"Lily",
	"Katie",
	"Ishika",
	"Kuhoo",
	"Sofia",
	"Samantha",
	"Christine",
	"Vanessa",
	"Kim"
];

function shuffle(array) {
	let array_copy = array;
	let currentIndex = array_copy.length;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {

		// Pick a remaining element...
		let randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array_copy[currentIndex], array_copy[randomIndex]] = [
			array_copy[randomIndex], array_copy[currentIndex]];
	}

	return array_copy;
}

function printOrder() {

	let shuffled = shuffle(students);

	for (let i = 0; i < students.length; i++) {
		const fr_i = (i + 1) % students.length;
		const sr_i = (i + 2) % students.length;
		const n_i = (i + 3) % students.length;

		const student = students[i];
		const fr_student = students[fr_i];
		const sr_student = students[sr_i];
		const n_student = students[n_i];

		// Daphne (1R: Ana, 2R: Rohan, N: Kim)
		// const line = `${student}: (1R: ${fr_student}, 2R: ${sr_student}, N: ${n_student})`;
		const line = `${student}: (Responder: ${fr_student})`;
		console.log(line);
	}
}

printOrder();


