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

/***/ "./src/functions/analyze_array.js":
/*!****************************************!*\
  !*** ./src/functions/analyze_array.js ***!
  \****************************************/
/***/ ((module) => {

eval("const analyze_array = (arr) => {\r\n\tif (!Array.isArray(arr)) {\r\n\t\tthrow new Error('Argument is not an array');\r\n\t}\r\n\r\n\tlet min = Number.POSITIVE_INFINITY;\r\n\tlet max = Number.NEGATIVE_INFINITY;\r\n\tlet total = 0;\r\n\r\n\tfor (let i = 0; i < arr.length; i++) {\r\n\t\tif (typeof arr[i] !== 'number') {\r\n\t\t\tthrow new Error(`Element at position ${i} is not a number`);\r\n\t\t}\r\n\r\n\t\tmin = Math.min(min, arr[i]);\r\n\t\tmax = Math.max(max, arr[i]);\r\n\r\n\t\ttotal += arr[i];\r\n\t}\r\n\r\n\treturn {\r\n\t\taverage: arr.length === 0 ? null : total / arr.length,\r\n\t\tmin: min,\r\n\t\tmax: max,\r\n\t\tlength: arr.length,\r\n\t};\r\n};\r\n\r\nmodule.exports = analyze_array;\r\n\n\n//# sourceURL=webpack://17-js-testing/./src/functions/analyze_array.js?");

/***/ }),

/***/ "./src/functions/caesar_cipher.js":
/*!****************************************!*\
  !*** ./src/functions/caesar_cipher.js ***!
  \****************************************/
/***/ ((module) => {

eval("const caesar_cipher = (str, shift) => {\r\n\tif (typeof str !== 'string') {\r\n\t\tthrow new Error('First argument is not a string');\r\n\t} else if (!Number.isInteger(shift)) {\r\n\t\tthrow new Error('Second argument is not a number');\r\n\t} else if (shift < 0) {\r\n\t\tthrow new Error('Shift value must be 0 or positive');\r\n\t}\r\n\r\n\tlet encrypted_str = '';\r\n\tfor (let i = 0; i < str.length; i++) {\r\n\t\tencrypted_str += shift_char(str[i], shift);\r\n\t}\r\n\treturn encrypted_str;\r\n};\r\n\r\nconst shift_char = (char, shift) => {\r\n\tconst A_ascii = 'A'.charCodeAt(0);\r\n\tconst Z_ascii = 'Z'.charCodeAt(0);\r\n\tconst a_ascii = 'a'.charCodeAt(0);\r\n\tconst z_ascii = 'z'.charCodeAt(0);\r\n\r\n\tlet new_char_ascii = char.charCodeAt(0);\r\n\tif (new_char_ascii >= A_ascii && new_char_ascii <= Z_ascii) {\r\n\t\tnew_char_ascii = ((new_char_ascii + shift - A_ascii) % 26) + A_ascii;\r\n\t} else if (new_char_ascii >= a_ascii && new_char_ascii <= z_ascii) {\r\n\t\tnew_char_ascii = ((new_char_ascii + shift - a_ascii) % 26) + a_ascii;\r\n\t} else {\r\n\t\treturn char;\r\n\t}\r\n\r\n\treturn String.fromCharCode(new_char_ascii);\r\n};\r\n\r\nmodule.exports = caesar_cipher;\r\n\n\n//# sourceURL=webpack://17-js-testing/./src/functions/caesar_cipher.js?");

/***/ }),

/***/ "./src/functions/calculator.js":
/*!*************************************!*\
  !*** ./src/functions/calculator.js ***!
  \*************************************/
