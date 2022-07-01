
function mouseOver(event) {
    event.target.style.backgroundColor = "blue";
    console.log ("mouse over")
}

function mouseDown(event) {
    event.target.style.backgroundColor = "red";
    console.log("mouse down")
}

function mouseUp(event) {
    event.target.style.backgroundColor = "yellow";
    console.log ("mouse up")
}

function doubleClick(event) {
    event.target.style.backgroundColor = "green";
    console.log("double clicked")
}

function handleScroll(event) {
    const square = document.getElementById("square");
    square.style.backgroundColor = "orange";
    console.log("Handle scrolled")
}

document.getElementById("square").addEventListener("mouseover", (e) => mouseOver(e));

document.getElementById("square").addEventListener("mousedown", (e) => mouseDown(e));

document.getElementById("square").addEventListener("mouseup", (e) => mouseUp(e));

document.getElementById("square").addEventListener("dblclick", (e) => doubleClick(e));

document.body.addEventListener("wheel", (e) => handleScroll(e));

