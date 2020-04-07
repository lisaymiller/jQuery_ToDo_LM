$(document).ready(function(){
	console.log('Ready!');
});







var newListItem = document.createElement('li'); //creating new list item
		newListItem.innerHTML = "Close the damn door before I punch you in the face!"; //telling it what to put in the new list item
		newListItem.setAttribute("class","list-group-item"); //setting new list to certain class for styling reasons

var list = document.querySelector('ul');//selecting section?
		list.setAttribute('class','list-group');//telling it what to set class as for new item
		list.appendChild(newListItem);//telling it to add the new item from above to end of section selected above

function newNode (){ //function for button click
	var inputVal = document.getElementById('inputNew').value; //get value from input box
		
	var newLI = document.createElement('li');//create new list item
		newLI.innerHTML = inputVal;//set contents of new list item to the value of input above
		newLI.setAttribute('class','list-group-item');//set class of new item for styling reasons
	
	var list = document.querySelector('ul');//select section?
		list.setAttribute('class','list-group');//set class to thing for styling reasons
		list.appendChild(newLI);//put new thing at the end of selected section
}