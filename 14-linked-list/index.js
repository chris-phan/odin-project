const Node = (val) => {
	let next = null;

	const set_val = (new_val) => {
		val = new_val;
	};

	const get_val = () => {
		return val;
	};

	const set_next = (next_node) => {
		next = next_node;
	};
	const get_next = () => {
		return next;
	};

	return { set_val, get_val, set_next, get_next };
};

// Singly linked list
const LinkedList = () => {
	let cur_size = 0;
	let head_node = null;
	let tail_node = null;

	const append = (val) => {
		const new_node = Node(val);
		if (cur_size === 0) {
			head_node = new_node;
			tail_node = head_node;
		} else {
			tail_node.set_next(new_node);
			tail_node = new_node;
		}
		cur_size++;
	};

	const prepend = (val) => {
		const new_node = Node(val);
		if (cur_size === 0) {
			head_node = new_node;
			tail_node = head_node;
		} else {
			new_node.set_next(head_node);
			head_node = new_node;
		}
		cur_size++;
	};

	const insert_at = (val, index) => {
		if (index > cur_size || index < 0) {
			return false;
		}

		if (index === 0) {
			prepend(val);
		} else if (index === cur_size) {
			append(val);
		} else {
			let node_before = at(index - 1);
			let node_after = node_before.get_next();
			const new_node = Node(val);
			node_before.set_next(new_node);
			new_node.set_next(node_after);
			cur_size++;
		}

		return true;
	};

	const pop = () => {
		return remove_at(cur_size - 1);
	};

	const remove_at = (index) => {
		if (index >= cur_size || index < 0) {
			return false;
		}

		if (index === 0) {
			head_node = head_node.get_next();
		} else {
			let node_before = at(index - 1);
			let new_next = node_before.get_next().get_next();
			node_before.set_next(new_next);
		}

		cur_size--;
		return true;
	};

	const size = () => {
		return cur_size;
	};

	const head = () => {
		return head_node;
	};

	const tail = () => {
		return tail_node;
	};

	const at = (index) => {
		if (index >= cur_size || index < 0) {
			return false;
		}

		let cur_node = head_node;
		for (let i = 0; i < index; i++) {
			cur_node = cur_node.get_next();
		}
		return cur_node;
	};

	const contains = (val) => {
		return find(val) !== null;
	};

	const find = (val) => {
		let cur_node = head_node;
		for (let i = 0; i < cur_size; i++) {
			if (cur_node.get_val() === val) {
				return i;
			}
			cur_node = cur_node.get_next();
		}
		return null;
	};

	const to_string = () => {
		let res = '';
		let cur_node = head_node;
		for (let i = 0; i < cur_size; i++) {
			res += `( ${cur_node.get_val()} ) -> `;
			cur_node = cur_node.get_next();
		}

		res += 'null';
		return res;
	};

	const clear = () => {
		head_node = null;
		tail_node = null;
		cur_size = 0;
	};

	return {
		append,
		prepend,
		insert_at,
		pop,
		remove_at,
		size,
		head,
		tail,
		at,
		contains,
		find,
		to_string,
		clear,
	};
};

const display_linked_list = (ll) => {
	const display = document.querySelector('.linked-list-display');
	display.textContent = ll.to_string();
};

const init_linked_list_ui = (linked_list) => {
	const append = document.querySelector('.append');
	append.addEventListener('click', () => {
		const input = prompt('Enter a value');
		linked_list.append(input);
		display_linked_list(linked_list);
	});

	const prepend = document.querySelector('.prepend');
	prepend.addEventListener('click', () => {
		const input = prompt('Enter a value');
		linked_list.prepend(input);
		display_linked_list(linked_list);
	});

	const insert_at = document.querySelector('.insert-at');
	insert_at.addEventListener('click', () => {
		const input = prompt(
			'Enter a value and an index separated by a space, e.g. 10 2'
		);
		const separated_inputs = input.split(' ');
		if (isNaN(separated_inputs[1])) {
			return;
		}

		linked_list.insert_at(separated_inputs[0], Number(separated_inputs[1]));
		display_linked_list(linked_list);
	});

	const pop = document.querySelector('.pop');
	pop.addEventListener('click', () => {
		linked_list.pop();
		display_linked_list(linked_list);
	});

	const remove_at = document.querySelector('.remove-at');
	remove_at.addEventListener('click', () => {
		const input = prompt('Enter an index');
		if (isNaN(input)) {
			return;
		}

		linked_list.remove_at(Number(input));
		display_linked_list(linked_list);
	});

	const size = document.querySelector('.size');
	size.addEventListener('click', () => {
		alert(`Size: ${linked_list.size()}`);
	});

	const head = document.querySelector('.head');
	head.addEventListener('click', () => {
		const head_node = linked_list.head();
		let alert_str = 'Head: ';
		if (head_node === null) {
			alert_str += 'null';
		} else {
			alert_str += head_node.get_val();
		}

		alert(alert_str);
	});

	const tail = document.querySelector('.tail');
	tail.addEventListener('click', () => {
		const tail_node = linked_list.tail();
		let alert_str = 'Tail: ';
		if (tail_node === null) {
			alert_str += 'null';
		} else {
			alert_str += tail_node.get_val();
		}

		alert(alert_str);
	});

	const at = document.querySelector('.at');
	at.addEventListener('click', () => {
		const input = prompt('Enter an index');
		if (isNaN(input)) {
			return;
		}

		let node = linked_list.at(Number(input));
		if (!node) {
			return;
		}

		alert(`Node at index ${input}: ${node.get_val()}`);
	});

	const contains = document.querySelector('.contains');
	contains.addEventListener('click', () => {
		const input = prompt('Enter a value');
		let alert_str = '';
		if (linked_list.contains(input)) {
			alert_str = `${input} is in the linked list`;
		} else {
			alert_str = `${input} is NOT in the linked list`;
		}

		alert(alert_str);
	});

	const find = document.querySelector('.find');
	find.addEventListener('click', () => {
		const input = prompt('Enter a value');
		let alert_str = '';
		const index = linked_list.find(input);
		if (linked_list.find(input) === null) {
			alert_str = `${input} is NOT in the linked list`;
		} else {
			alert_str = `${input} is at index ${index}`;
		}

		alert(alert_str);
	});

	const clear = document.querySelector('.clear');
	clear.addEventListener('click', () => {
		linked_list.clear();
		display_linked_list(linked_list);
	});
};

function main() {
	const ll = LinkedList();
	init_linked_list_ui(ll);
}

window.addEventListener('load', main);
