// Display items on UI

	function getInputValue() {
	var inputs = document.getElementById("inp").value 
									
	document.querySelector("input")
	.addEventListener('change', (e) => {
	console.log(e.currentTarget.value);
	 });
		};


// Insert alert

    add.onclick = function() {
	var add = document.querySelector('#add')
    var a = listItem.value
		if (a == ''){
		alert ("Insert something!") }
	};


// Get form, item, and list

var addToList = document.querySelector('.input');
var listItem = document.querySelector('#inp');
var list = document.querySelector('#to_do_list');

addToList.addEventListener('submit', function (event) {

	// Don't submit the form
	event.preventDefault();

	// Ignore it if the list item is empty
	if (listItem.value.length < 1) return;

	// Add item to list
	list.innerHTML += '<li>' + listItem.value + '</li>';

	// Clear input
	listItem.value = '';

}, false);


// Empty list

function empty() {
	list.innerHTML = '';
}

// Mark completed

list.addEventListener('dblclick', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// Clear completed

function clearCompletedToDoItems() {
    var completedItems = list.getElementsByClassName("checked");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
};

// Motivate
 
var motivate = document.querySelector('#mot')

motivate.onclick = function (){
	alert ("YOU'RE DOING GREAT KEEP IT UP!")
};
