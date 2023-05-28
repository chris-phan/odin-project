/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/NewToDo.js":
/*!***********************************!*\
  !*** ./src/components/NewToDo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper_functions/html_creator */ \"./src/helper_functions/html_creator.js\");\n/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDo */ \"./src/components/ToDo.js\");\n/* harmony import */ var _ToDoGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDoGrid */ \"./src/components/ToDoGrid.js\");\n\r\n\r\n\r\n\r\nconst NewToDo = (() => {\r\n\tconst _delete_checkbox = (e) => {\r\n\t\tlet parent = e.target.parentElement;\r\n\t\twhile (parent.tagName !== 'DIV') {\r\n\t\t\tparent = parent.parentElement;\r\n\t\t}\r\n\t\tparent.remove();\r\n\t};\r\n\r\n\tconst _create_checkbox_label = (name) => {\r\n\t\tconst checkbox_label = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('label', 'checkbox-label');\r\n\r\n\t\tcheckbox_label.setAttribute('for', name);\r\n\t\tconst check_svg = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_svg)(\r\n\t\t\t'Check',\r\n\t\t\t'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z',\r\n\t\t\t'check-svg'\r\n\t\t);\r\n\r\n\t\tconst delete_svg = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_svg)(\r\n\t\t\t'Delete',\r\n\t\t\t'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z',\r\n\t\t\t'delete-checkbox'\r\n\t\t);\r\n\t\tdelete_svg.setAttribute(`data-${name}`, name);\r\n\t\tdelete_svg.addEventListener('click', (e) => {\r\n\t\t\t_delete_checkbox(e);\r\n\t\t});\r\n\r\n\t\tcheckbox_label.appendChild(check_svg);\r\n\r\n\t\t// Return delete_svg since it needs to be appended last to be on the right\r\n\t\t// of the input box\r\n\t\treturn { checkbox_label, delete_svg };\r\n\t};\r\n\r\n\tconst _create_checkbox_input = (name) => {\r\n\t\tconst checkbox_input = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('input', 'checkbox-input');\r\n\t\tcheckbox_input.setAttribute('type', 'text');\r\n\t\tcheckbox_input.setAttribute('name', name);\r\n\r\n\t\treturn checkbox_input;\r\n\t};\r\n\r\n\tconst _create_new_checkbox = () => {\r\n\t\tconst num_checkboxes = document.querySelectorAll('.checkbox').length;\r\n\t\tconst checkbox_name = `checkbox${num_checkboxes + 1}`;\r\n\r\n\t\tconst checkbox_div = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', 'checkbox');\r\n\r\n\t\tconst { checkbox_label, delete_svg } =\r\n\t\t\t_create_checkbox_label(checkbox_name);\r\n\t\tconst checkbox_input = _create_checkbox_input(checkbox_name);\r\n\r\n\t\tcheckbox_div.appendChild(checkbox_label);\r\n\t\tcheckbox_div.appendChild(checkbox_input);\r\n\t\tcheckbox_div.appendChild(delete_svg);\r\n\r\n\t\treturn checkbox_div;\r\n\t};\r\n\r\n\tconst _add_checkbox = () => {\r\n\t\tconst checkbox_container = document.querySelector(\r\n\t\t\t'.checkbox-container'\r\n\t\t);\r\n\t\tconst new_checkbox = _create_new_checkbox();\r\n\t\tcheckbox_container.appendChild(new_checkbox);\r\n\t};\r\n\r\n\tconst _clear_form = () => {\r\n\t\tconst new_todo_form = document.querySelector('.new-todo-modal form');\r\n\t\tnew_todo_form.reset();\r\n\r\n\t\t// Initial state of the form should have only 1 checkbox\r\n\t\tlet checkboxes = document.querySelectorAll('.checkbox');\r\n\t\tfor (let i = 1; i < checkboxes.length; i++) {\r\n\t\t\tcheckboxes[i].remove();\r\n\t\t}\r\n\t};\r\n\r\n\tconst _init_close_btn = () => {\r\n\t\tconst close_btn = document.querySelector('button[value=\"cancel\"]');\r\n\t\tclose_btn.addEventListener('click', () => {\r\n\t\t\t_clear_form();\r\n\t\t\tdocument.querySelector('.new-todo-modal').close();\r\n\t\t});\r\n\t};\r\n\r\n\tconst _init_create_btn = () => {\r\n\t\tconst new_todo_form = document.querySelector('.new-todo-modal form');\r\n\t\tnew_todo_form.addEventListener('submit', (e) => {\r\n\t\t\te.preventDefault();\r\n\t\t\t_create_new_todo(e.target);\r\n\t\t\t_clear_form();\r\n\t\t\tdocument.querySelector('.new-todo-modal').close();\r\n\t\t});\r\n\t};\r\n\r\n\tconst _create_new_todo = (form) => {\r\n\t\tconst form_data = new FormData(form);\r\n\t\tlet form_props = Object.fromEntries(form_data);\r\n\t\tconsole.log(form_props);\r\n\t\tconst keys = Object.keys(form_props);\r\n\t\tkeys.forEach((key) => {\r\n\t\t\tif (key.includes('checkbox')) {\r\n\t\t\t\tform_props[key] = {\r\n\t\t\t\t\ttext: form_props[key],\r\n\t\t\t\t\tdone: false,\r\n\t\t\t\t};\r\n\t\t\t}\r\n\t\t});\r\n\t\tform_props.finished = false;\r\n\t\t_ToDoGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"].add(form_props);\r\n\t};\r\n\r\n\tconst init = () => {\r\n\t\tconst new_todo_btn = document.querySelector('.sidebar-new-todo');\r\n\t\tnew_todo_btn.addEventListener('click', () => {\r\n\t\t\tdocument.querySelector('.new-todo-modal').showModal();\r\n\t\t});\r\n\r\n\t\tconst add_checkbox_btn = document.querySelector('.add-checkbox-btn');\r\n\t\tadd_checkbox_btn.addEventListener('click', () => {\r\n\t\t\t_add_checkbox();\r\n\t\t});\r\n\r\n\t\t_init_create_btn();\r\n\t\t_init_close_btn();\r\n\t};\r\n\r\n\treturn { init };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewToDo);\r\n\n\n//# sourceURL=webpack://11-odin-todo/./src/components/NewToDo.js?");

