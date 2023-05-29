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

eval("const get_weather_data = async (location) => {\r\n\tconst request_url = `https://api.weatherapi.com/v1/current.json?key=96ed28e7d5da4a37bda31436232805&q=${location}`;\r\n\tlet data = {};\r\n\tlet res;\r\n\ttry {\r\n\t\tres = await fetch(request_url);\r\n\t\tif (!res.ok) {\r\n\t\t\tthrow new Error(res.statusText);\r\n\t\t}\r\n\t\tres = await res.json();\r\n\t} catch (err) {\r\n\t\tshow_input_error();\r\n\t\tres = null;\r\n\t}\r\n\r\n\tif (res === null) {\r\n\t\treturn null;\r\n\t}\r\n\r\n\tdata.name = res.location.name;\r\n\tdata.region = res.location.region;\r\n\tdata.country = res.location.country;\r\n\tdata.temp_f = res.current.temp_f;\r\n\tdata.feelslike_f = res.current.feelslike_f;\r\n\tdata.precip_in = res.current.precip_in;\r\n\tdata.humidity = res.current.humidity;\r\n\r\n\tconsole.log(data);\r\n\treturn data;\r\n};\r\n\r\nconst show_input_error = () => {\r\n\tconst error_text = document.querySelector('.error-text');\r\n\tif (error_text.classList.contains('hidden')) {\r\n\t\terror_text.classList.remove('hidden');\r\n\t}\r\n};\r\n\r\nconst hide_input_error = () => {\r\n\tconst error_text = document.querySelector('.error-text');\r\n\tif (!error_text.classList.contains('hidden')) {\r\n\t\terror_text.classList.add('hidden');\r\n\t}\r\n};\r\n\r\nconst make_weather_visible = () => {\r\n\tdocument.querySelector('.weather-info').classList.remove('hidden');\r\n};\r\n\r\nconst display_weather = async (location) => {\r\n\tconst weather_data = await get_weather_data(location);\r\n\tif (weather_data !== null) {\r\n\t\thide_input_error();\r\n\t\tmake_weather_visible();\r\n\r\n\t\tconst name = document.querySelector('.name');\r\n\t\tname.textContent = weather_data.name;\r\n\r\n\t\tconst region = document.querySelector('.region');\r\n\t\tregion.textContent = weather_data.region;\r\n\r\n\t\tconst country = document.querySelector('.country');\r\n\t\tcountry.textContent = weather_data.country;\r\n\r\n\t\tconst temp_f = document.querySelector('.temp-f');\r\n\t\ttemp_f.textContent = weather_data.temp_f;\r\n\r\n\t\tconst feelslike_f = document.querySelector('.feelslike-f');\r\n\t\tfeelslike_f.textContent = weather_data.feelslike_f;\r\n\r\n\t\tconst precip_in = document.querySelector('.precip-in');\r\n\t\tprecip_in.textContent = weather_data.precip_in;\r\n\r\n\t\tconst humidity = document.querySelector('.humidity');\r\n\t\thumidity.textContent = weather_data.humidity;\r\n\t} else {\r\n\t\tconst error_text = document.querySelector('.error-text');\r\n\t\terror_text.classList.remove('hidden');\r\n\t}\r\n};\r\n\r\nconst init_form = () => {\r\n\tconst form = document.querySelector('.search-location-form');\r\n\r\n\tform.addEventListener('submit', (e) => {\r\n\t\te.preventDefault();\r\n\t\tconst form_data = new FormData(form);\r\n\t\tconst form_props = Object.fromEntries(form_data);\r\n\t\tdisplay_weather(form_props.location);\r\n\t});\r\n};\r\n\r\nfunction main() {\r\n\tinit_form();\r\n}\r\n\r\nwindow.addEventListener('load', () => {\r\n\tmain();\r\n});\r\n\n\n//# sourceURL=webpack://12-odin-weather/./src/index.js?");

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