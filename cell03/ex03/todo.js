newBtn.addEventListener('click', function() {
	let list = prompt('Input new list : ', '');
	list = list.trim();
	if (list != '') {
		const id = todoitem.length > 0 ? todoitem[todoitem.length - 1].id + 1 : 1;
		newList(id, list);
		todoitem.push({
			id,
			title: list
		});
		localStorage.setItem('list', JSON.stringify(todoitem));
	}
});


const newList = (id, msg) => {
	const checkdiv = document.createElement('div');	
	const text = document.createTextNode(msg);
	checkdiv.appendChild(text);
	checkdiv.setAttribute('id', id);
	checkdiv.classList.add('list', 'rounded', 'shadow');
	checkdiv.addEventListener('click', function() {
		const check = confirm('Do you want to delete : ' + this.innerHTML);
		if (check === true) {
			let count = todoitem.filter(list => list.id != this.id);
			this.remove();
			localStorage.setItem('list', JSON.stringify(count));
		}
	});
	ft_list.insertBefore(checkdiv, ft_list.firstChild);
}

if (!localStorage.getItem('list')) {
	localStorage.setItem('list', JSON.stringify([]));
}

let todoitem = localStorage.getItem('list');
todoitem = JSON.parse(todoitem);

for (const data of todoitem) {
	newList(data.id, data.title);
}

