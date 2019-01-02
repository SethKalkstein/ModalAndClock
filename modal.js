
function createModal(){
	var theModal = document.createElement("div");
	
	theModal.style.width = "300px";
	theModal.style.height = "130px";
	theModal.style.backgroundColor = "white";
	theModal.style.border= "1px solid black";
	theModal.style.position = "absolute";
	theModal.style.top = "100px";
	theModal.style.right = "200px"
	theModal.style.borderRadius = "5px";

	document.body.appendChild(theModal);
	
	var theExitButton = createExitButton();
	
	theModal.appendChild(theExitButton);
	
	theExitButton.addEventListener("click",function(){
		theModal.style.display = "none";
	})

	var boxText = document.createElement("p");
	boxText.innerHTML = "anim id est laborum. Lorem ipsum dolorlore mlorem est laborum. Lorem ipsum dolorlorem.";
	theModal.appendChild(boxText);
	var boxLink = document.createElement("a");
	boxLink.setAttribute("href", "index.html");

	boxLink.innerHTML = "Click here to go to the clock";
	
	theModal.appendChild(boxLink);
	boxText.style.padding = "10px";
	boxLink.style.padding = "10px";
}


function modalPopup(){
	setTimeout(createModal, 2000)
}
window.addEventListener("load", modalPopup);

//
 function createExitButton(){
 	var theExitButton = document.createElement("div");

 	theExitButton.style.width = "15px";
 	theExitButton.style.height = "17px";

 	theExitButton.style.borderLeft= "1px solid black";
 	theExitButton.style.borderBottom= "1px solid black";
	theExitButton.style.position = "relative";

	theExitButton.style.float= "right";
	theExitButton.innerHTML = "X";
	theExitButton.style.paddingLeft = "3px";

	theExitButton.addEventListener("mouseover",function(){
		theExitButton.style.cursor= "pointer";
	})

 	return theExitButton;
 }