/***/ ((module) => {

eval("const calculator = (() => {\r\n\tconst add = (num1, num2) => {\r\n\t\tif (typeof num1 !== 'number') {\r\n\t\t\tthrow new Error('num1 is not a number');\r\n\t\t} else if (typeof num2 !== 'number') {\r\n\t\t\tthrow new Error('num2 is not a number');\r\n\t\t}\r\n\r\n\t\treturn num1 + num2;\r\n\t};\r\n\r\n\tconst subtract = (num1, num2) => {\r\n\t\tif (typeof num1 !== 'number') {\r\n\t\t\tthrow new Error('num1 is not a number');\r\n\t\t} else if (typeof num2 !== 'number') {\r\n\t\t\tthrow new Error('num2 is not a number');\r\n\t\t}\r\n\r\n\t\treturn num1 - num2;\r\n\t};\r\n\r\n\tconst multiply = (num1, num2) => {\r\n\t\tif (typeof num1 !== 'number') {\r\n\t\t\tthrow new Error('num1 is not a number');\r\n\t\t} else if (typeof num2 !== 'number') {\r\n\t\t\tthrow new Error('num2 is not a number');\r\n\t\t}\r\n\r\n\t\treturn num1 * num2;\r\n\t};\r\n\r\n\tconst divide = (num1, num2) => {\r\n\t\tif (typeof num1 !== 'number') {\r\n\t\t\tthrow new Error('num1 is not a number');\r\n\t\t} else if (typeof num2 !== 'number') {\r\n\t\t\tthrow new Error('num2 is not a number');\r\n\t\t} else if (num2 === 0) {\r\n\t\t\tthrow new Error('Cannot divide by 0');\r\n\t\t}\r\n\r\n\t\treturn num1 / num2;\r\n\t};\r\n\r\n\treturn { add, subtract, multiply, divide };\r\n})();\r\n\r\nmodule.exports = calculator;\r\n\n\n//# sourceURL=webpack://17-js-testing/./src/functions/calculator.js?");

/***/ }),

/***/ "./src/functions/capitalize.js":
/*!*************************************!*\
  !*** ./src/functions/capitalize.js ***!
  \*************************************/
/***/ ((module) => {

eval("const capitalize = (str) => {\r\n\tif (str.length == 0) {\r\n\t\treturn '';\r\n\t} else if (typeof str !== 'string') {\r\n\t\tthrow new Error('Not a string');\r\n\t}\r\n\r\n\treturn str[0].toUpperCase() + str.slice(1);\r\n};\r\n\r\nmodule.exports = capitalize;\r\n\n\n//# sourceURL=webpack://17-js-testing/./src/functions/capitalize.js?");

/***/ }),

/***/ "./src/functions/reverse_string.js":
/*!*****************************************!*\
  !*** ./src/functions/reverse_string.js ***!
  \*****************************************/
