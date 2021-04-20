const form = document.querySelector("#form");
const inputField = document.querySelector('#input');
const list = document.querySelector("#list")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log(inputField.value);
	addToList(inputField.value);
})

function addToList () {
	let id = Math.floor(Math.random()*100)
	let li = document.createElement('li');
  li.setAttribute('data-id', id)
  
  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  
  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'delete';
  li.append(checkbox, inputField.value, deleteButton);

  inputField.value = ''; // clear the input field after item has been added.
  list.append(li);
}

  list.addEventListener("click", (event) => {
    if(event.target.tagName ==='BUTTON' && event.target.parentNode['data-id']) {
			const parent = event.target.parentNode
  		list.removeChild(parent);
		}
  })
