import ToDo from './ToDo';

const ToDoGrid = (() => {
	const _get_todos = () => {
		const all_todos = [];
		const keys = Object.keys(localStorage);
		keys.forEach((key) => {
			const item = JSON.parse(localStorage.getItem(key));
			all_todos.push(item);
		});
		return all_todos;
	};

	const save_todo = (todo_props) => {
		localStorage.setItem(todo_props.title, JSON.stringify(todo_props));
	};

	const remove_todo = (todo_props) => {
		localStorage.removeItem(todo_props.title);
	};

	const add = (todo_props) => {
		save_todo(todo_props);
		render();
	};

	const _sort_by_date = (priority_buckets) => {
		const keys = Object.keys(priority_buckets);
		keys.forEach((key) => {
			priority_buckets[key].sort((a, b) => {
				return new Date(a.date) - new Date(b.date);
			});
		});
		return priority_buckets;
	};

	const _get_priority = (all_todos) => {
		const priority_buckets = {
			low: [],
			medium: [],
			high: [],
		};

		all_todos.forEach((todo) => {
			priority_buckets[todo.priority].push(todo);
		});

		return _sort_by_date(priority_buckets);
	};

	const _split_todos_by_finished = (all_todos) => {
		const res = {
			finished: [],
			not_finished: [],
		};
		const keys = Object.keys(all_todos);
		keys.forEach((key) => {
			if (all_todos[key].finished) {
				res.finished.push(all_todos[key]);
			} else {
				res.not_finished.push(all_todos[key]);
			}
		});

		return res;
	};

	const _render_by_priority = (priorities) => {
		priorities.high.forEach((todo) => {
			ToDo(todo).render();
		});
		priorities.medium.forEach((todo) => {
			ToDo(todo).render();
		});
		priorities.low.forEach((todo) => {
			ToDo(todo).render();
		});
	};

	const _clear_todos_grid = () => {
		document.querySelector('.todos-grid').innerHTML = '';
		document.querySelector('.todos-grid-finished').innerHTML = '';
	};

	const _render_finished_todos = (todos) => {
		todos.forEach((todo) => {
			ToDo(todo).render();
		});
	};

	const render = () => {
		_clear_todos_grid();

		const all_todos = _get_todos();
		const split_todos = _split_todos_by_finished(all_todos);

		const priority_buckets = _get_priority(split_todos.not_finished);
		const sorted_priorities = _sort_by_date(priority_buckets);
		_render_by_priority(sorted_priorities);

		_render_finished_todos(split_todos.finished);
	};

	return { save_todo, remove_todo, add, render };
})();

export default ToDoGrid;