/***/ }),

/***/ "./src/components/ToDo.js":
/*!********************************!*\
  !*** ./src/components/ToDo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper_functions/html_creator */ \"./src/helper_functions/html_creator.js\");\n/* harmony import */ var _ToDoGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDoGrid */ \"./src/components/ToDoGrid.js\");\n\r\n\r\n\r\nconst ToDo = (props) => {\r\n\tconst _create_title = () => {\r\n\t\tconst title = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('h2', 'todo-title', props.title);\r\n\t\treturn title;\r\n\t};\r\n\r\n\tconst _create_date = () => {\r\n\t\tconst days_of_week = [\r\n\t\t\t'Sunday',\r\n\t\t\t'Monday',\r\n\t\t\t'Tuesday',\r\n\t\t\t'Wednesday',\r\n\t\t\t'Thursday',\r\n\t\t\t'Friday',\r\n\t\t\t'Saturday',\r\n\t\t];\r\n\t\tconst months_of_year = [\r\n\t\t\t'January',\r\n\t\t\t'February',\r\n\t\t\t'March',\r\n\t\t\t'April',\r\n\t\t\t'May',\r\n\t\t\t'June',\r\n\t\t\t'July',\r\n\t\t\t'August',\r\n\t\t\t'September',\r\n\t\t\t'October',\r\n\t\t\t'November',\r\n\t\t\t'December',\r\n\t\t];\r\n\t\tconst date_obj = new Date(props.date);\r\n\t\tconst date_str = `${days_of_week[date_obj.getUTCDay()]} ${\r\n\t\t\tmonths_of_year[date_obj.getUTCMonth()]\r\n\t\t} ${date_obj.getUTCDate()}, ${date_obj.getUTCFullYear()}`;\r\n\r\n\t\tconst date = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('p', 'todo-date', date_str);\r\n\t\treturn date;\r\n\t};\r\n\r\n\tconst _create_description = () => {\r\n\t\tif (props.description === undefined) {\r\n\t\t\treturn null;\r\n\t\t}\r\n\r\n\t\tconst description = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)(\r\n\t\t\t'p',\r\n\t\t\t'todo-description',\r\n\t\t\tprops.description\r\n\t\t);\r\n\t\treturn description;\r\n\t};\r\n\r\n\tconst _create_notes = () => {\r\n\t\tif (props.notes === undefined) {\r\n\t\t\treturn null;\r\n\t\t}\r\n\r\n\t\tconst notes = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('p', 'todo-notes', props.notes);\r\n\t\treturn notes;\r\n\t};\r\n\r\n\tconst _create_checkbox = (checkbox_key) => {\r\n\t\tconst checkbox_div = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', 'todo-checkbox-container');\r\n\t\tconst check_svg = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_svg)(\r\n\t\t\t'Check',\r\n\t\t\t'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z',\r\n\t\t\t'todo-check-svg'\r\n\t\t);\r\n\t\tconst checkbox_task = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)(\r\n\t\t\t'p',\r\n\t\t\t'todo-checkbox-task',\r\n\t\t\tprops[checkbox_key].text\r\n\t\t);\r\n\r\n\t\tif (props[checkbox_key].done) {\r\n\t\t\tcheckbox_task.classList.add('checkbox-task-done');\r\n\t\t}\r\n\r\n\t\tcheck_svg.addEventListener('click', () => {\r\n\t\t\tcheckbox_task.classList.toggle('checkbox-task-done');\r\n\t\t\tprops[checkbox_key].done = !props[checkbox_key].done;\r\n\t\t\t_ToDoGrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"].save_todo(props);\r\n\t\t\t_ToDoGrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\r\n\t\t});\r\n\r\n\t\tcheckbox_div.appendChild(check_svg);\r\n\t\tcheckbox_div.appendChild(checkbox_task);\r\n\r\n\t\treturn checkbox_div;\r\n\t};\r\n\r\n\tconst _create_checkboxes = () => {\r\n\t\tconst all_keys = Object.keys(props);\r\n\t\tconst all_relevant_checkbox_keys = all_keys.filter((key) => {\r\n\t\t\tif (key.includes('checkbox') && props[key].text !== '') {\r\n\t\t\t\treturn key;\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tif (all_relevant_checkbox_keys.length === 0) {\r\n\t\t\treturn null;\r\n\t\t}\r\n\r\n\t\tconst all_checkboxes = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', 'todo-checkboxes');\r\n\t\tall_relevant_checkbox_keys.forEach((key) => {\r\n\t\t\tconst new_checkbox = _create_checkbox(key);\r\n\r\n\t\t\tall_checkboxes.appendChild(new_checkbox);\r\n\t\t});\r\n\r\n\t\treturn all_checkboxes;\r\n\t};\r\n\r\n\tconst _create_priority = (todo_card) => {\r\n\t\tconst priority_class = `priority-${props.priority}`;\r\n\r\n\t\tconst priority = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', 'todo-priority');\r\n\t\tconst priority_btn = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('button', 'change-priority');\r\n\t\tpriority.appendChild(priority_btn);\r\n\r\n\t\t// String functions capitalize first letter of priority\r\n\t\tpriority_btn.textContent = `Priority: ${props.priority\r\n\t\t\t.charAt(0)\r\n\t\t\t.toUpperCase()}${props.priority.slice(1)}`;\r\n\r\n\t\t// Cycle through priorities\r\n\t\tpriority_btn.addEventListener('click', (e) => {\r\n\t\t\tif (e.target.textContent.includes('Low')) {\r\n\t\t\t\ttodo_card.classList.remove('priority-low');\r\n\t\t\t\ttodo_card.classList.add('priority-medium');\r\n\r\n\t\t\t\te.target.textContent = 'Priority: Medium';\r\n\t\t\t\tprops.priority = 'medium';\r\n\t\t\t} else if (e.target.textContent.includes('Medium')) {\r\n\t\t\t\ttodo_card.classList.remove('priority-medium');\r\n\t\t\t\ttodo_card.classList.add('priority-high');\r\n\r\n\t\t\t\te.target.textContent = 'Priority: High';\r\n\t\t\t\tprops.priority = 'high';\r\n\t\t\t} else if (e.target.textContent.includes('High')) {\r\n\t\t\t\ttodo_card.classList.remove('priority-high');\r\n\t\t\t\ttodo_card.classList.add('priority-low');\r\n\r\n\t\t\t\te.target.textContent = 'Priority: Low';\r\n\t\t\t\tprops.priority = 'low';\r\n\t\t\t}\r\n\t\t\t_ToDoGrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"].save_todo(props);\r\n\t\t\t_ToDoGrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\r\n\t\t});\r\n\r\n\t\ttodo_card.classList.add(priority_class);\r\n\r\n\t\treturn priority;\r\n\t};\r\n\r\n\tconst _create_done_and_delete = (todo_card) => {\r\n\t\tconst done_and_delete = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', 'done-and-delete');\r\n\t\tconst done_svg = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_svg)(\r\n\t\t\t'Mark as done',\r\n\t\t\t'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z',\r\n\t\t\t'todo-done'\r\n\t\t);\r\n\r\n\t\tdone_svg.addEventListener('click', () => {\r\n\t\t\ttodo_card.classList.toggle('todo-finished');\r\n\t\t\tprops.finished = !props.finished;\r\n\t\t\t_ToDoGrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"].save_todo(props);\r\n\t\t\t_ToDoGrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\r\n\t\t});\r\n\r\n\t\tconst delete_svg = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_svg)(\r\n\t\t\t'Delete ToDo',\r\n\t\t\t'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z',\r\n\t\t\t'todo-delete'\r\n\t\t);\r\n\r\n\t\tdelete_svg.addEventListener('click', () => {\r\n\t\t\ttodo_card.remove();\r\n\t\t\t_ToDoGrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove_todo(props);\r\n\t\t\t_ToDoGrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\r\n\t\t});\r\n\r\n\t\tdone_and_delete.appendChild(done_svg);\r\n\t\tdone_and_delete.appendChild(delete_svg);\r\n\r\n\t\treturn done_and_delete;\r\n\t};\r\n\r\n\tconst render = () => {\r\n\t\tconst new_todo = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', 'todo');\r\n\t\tconst done_and_delete = _create_done_and_delete(new_todo);\r\n\t\tconst title = _create_title();\r\n\t\tconst date = _create_date();\r\n\t\tconst description = _create_description();\r\n\t\tconst notes = _create_notes();\r\n\t\tconst checkboxes = _create_checkboxes();\r\n\t\tconst priority = _create_priority(new_todo);\r\n\r\n\t\tconst todo_components = [\r\n\t\t\tdone_and_delete,\r\n\t\t\ttitle,\r\n\t\t\tdate,\r\n\t\t\tdescription,\r\n\t\t\tnotes,\r\n\t\t\tcheckboxes,\r\n\t\t\tpriority,\r\n\t\t];\r\n\r\n\t\ttodo_components.forEach((component) => {\r\n\t\t\tif (component !== null) {\r\n\t\t\t\tnew_todo.appendChild(component);\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tif (props.finished) {\r\n\t\t\tdocument\r\n\t\t\t\t.querySelector('.todos-grid-finished')\r\n\t\t\t\t.appendChild(new_todo);\r\n\t\t} else {\r\n\t\t\tdocument.querySelector('.todos-grid').appendChild(new_todo);\r\n\t\t}\r\n\t};\r\n\r\n\treturn { render };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDo);\r\n\n\n//# sourceURL=webpack://11-odin-todo/./src/components/ToDo.js?");

/***/ }),

/***/ "./src/components/ToDoGrid.js":
/*!************************************!*\
  !*** ./src/components/ToDoGrid.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo */ \"./src/components/ToDo.js\");\n\r\n\r\nconst ToDoGrid = (() => {\r\n\tconst _get_todos = () => {\r\n\t\tconst all_todos = [];\r\n\t\tconst keys = Object.keys(localStorage);\r\n\t\tkeys.forEach((key) => {\r\n\t\t\tconst item = JSON.parse(localStorage.getItem(key));\r\n\t\t\tall_todos.push(item);\r\n\t\t});\r\n\t\treturn all_todos;\r\n\t};\r\n\r\n\tconst save_todo = (todo_props) => {\r\n\t\tlocalStorage.setItem(todo_props.title, JSON.stringify(todo_props));\r\n\t};\r\n\r\n\tconst remove_todo = (todo_props) => {\r\n\t\tlocalStorage.removeItem(todo_props.title);\r\n\t};\r\n\r\n\tconst add = (todo_props) => {\r\n\t\tsave_todo(todo_props);\r\n\t\trender();\r\n\t};\r\n\r\n\tconst _sort_by_date = (priority_buckets) => {\r\n\t\tconst keys = Object.keys(priority_buckets);\r\n\t\tkeys.forEach((key) => {\r\n\t\t\tpriority_buckets[key].sort((a, b) => {\r\n\t\t\t\treturn new Date(a.date) - new Date(b.date);\r\n\t\t\t});\r\n\t\t});\r\n\t\treturn priority_buckets;\r\n\t};\r\n\r\n\tconst _get_priority = (all_todos) => {\r\n\t\tconst priority_buckets = {\r\n\t\t\tlow: [],\r\n\t\t\tmedium: [],\r\n\t\t\thigh: [],\r\n\t\t};\r\n\r\n\t\tall_todos.forEach((todo) => {\r\n\t\t\tpriority_buckets[todo.priority].push(todo);\r\n\t\t});\r\n\r\n\t\treturn _sort_by_date(priority_buckets);\r\n\t};\r\n\r\n\tconst _split_todos_by_finished = (all_todos) => {\r\n\t\tconst res = {\r\n\t\t\tfinished: [],\r\n\t\t\tnot_finished: [],\r\n\t\t};\r\n\t\tconst keys = Object.keys(all_todos);\r\n\t\tkeys.forEach((key) => {\r\n\t\t\tif (all_todos[key].finished) {\r\n\t\t\t\tres.finished.push(all_todos[key]);\r\n\t\t\t} else {\r\n\t\t\t\tres.not_finished.push(all_todos[key]);\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\treturn res;\r\n\t};\r\n\r\n\tconst _render_by_priority = (priorities) => {\r\n\t\tpriorities.high.forEach((todo) => {\r\n\t\t\t(0,_ToDo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todo).render();\r\n\t\t});\r\n\t\tpriorities.medium.forEach((todo) => {\r\n\t\t\t(0,_ToDo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todo).render();\r\n\t\t});\r\n\t\tpriorities.low.forEach((todo) => {\r\n\t\t\t(0,_ToDo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todo).render();\r\n\t\t});\r\n\t};\r\n\r\n\tconst _clear_todos_grid = () => {\r\n\t\tdocument.querySelector('.todos-grid').innerHTML = '';\r\n\t\tdocument.querySelector('.todos-grid-finished').innerHTML = '';\r\n\t};\r\n\r\n\tconst _render_finished_todos = (todos) => {\r\n\t\ttodos.forEach((todo) => {\r\n\t\t\t(0,_ToDo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todo).render();\r\n\t\t});\r\n\t};\r\n\r\n\tconst render = () => {\r\n\t\t_clear_todos_grid();\r\n\r\n\t\tconst all_todos = _get_todos();\r\n\t\tconst split_todos = _split_todos_by_finished(all_todos);\r\n\r\n\t\tconst priority_buckets = _get_priority(split_todos.not_finished);\r\n\t\tconst sorted_priorities = _sort_by_date(priority_buckets);\r\n\t\t_render_by_priority(sorted_priorities);\r\n\r\n\t\t_render_finished_todos(split_todos.finished);\r\n\t};\r\n\r\n\treturn { save_todo, remove_todo, add, render };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoGrid);\r\n\n\n//# sourceURL=webpack://11-odin-todo/./src/components/ToDoGrid.js?");

