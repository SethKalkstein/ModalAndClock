
function createBox1(){
	var box1 = document.createElement("div");
	box1.style.width = "300px";
	box1.style.height = "100px";
	box1.style.backgroundColor = "white";
	box1.style.border= "1px solid black";
	box1.style.position = "absolute";
	box1.style.top = "100px";
	box1.style.right = "200px"
	box1.style.borderRadius = "5px";
	document.body.appendChild(box1);
	var box2 = createBox2();
	box1.appendChild(box2);
	box2.addEventListener("click",function(){
		box1.style.display = "none";
	})
}


function modalPopup(){
	setTimeout(createBox1, 1000)
}
window.addEventListener("load", modalPopup);


 function createBox2(){
 	var box2 = document.createElement("div");
 	box2.style.width = "15px";
 	box2.style.height = "15px";
 	// box2.style.backgroundColor = "red";
 	box2.style.borderLeft= "1px solid black";
 	box2.style.borderBottom= "1px solid black";
	box2.style.position = "relative";
	// box2.style.borderRadius = "5px";
	box2.style.float= "right";
	box2.innerHTML = "X";
	box2.style.padding = "auto";
 	return box2;
 }

// box1.appendChild(box2)
// box2.appendChild(boxText)