// find the cursor element we created in html
const cursor = document.getElementById('cursor');

// listen for every time the mouse moves
document.addEventListener('mousemove', event => {
	// do the thing
	let totalMovement = Math.abs(event.movementX) + Math.abs(event.movementY);
	let finalMovement = Math.max(totalMovement / 10, 1);
	cursor.style.transform = `scale(${finalMovement})`;
	cursor.style.left = event.clientX + 'px';
	cursor.style.top = event.clientY + 'px';
})