/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Returns the first @length_of_seq Fibonacci numbers iteratively\r\nconst fibs = (length_of_seq) => {\r\n\tif (length_of_seq <= 0) {\r\n\t\treturn [];\r\n\t}\r\n\r\n\tlet res = [0];\r\n\tfor (let i = 1; i < length_of_seq; i++) {\r\n\t\tlet next_fib_num;\r\n\t\tif (res.length < 2) {\r\n\t\t\tnext_fib_num = 1;\r\n\t\t} else {\r\n\t\t\tnext_fib_num = res[res.length - 1] + res[res.length - 2];\r\n\t\t}\r\n\t\tres.push(next_fib_num);\r\n\t}\r\n\treturn res;\r\n};\r\n\r\n// Returns the first @length_of_seq Fibonacci numbers recursively\r\nconst fib_rec = (length_of_seq) => {\r\n\tif (length_of_seq <= 0) {\r\n\t\treturn [];\r\n\t}\r\n\r\n\tlet res = [];\r\n\tconst fib_helper = (depth, prev, curr) => {\r\n\t\tif (depth === length_of_seq) {\r\n\t\t\treturn curr;\r\n\t\t}\r\n\t\tres.push(prev);\r\n\t\tfib_helper(depth + 1, curr, prev + curr);\r\n\t};\r\n\tfib_helper(0, 0, 1);\r\n\r\n\treturn res;\r\n};\r\n\r\nconst merge = (list1, list2) => {\r\n\tlet res = [];\r\n\r\n\tlet i = 0;\r\n\tlet j = 0;\r\n\r\n\t// Keep merging until one list is completely merged\r\n\twhile (i < list1.length && j < list2.length) {\r\n\t\tif (list1[i] < list2[j]) {\r\n\t\t\tres.push(list1[i]);\r\n\t\t\ti++;\r\n\t\t} else {\r\n\t\t\tres.push(list2[j]);\r\n\t\t\tj++;\r\n\t\t}\r\n\t}\r\n\r\n\t// Add leftovers from remaining list if there are leftovers\r\n\tif (i < list1.length) {\r\n\t\tlist1.slice(i).forEach((num) => {\r\n\t\t\tres.push(num);\r\n\t\t});\r\n\t} else if (j < list2.length) {\r\n\t\tlist2.slice(j).forEach((num) => {\r\n\t\t\tres.push(num);\r\n\t\t});\r\n\t}\r\n\r\n\treturn res;\r\n};\r\n\r\nconst divide = (nums) => {\r\n\tif (nums.length <= 1) {\r\n\t\treturn nums;\r\n\t}\r\n\tlet left = divide(nums.slice(0, nums.length / 2));\r\n\tlet right = divide(nums.slice(nums.length / 2));\r\n\treturn merge(left, right);\r\n};\r\n\r\nconst merge_sort = (nums) => {\r\n\treturn divide(nums);\r\n};\r\n\r\nconst init_fib_form = () => {\r\n\tconst fib_form = document.querySelector('.fib-form');\r\n\tfib_form.addEventListener('submit', (e) => {\r\n\t\te.preventDefault();\r\n\t\tconst form_data = new FormData(fib_form);\r\n\t\tconst form_props = Object.fromEntries(form_data);\r\n\t\tconst res = fib_rec(Number(form_props.length));\r\n\t\tdocument.querySelector('.fib-res').textContent = res.join(', ');\r\n\t});\r\n};\r\n\r\nconst init_sort_form = () => {\r\n\tconst sort_form = document.querySelector('.sort-form');\r\n\tsort_form.addEventListener('submit', (e) => {\r\n\t\te.preventDefault();\r\n\t\tconst form_data = new FormData(sort_form);\r\n\t\tconst form_props = Object.fromEntries(form_data);\r\n\t\tlet int_list = form_props.list.split(', ').map((num) => {\r\n\t\t\treturn Number(num);\r\n\t\t});\r\n\t\tconst res = merge_sort(int_list);\r\n\t\tdocument.querySelector('.sort-res').textContent = res.join(', ');\r\n\t});\r\n};\r\n\r\nfunction main() {\r\n\tinit_fib_form();\r\n\tinit_sort_form();\r\n}\r\n\r\nwindow.addEventListener('load', () => {\r\n\tmain();\r\n});\r\n\n\n//# sourceURL=webpack://13-odin-recursion/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;