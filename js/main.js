// GLOBAL VARIABLES
let pageWidth = innerWidth;
let pageHeight = innerHeight;

document.addEventListener('resize', () => {
	pageWidth = innerWidth;
	pageHeight = innerHeight;
})

const path = location.pathname;

// LINK HANDLING
const navLinks = [...document.querySelectorAll('header a')];
const activeLink = navLinks.find((el) => el.pathname == path);
activeLink.classList.add('is-active');

// CUBE
const cube = document.getElementById('cube');

if (cube) {
	// set defaults
	const frameRate = 18;
	const translateZ = pageWidth > 900 ? 200 : 75;
	let mouseX = pageWidth / -4;
	let mouseY = pageHeight / -4;
	let rotateX = 40;
	let rotateY = 40;

	const spinCube = () => {
		rotateY = rotateY + (mouseX / pageHeight * 180 - rotateY) / frameRate;
		rotateX = rotateX + (mouseY / pageWidth * 360 - rotateX) / frameRate;

		cube.style.transform = `translateZ(${translateZ}px) rotateX(${-rotateX}deg) rotateZ(${rotateY}deg)`;
	};

	// init
	spinCube();

	// update on frame rate
	setInterval(() => {
		spinCube();
	}, 1000 / frameRate);


	// update target coords
	document.addEventListener('mousemove', e => {
		mouseX = e.x;
		mouseY = e.y;
	});

}