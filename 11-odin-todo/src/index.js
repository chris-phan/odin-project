import { create_svg } from './helper_functions/html_creator';
import NewToDo from './components/NewToDo';
import ToDoGrid from './components/ToDoGrid';

function main() {
	NewToDo.init();
	ToDoGrid.render();
}

window.addEventListener('load', () => {
	main();
});
