import { create_tag, create_svg } from '../helper_functions/html_creator';
import ToDo from './ToDo';
import ToDoGrid from './ToDoGrid';

const NewToDo = (() => {
	const _delete_checkbox = (e) => {
		let parent = e.target.parentElement;
		while (parent.tagName !== 'DIV') {
			parent = parent.parentElement;
		}
		parent.remove();
	};

	const _create_checkbox_label = (name) => {
		const checkbox_label = create_tag('label', 'checkbox-label');

		checkbox_label.setAttribute('for', name);
		const check_svg = create_svg(
			'Check',
			'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z',
			'check-svg'
		);

		const delete_svg = create_svg(
			'Delete',
			'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z',
			'delete-checkbox'
		);
		delete_svg.setAttribute(`data-${name}`, name);
		delete_svg.addEventListener('click', (e) => {
			_delete_checkbox(e);
		});

		checkbox_label.appendChild(check_svg);

		// Return delete_svg since it needs to be appended last to be on the right
		// of the input box
		return { checkbox_label, delete_svg };
	};

	const _create_checkbox_input = (name) => {
		const checkbox_input = create_tag('input', 'checkbox-input');
		checkbox_input.setAttribute('type', 'text');
		checkbox_input.setAttribute('name', name);

		return checkbox_input;
	};

	const _create_new_checkbox = () => {
		const num_checkboxes = document.querySelectorAll('.checkbox').length;
		const checkbox_name = `checkbox${num_checkboxes + 1}`;

		const checkbox_div = create_tag('div', 'checkbox');

		const { checkbox_label, delete_svg } =
			_create_checkbox_label(checkbox_name);
		const checkbox_input = _create_checkbox_input(checkbox_name);

		checkbox_div.appendChild(checkbox_label);
		checkbox_div.appendChild(checkbox_input);
		checkbox_div.appendChild(delete_svg);

		return checkbox_div;
	};

	const _add_checkbox = () => {
		const checkbox_container = document.querySelector(
			'.checkbox-container'
		);
		const new_checkbox = _create_new_checkbox();
		checkbox_container.appendChild(new_checkbox);
	};

	const _clear_form = () => {
		const new_todo_form = document.querySelector('.new-todo-modal form');
		new_todo_form.reset();

		// Initial state of the form should have only 1 checkbox
		let checkboxes = document.querySelectorAll('.checkbox');
		for (let i = 1; i < checkboxes.length; i++) {
			checkboxes[i].remove();
		}
	};

	const _init_close_btn = () => {
		const close_btn = document.querySelector('button[value="cancel"]');
		close_btn.addEventListener('click', () => {
			_clear_form();
			document.querySelector('.new-todo-modal').close();
		});
	};

	const _init_create_btn = () => {
		const new_todo_form = document.querySelector('.new-todo-modal form');
		new_todo_form.addEventListener('submit', (e) => {
			e.preventDefault();
			_create_new_todo(e.target);
			_clear_form();
			document.querySelector('.new-todo-modal').close();
		});
	};

	const _create_new_todo = (form) => {
		const form_data = new FormData(form);
		let form_props = Object.fromEntries(form_data);
		console.log(form_props);
		const keys = Object.keys(form_props);
		keys.forEach((key) => {
			if (key.includes('checkbox')) {
				form_props[key] = {
					text: form_props[key],
					done: false,
				};
			}
		});
		form_props.finished = false;
		ToDoGrid.add(form_props);
	};

	const init = () => {
		const new_todo_btn = document.querySelector('.sidebar-new-todo');
		new_todo_btn.addEventListener('click', () => {
			document.querySelector('.new-todo-modal').showModal();
		});

		const add_checkbox_btn = document.querySelector('.add-checkbox-btn');
		add_checkbox_btn.addEventListener('click', () => {
			_add_checkbox();
		});

		_init_create_btn();
		_init_close_btn();
	};

	return { init };
})();

export default NewToDo;
