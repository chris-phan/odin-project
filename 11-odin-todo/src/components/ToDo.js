import { create_tag, create_svg } from '../helper_functions/html_creator';
import ToDoGrid from './ToDoGrid';

const ToDo = (props) => {
	const _create_title = () => {
		const title = create_tag('h2', 'todo-title', props.title);
		return title;
	};

	const _create_date = () => {
		const days_of_week = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];
		const months_of_year = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		const date_obj = new Date(props.date);
		const date_str = `${days_of_week[date_obj.getUTCDay()]} ${
			months_of_year[date_obj.getUTCMonth()]
		} ${date_obj.getUTCDate()}, ${date_obj.getUTCFullYear()}`;

		const date = create_tag('p', 'todo-date', date_str);
		return date;
	};

	const _create_description = () => {
		if (props.description === undefined) {
			return null;
		}

		const description = create_tag(
			'p',
			'todo-description',
			props.description
		);
		return description;
	};

	const _create_notes = () => {
		if (props.notes === undefined) {
			return null;
		}

		const notes = create_tag('p', 'todo-notes', props.notes);
		return notes;
	};

	const _create_checkbox = (checkbox_key) => {
		const checkbox_div = create_tag('div', 'todo-checkbox-container');
		const check_svg = create_svg(
			'Check',
			'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z',
			'todo-check-svg'
		);
		const checkbox_task = create_tag(
			'p',
			'todo-checkbox-task',
			props[checkbox_key].text
		);

		if (props[checkbox_key].done) {
			checkbox_task.classList.add('checkbox-task-done');
		}

		check_svg.addEventListener('click', () => {
			checkbox_task.classList.toggle('checkbox-task-done');
			props[checkbox_key].done = !props[checkbox_key].done;
			ToDoGrid.save_todo(props);
			ToDoGrid.render();
		});

		checkbox_div.appendChild(check_svg);
		checkbox_div.appendChild(checkbox_task);

		return checkbox_div;
	};

	const _create_checkboxes = () => {
		const all_keys = Object.keys(props);
		const all_relevant_checkbox_keys = all_keys.filter((key) => {
			if (key.includes('checkbox') && props[key].text !== '') {
				return key;
			}
		});

		if (all_relevant_checkbox_keys.length === 0) {
			return null;
		}

		const all_checkboxes = create_tag('div', 'todo-checkboxes');
		all_relevant_checkbox_keys.forEach((key) => {
			const new_checkbox = _create_checkbox(key);

			all_checkboxes.appendChild(new_checkbox);
		});

		return all_checkboxes;
	};

	const _create_priority = (todo_card) => {
		const priority_class = `priority-${props.priority}`;

		const priority = create_tag('div', 'todo-priority');
		const priority_btn = create_tag('button', 'change-priority');
		priority.appendChild(priority_btn);

		// String functions capitalize first letter of priority
		priority_btn.textContent = `Priority: ${props.priority
			.charAt(0)
			.toUpperCase()}${props.priority.slice(1)}`;

		// Cycle through priorities
		priority_btn.addEventListener('click', (e) => {
			if (e.target.textContent.includes('Low')) {
				todo_card.classList.remove('priority-low');
				todo_card.classList.add('priority-medium');

				e.target.textContent = 'Priority: Medium';
				props.priority = 'medium';
			} else if (e.target.textContent.includes('Medium')) {
				todo_card.classList.remove('priority-medium');
				todo_card.classList.add('priority-high');

				e.target.textContent = 'Priority: High';
				props.priority = 'high';
			} else if (e.target.textContent.includes('High')) {
				todo_card.classList.remove('priority-high');
				todo_card.classList.add('priority-low');

				e.target.textContent = 'Priority: Low';
				props.priority = 'low';
			}
			ToDoGrid.save_todo(props);
			ToDoGrid.render();
		});

		todo_card.classList.add(priority_class);

		return priority;
	};

	const _create_done_and_delete = (todo_card) => {
		const done_and_delete = create_tag('div', 'done-and-delete');
		const done_svg = create_svg(
			'Mark as done',
			'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z',
			'todo-done'
		);

		done_svg.addEventListener('click', () => {
			todo_card.classList.toggle('todo-finished');
			props.finished = !props.finished;
			ToDoGrid.save_todo(props);
			ToDoGrid.render();
		});

		const delete_svg = create_svg(
			'Delete ToDo',
			'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z',
			'todo-delete'
		);

		delete_svg.addEventListener('click', () => {
			todo_card.remove();
			ToDoGrid.remove_todo(props);
			ToDoGrid.render();
		});

		done_and_delete.appendChild(done_svg);
		done_and_delete.appendChild(delete_svg);

		return done_and_delete;
	};

	const render = () => {
		const new_todo = create_tag('div', 'todo');
		const done_and_delete = _create_done_and_delete(new_todo);
		const title = _create_title();
		const date = _create_date();
		const description = _create_description();
		const notes = _create_notes();
		const checkboxes = _create_checkboxes();
		const priority = _create_priority(new_todo);

		const todo_components = [
			done_and_delete,
			title,
			date,
			description,
			notes,
			checkboxes,
			priority,
		];

		todo_components.forEach((component) => {
			if (component !== null) {
				new_todo.appendChild(component);
			}
		});

		if (props.finished) {
			document
				.querySelector('.todos-grid-finished')
				.appendChild(new_todo);
		} else {
			document.querySelector('.todos-grid').appendChild(new_todo);
		}
	};

	return { render };
};

export default ToDo;
