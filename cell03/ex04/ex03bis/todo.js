$(function() {
	const newList = (id, msg) => {
		const div = $('<div></div>').text(msg);
		div.attr('id', id);
		div.addClass('list', 'rounded', 'shadow');
		div.click(function() {
			const cf = confirm('Do you want to delete : ' + this.innerHTML);
			if (cf == true) {
				const remain = datas.filter(list => list.id != this.id);
				this.remove();
				localStorage.setItem('list', JSON.stringify(remain));
			}
		});
		$('#ft_list').prepend(div);
	};

	if (!localStorage.getItem('list')) {
		localStorage.setItem('list', JSON.stringify([]));
	}

	let datas = localStorage.getItem('list');
	datas = JSON.parse(datas);
	
	for (const data of datas) {
		newList(data.id, data.title);
	}	

	$('#newBtn').click(function() {
		let list = prompt('Input new list : ', '');
		list = list.trim();	
		if (list != '') {
			const id = datas.length > 0 ? datas[datas.length - 1].id + 1 : 1;
			newList(id, list);
			datas.push({
				id,
				title: list
			});
			localStorage.setItem('list', JSON.stringify(datas));
		}
	});
});