/***/ }),

/***/ "./src/helper_functions/html_creator.js":
/*!**********************************************!*\
  !*** ./src/helper_functions/html_creator.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   create_svg: () => (/* binding */ create_svg),\n/* harmony export */   create_tag: () => (/* binding */ create_tag)\n/* harmony export */ });\nfunction create_tag(tag_type, class_name, content) {\r\n\tconst new_html_tag = document.createElement(tag_type);\r\n\tnew_html_tag.classList.add(class_name);\r\n\r\n\tif (typeof content !== undefined) {\r\n\t\tnew_html_tag.textContent = content;\r\n\t}\r\n\r\n\treturn new_html_tag;\r\n}\r\n\r\nfunction create_svg(title_str, path_str, class_name) {\r\n\tconst svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\r\n\tconst title = document.createElement('title');\r\n\tconst path = document.createElementNS('http://www.w3.org/2000/svg', 'path');\r\n\r\n\tsvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');\r\n\tsvg.setAttribute('viewBox', '0 0 24 24');\r\n\r\n\ttitle.textContent = title_str;\r\n\tpath.setAttribute('d', path_str);\r\n\r\n\tsvg.appendChild(title);\r\n\tsvg.appendChild(path);\r\n\r\n\tsvg.classList.add(class_name);\r\n\r\n\treturn svg;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://11-odin-todo/./src/helper_functions/html_creator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper_functions/html_creator */ \"./src/helper_functions/html_creator.js\");\n/* harmony import */ var _components_NewToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/NewToDo */ \"./src/components/NewToDo.js\");\n/* harmony import */ var _components_ToDoGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ToDoGrid */ \"./src/components/ToDoGrid.js\");\n\r\n\r\n\r\n\r\nfunction main() {\r\n\t_components_NewToDo__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\r\n\t_components_ToDoGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render();\r\n}\r\n\r\nwindow.addEventListener('load', () => {\r\n\tmain();\r\n});\r\n\n\n//# sourceURL=webpack://11-odin-todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;