const inputValue = document.getElementById('inputText')
const sumbitBtn = document.getElementById('sumbitBtn')
const listForm = document.getElementById('listForm')

const ul = document.createElement('ul')
listForm.append(ul)

function itemList() {
	if (inputValue.value === '') {
		alert('Nazwa zadania nie może być pusta.')
	} else {
		createTodo()
		inputValue.value = ''
	}
}

function createTodo() {
	// Dodaje li
	const li = document.createElement('li')
	ul.append(li)

	//Dodaje label
	const label = document.createElement('label')
	label.textContent = inputValue.value

	//Dodaje przycisk "Edytuj"
	const btn1 = document.createElement('button')
	btn1.setAttribute('type', 'button')
	btn1.textContent = 'Edytuj'

	//Dodaje przycisk "Usuń"
	const btn2 = document.createElement('button')
	btn2.setAttribute('type', 'button')
	btn2.textContent = 'Usuń'
	li.append(label, btn1, btn2)

	//Usuwanie elementu li z listy
	btn2.addEventListener('click', () => {
		li.remove()
	})

	//Edycja zadania To-Do
	const editBtn = () => {
		if (btn1.textContent === 'Edytuj') {
			const input = document.createElement('input')
			input.setAttribute('type', 'text')
			input.value = label.textContent
			li.insertBefore(input, label)
			li.removeChild(label)
			btn1.textContent = 'Zatwierdź zmiany'
		} else {
			const newInput = li.querySelector('input')
			if (newInput.value.trim() === '') {
				alert('Nazwa zadania nie może być pusta.')
			} else {
				label.textContent = newInput.value
				li.insertBefore(label, newInput)
				li.removeChild(newInput)
				btn1.textContent = 'Edytuj'
			}
		}
	}
	btn1.addEventListener('click', editBtn)
}

sumbitBtn.addEventListener('click', itemList)