/***/ ((module) => {

eval("const reverse_string = (str) => {\r\n\tif (typeof str !== 'string') {\r\n\t\tthrow new Error('Not a string');\r\n\t}\r\n\r\n\tlet reversed_str = '';\r\n\tfor (let i = str.length - 1; i >= 0; i--) {\r\n\t\treversed_str += str[i];\r\n\t}\r\n\r\n\treturn reversed_str;\r\n};\r\n\r\nmodule.exports = reverse_string;\r\n\n\n//# sourceURL=webpack://17-js-testing/./src/functions/reverse_string.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const capitalize = __webpack_require__(/*! ./functions/capitalize */ \"./src/functions/capitalize.js\");\r\nconst reverse_string = __webpack_require__(/*! ./functions/reverse_string */ \"./src/functions/reverse_string.js\");\r\nconst calculator = __webpack_require__(/*! ./functions/calculator */ \"./src/functions/calculator.js\");\r\nconst caesar_cipher = __webpack_require__(/*! ./functions/caesar_cipher */ \"./src/functions/caesar_cipher.js\");\r\nconst analyze_array = __webpack_require__(/*! ./functions/analyze_array */ \"./src/functions/analyze_array.js\");\r\n\r\nconst init_capitalize_btn = () => {\r\n\tdocument.querySelector('.capitalize-btn').addEventListener('click', () => {\r\n\t\tconst input = prompt('Enter a string');\r\n\t\ttry {\r\n\t\t\talert(capitalize(input));\r\n\t\t} catch (err) {\r\n\t\t\talert(err.message);\r\n\t\t}\r\n\t});\r\n};\r\n\r\nconst init_reverse_string_btn = () => {\r\n\tdocument\r\n\t\t.querySelector('.reverse-string-btn')\r\n\t\t.addEventListener('click', () => {\r\n\t\t\tconst input = prompt('Enter a string');\r\n\t\t\ttry {\r\n\t\t\t\talert(reverse_string(input));\r\n\t\t\t} catch (err) {\r\n\t\t\t\talert(err.message);\r\n\t\t\t}\r\n\t\t});\r\n};\r\n\r\nconst verify_calculator_input = () => {\r\n\tconst input = prompt('Enter two numbers separated by a space, e.g. 10 2');\r\n\tconst separated_inputs = input.split(' ');\r\n\r\n\tif (separated_inputs.length !== 2) {\r\n\t\talert('Invalid input');\r\n\t\treturn null;\r\n\t}\r\n\r\n\tfor (let i = 0; i < 2; i++) {\r\n\t\tif (isNaN(separated_inputs[i])) {\r\n\t\t\talert('Invalid input');\r\n\t\t\treturn null;\r\n\t\t}\r\n\t}\r\n\r\n\treturn separated_inputs;\r\n};\r\n\r\nconst init_calculator_btns = () => {\r\n\tdocument.querySelector('.add-btn').addEventListener('click', () => {\r\n\t\tconst input = verify_calculator_input();\r\n\t\tif (input === null) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\ttry {\r\n\t\t\talert(calculator.add(Number(input[0]), Number(input[1])));\r\n\t\t} catch (err) {\r\n\t\t\talert(err.message);\r\n\t\t}\r\n\t});\r\n\r\n\tdocument.querySelector('.subtract-btn').addEventListener('click', () => {\r\n\t\tconst input = verify_calculator_input();\r\n\t\tif (input === null) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\ttry {\r\n\t\t\talert(calculator.subtract(Number(input[0]), Number(input[1])));\r\n\t\t} catch (err) {\r\n\t\t\talert(err.message);\r\n\t\t}\r\n\t});\r\n\r\n\tdocument.querySelector('.multiply-btn').addEventListener('click', () => {\r\n\t\tconst input = verify_calculator_input();\r\n\t\tif (input === null) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\ttry {\r\n\t\t\talert(calculator.multiply(Number(input[0]), Number(input[1])));\r\n\t\t} catch (err) {\r\n\t\t\talert(err.message);\r\n\t\t}\r\n\t});\r\n\r\n\tdocument.querySelector('.divide-btn').addEventListener('click', () => {\r\n\t\tconst input = verify_calculator_input();\r\n\t\tif (input === null) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\ttry {\r\n\t\t\talert(calculator.divide(Number(input[0]), Number(input[1])));\r\n\t\t} catch (err) {\r\n\t\t\talert(err.message);\r\n\t\t}\r\n\t});\r\n};\r\n\r\nconst init_caesar_cipher_btn = () => {\r\n\tdocument\r\n\t\t.querySelector('.caesar-cipher-btn')\r\n\t\t.addEventListener('click', () => {\r\n\t\t\tconst string = prompt('Enter a string');\r\n\t\t\tconst shift = prompt('Enter a number to shift your string by');\r\n\r\n\t\t\tif (isNaN(shift)) {\r\n\t\t\t\talert('Invalid number');\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\ttry {\r\n\t\t\t\talert(caesar_cipher(string, Number(shift)));\r\n\t\t\t} catch (err) {\r\n\t\t\t\talert(err.message);\r\n\t\t\t}\r\n\t\t});\r\n};\r\n\r\nconst init_analyze_array_btn = () => {\r\n\tdocument\r\n\t\t.querySelector('.analyze-array-btn')\r\n\t\t.addEventListener('click', () => {\r\n\t\t\tconst input = prompt(\r\n\t\t\t\t'Enter numbers separated by a space, e.g.: 1 2 3 4 5 6 7'\r\n\t\t\t);\r\n\t\t\tconst input_arr = input.split(' ');\r\n\r\n\t\t\tlet num_input = [];\r\n\t\t\tinput_arr.forEach((num) => {\r\n\t\t\t\tif (isNaN(num)) {\r\n\t\t\t\t\talert('Invalid array');\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\t\t\t\tnum_input.push(Number(num));\r\n\t\t\t});\r\n\r\n\t\t\ttry {\r\n\t\t\t\tconst res = analyze_array(num_input);\r\n\t\t\t\talert(\r\n\t\t\t\t\t`average: ${res.average}\\nmin: ${res.min}\\nmax: ${res.max}\\nlength: ${res.length}`\r\n\t\t\t\t);\r\n\t\t\t} catch (err) {\r\n\t\t\t\talert(err.message);\r\n\t\t\t}\r\n\t\t});\r\n};\r\n\r\nconst init_buttons = () => {\r\n\tinit_capitalize_btn();\r\n\tinit_reverse_string_btn();\r\n\tinit_calculator_btns();\r\n\tinit_caesar_cipher_btn();\r\n\tinit_analyze_array_btn();\r\n};\r\n\r\nfunction main() {\r\n\tconsole.log('hi');\r\n\tinit_buttons();\r\n}\r\n\r\nwindow.addEventListener('load', main);\r\n\n\n//# sourceURL=webpack://17-js-testing/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;