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

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper_functions/html_creator */ \"./src/helper_functions/html_creator.js\");\n\r\n\r\nconst Contact = (() => {\r\n\tconst _capitalize_first_letter = (string) => {\r\n\t\treturn string.charAt(0).toUpperCase() + string.slice(1);\r\n\t};\r\n\r\n\tconst _generate_piece_of_contact = (contact_type, contact_info) => {\r\n\t\tconst contact_piece = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', contact_type);\r\n\t\tconst contact_type_tag = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)(\r\n\t\t\t'h2',\r\n\t\t\tcontact_type,\r\n\t\t\t_capitalize_first_letter(contact_type)\r\n\t\t);\r\n\t\tconst contact_body = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('p', 'contact-body', contact_info);\r\n\r\n\t\tcontact_piece.appendChild(contact_type_tag);\r\n\t\tcontact_piece.appendChild(contact_body);\r\n\r\n\t\treturn contact_piece;\r\n\t};\r\n\r\n\tconst _generate_contact_info = () => {\r\n\t\tconst contact_info = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', 'contact-info');\r\n\t\tconst address = _generate_piece_of_contact(\r\n\t\t\t'address',\r\n\t\t\t'000 Willy Wonka Ave, Elmwood City'\r\n\t\t);\r\n\t\tconst telephone = _generate_piece_of_contact(\r\n\t\t\t'telephone',\r\n\t\t\t'271-182-8182'\r\n\t\t);\r\n\t\tconst email = _generate_piece_of_contact(\r\n\t\t\t'Email',\r\n\t\t\t'support@sugarbowl.com'\r\n\t\t);\r\n\r\n\t\tconst all_contact_info = [address, telephone, email];\r\n\t\tall_contact_info.forEach((info) => {\r\n\t\t\tcontact_info.appendChild(info);\r\n\t\t});\r\n\r\n\t\treturn contact_info;\r\n\t};\r\n\r\n\tconst generate_contact = () => {\r\n\t\tconst content = document.querySelector('#content');\r\n\r\n\t\tconst contact = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', 'contact');\r\n\t\tconst contact_title = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('h1', 'section-title', 'Contact');\r\n\t\tconst contact_info = _generate_contact_info();\r\n\r\n\t\tcontact.appendChild(contact_title);\r\n\t\tcontact.appendChild(contact_info);\r\n\r\n\t\tcontent.appendChild(contact);\r\n\t};\r\n\r\n\treturn { generate_contact };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\r\n\n\n//# sourceURL=webpack://10-odin-restaurant/./src/components/contact.js?");

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper_functions/html_creator */ \"./src/helper_functions/html_creator.js\");\n\r\n\r\nconst Menu = (() => {\r\n\tconst generate_menu_item = (name, text_body) => {\r\n\t\tconst menu_item = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', 'menu-item');\r\n\t\tconst item_name = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('h2', 'menu-item-name', name);\r\n\t\tconst item_body = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('p', 'menu-item-body', text_body);\r\n\t\tmenu_item.appendChild(item_name);\r\n\t\tmenu_item.appendChild(item_body);\r\n\t\treturn menu_item;\r\n\t};\r\n\tconst generate_menu_grid = () => {\r\n\t\tconst menu_grid = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', 'menu-grid');\r\n\r\n\t\tconst menu_item1 = generate_menu_item(\r\n\t\t\t'Triple Banana Super Split',\r\n\t\t\t\"What's better than 1 banana in your banana split? Two! Oh but what's better than 2 bananas in your banana split? Three! Oh but what's better than 3 bananas in your banana split? Nothing, life doesn't get any better.\"\r\n\t\t);\r\n\r\n\t\tconst menu_item2 = generate_menu_item(\r\n\t\t\t'Black Ice',\r\n\t\t\t'Last night, I was in a perfectly safe neighborhood walking away from an ATM machine when black ice just snuck up on me and practically robbed me of my balance.'\r\n\t\t);\r\n\r\n\t\tconst menu_item3 = generate_menu_item(\r\n\t\t\t'What Did You Berry?',\r\n\t\t\t'Blueberries, blueberries, and even more blueberries! Trust me, you should just try it like real people do.'\r\n\t\t);\r\n\r\n\t\tconst menu_item4 = generate_menu_item(\r\n\t\t\t'Cherry-It!',\r\n\t\t\t'A total fan favorite! Loved particularly by french fencers and crusaders.'\r\n\t\t);\r\n\r\n\t\tconst menu_item5 = generate_menu_item(\r\n\t\t\t'Apple-dite',\r\n\t\t\t\"I can't believe it's real. Love at first sight! A foamy delight!\"\r\n\t\t);\r\n\r\n\t\tconst menu_item6 = generate_menu_item(\r\n\t\t\t'Milkshake and Fries',\r\n\t\t\t'You got fries with that shake? Yes we do!'\r\n\t\t);\r\n\r\n\t\tconst menu_item7 = generate_menu_item(\r\n\t\t\t'Free Churro',\r\n\t\t\t'Peace be with you.'\r\n\t\t);\r\n\r\n\t\tconst menu_item8 = generate_menu_item(\r\n\t\t\t'Plutonium Hunger',\r\n\t\t\t'The struggle continues'\r\n\t\t);\r\n\r\n\t\tconst all_menu_items = [\r\n\t\t\tmenu_item1,\r\n\t\t\tmenu_item2,\r\n\t\t\tmenu_item3,\r\n\t\t\tmenu_item4,\r\n\t\t\tmenu_item5,\r\n\t\t\tmenu_item6,\r\n\t\t\tmenu_item7,\r\n\t\t\tmenu_item8,\r\n\t\t];\r\n\r\n\t\tall_menu_items.forEach((item) => {\r\n\t\t\tmenu_grid.appendChild(item);\r\n\t\t});\r\n\r\n\t\treturn menu_grid;\r\n\t};\r\n\r\n\tconst generate_menu = () => {\r\n\t\tconst content_div = document.querySelector('#content');\r\n\r\n\t\tconst menu = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', 'menu');\r\n\t\tconst menu_title = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('h1', 'section-title', 'Menu');\r\n\t\tconst menu_grid = generate_menu_grid();\r\n\r\n\t\tmenu.appendChild(menu_title);\r\n\t\tmenu.appendChild(menu_grid);\r\n\r\n\t\tcontent_div.appendChild(menu);\r\n\t};\r\n\r\n\treturn { generate_menu };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\r\n\n\n//# sourceURL=webpack://10-odin-restaurant/./src/components/menu.js?");

/***/ }),

/***/ "./src/components/tab_buttons.js":
/*!***************************************!*\
  !*** ./src/components/tab_buttons.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper_functions/html_creator */ \"./src/helper_functions/html_creator.js\");\n\r\n\r\nconst TabButton = (() => {\r\n\tconst _generate_buttons = () => {\r\n\t\tconst welcome_btn = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('button', 'welcome-btn', 'Welcome');\r\n\t\tconst menu_btn = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('button', 'menu-btn', 'Menu');\r\n\t\tconst contact_btn = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('button', 'contact-btn', 'Contact');\r\n\t\treturn [welcome_btn, menu_btn, contact_btn];\r\n\t};\r\n\r\n\tconst generate_tab_buttons = () => {\r\n\t\tconst content = document.querySelector('#content');\r\n\r\n\t\tconst button_group = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', 'button-group');\r\n\t\tconst buttons = _generate_buttons();\r\n\r\n\t\tbuttons.forEach((btn) => {\r\n\t\t\tbutton_group.appendChild(btn);\r\n\t\t});\r\n\r\n\t\tcontent.appendChild(button_group);\r\n\t};\r\n\r\n\treturn { generate_tab_buttons };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabButton);\r\n\n\n//# sourceURL=webpack://10-odin-restaurant/./src/components/tab_buttons.js?");

/***/ }),

/***/ "./src/components/welcome.js":
/*!***********************************!*\
  !*** ./src/components/welcome.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper_functions/html_creator */ \"./src/helper_functions/html_creator.js\");\n\r\n\r\nconst Welcome = (() => {\r\n\tconst _generate_welcome_top = () => {\r\n\t\tconst welcome_top = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', 'welcome-top');\r\n\t\tconst title = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)(\r\n\t\t\t'h1',\r\n\t\t\t'title',\r\n\t\t\t\"Elwood City's Famous Sugar Bowl!\"\r\n\t\t);\r\n\t\tconst img = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_img)(\r\n\t\t\t'https://cdn.arthurwiki.com/thumb/c/c1/Sugar_Bowl.png/250px-Sugar_Bowl.png',\r\n\t\t\t'sugar bowl'\r\n\t\t);\r\n\t\twelcome_top.appendChild(title);\r\n\t\twelcome_top.appendChild(img);\r\n\t\treturn welcome_top;\r\n\t};\r\n\r\n\tconst _generate_news_story = (title, text) => {\r\n\t\tconst news_story = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', 'news-story');\r\n\t\tconst news_title = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('h4', 'news-headline', title);\r\n\t\tconst news_text = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('p', 'news-body', text);\r\n\t\tnews_story.appendChild(news_title);\r\n\t\tnews_story.appendChild(news_text);\r\n\t\treturn news_story;\r\n\t};\r\n\r\n\tconst _generate_news = () => {\r\n\t\tconst news = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', 'news');\r\n\t\tconst news_title = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('h3', 'news', 'News');\r\n\t\tconst news_stories = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', 'news-stories-container');\r\n\r\n\t\tconst story1 = _generate_news_story(\r\n\t\t\t'🍨 Sunday Sundaes are back! 🍨',\r\n\t\t\t\"Swing by this Sunday for a free sundae and choose your own toppings, all for grand ol' price of FREE!\"\r\n\t\t);\r\n\r\n\t\tconst story2 = _generate_news_story(\r\n\t\t\t'👬 Giving back 👭',\r\n\t\t\t\"We will be donating a portion of our profits to Lakewood Elementary School where it will help fund field trips for our community's curious and awesome students.\"\r\n\t\t);\r\n\r\n\t\tconst story3 = _generate_news_story(\r\n\t\t\t\"🍊 Orange you glad it's summer? 🍊\",\r\n\t\t\t'Due to popular demand, orange flavored ice cream is back! Come by for a free sample! But be quick, a pineapple told me that this deal will only last for the summer!'\r\n\t\t);\r\n\r\n\t\tconst story4 = _generate_news_story(\r\n\t\t\t'🌎 For the squirrels 🌎',\r\n\t\t\t\"We're in the proecss of making 100% of our packaging biodegradable. Keep our neighborhood clean and bring your own spoon for a 75% discount!\"\r\n\t\t);\r\n\r\n\t\tconst all_stories = [story1, story2, story3, story4];\r\n\r\n\t\tall_stories.forEach((story) => {\r\n\t\t\tnews_stories.appendChild(story);\r\n\t\t});\r\n\t\tnews.appendChild(news_title);\r\n\t\tnews.appendChild(news_stories);\r\n\r\n\t\treturn news;\r\n\t};\r\n\r\n\tconst _generate_customer_review = (img_src, img_alt, name, review) => {\r\n\t\tconst review_div = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', 'review');\r\n\t\tconst profile_pic = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_img)(img_src, img_alt);\r\n\t\tconst review_text = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', 'review-text');\r\n\t\tconst review_name = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('h4', 'review-name', name);\r\n\t\tconst review_body = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('p', 'review-body', review);\r\n\r\n\t\treview_text.appendChild(review_name);\r\n\t\treview_text.appendChild(review_body);\r\n\r\n\t\tconst all_review_tags = [profile_pic, review_text];\r\n\t\tall_review_tags.forEach((tag) => {\r\n\t\t\treview_div.appendChild(tag);\r\n\t\t});\r\n\r\n\t\treturn review_div;\r\n\t};\r\n\r\n\tconst _generate_reviews = () => {\r\n\t\tconst review = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', 'happy-customers');\r\n\t\tconst review_title = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)(\r\n\t\t\t'h3',\r\n\t\t\t'review-title',\r\n\t\t\t'Customer Reviews'\r\n\t\t);\r\n\t\tconst reviews_grid = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', 'reviews-grid');\r\n\r\n\t\tconst review1 = _generate_customer_review(\r\n\t\t\t'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/pttki3swozjf8h78qhgi/arthur-teacher?fimg-ssr-default',\r\n\t\t\t'Mr. Ratburn',\r\n\t\t\t'Nigel Ratburn',\r\n\t\t\t'Ate here last weekend with my friend Patrick. It was so good I almost married him on the spot. Thankfully, I left the engagement ring at home. Phew!'\r\n\t\t);\r\n\r\n\t\tconst review2 = _generate_customer_review(\r\n\t\t\t'https://www.drawingtutorials101.com/drawing-tutorials/Cartoon-TV/Arthur/d-w--read/how-to-draw-D-W--Read-from-Arthur-step-0.png',\r\n\t\t\t'D.W.',\r\n\t\t\t'D.W.',\r\n\t\t\t'ice cream more like poop 9/10'\r\n\t\t);\r\n\r\n\t\tconst review3 = _generate_customer_review(\r\n\t\t\t'https://preview.redd.it/arthur-ending-why-was-brains-alan-future-not-included-v0-8ndq7ox96wo81.jpg?auto=webp&s=973644328f60d7873b09c7d8578f95b16d0308dd',\r\n\t\t\t'Brain',\r\n\t\t\t'Brain',\r\n\t\t\t'Great place to study. I recommend the triple banana super split.'\r\n\t\t);\r\n\r\n\t\tconst review4 = _generate_customer_review(\r\n\t\t\t'https://image.pbs.org/video-assets/pbs-kids/arthur/241627/images/kids-mezzannine-16x9_758.jpg',\r\n\t\t\t'Buster',\r\n\t\t\t'Buster',\r\n\t\t\t\"Saw an alien here one time, and I come here every week to try to see it again. It's been 5 months and no luck. Keep your eyes peeled! (get it? like a banana, they put bananas on ice cream and they call it a banana split, it's one of the things they sell here and it's really really good)\"\r\n\t\t);\r\n\r\n\t\tconst review5 = _generate_customer_review(\r\n\t\t\t'https://i.ytimg.com/vi/RUbJq_ugIJI/maxresdefault.jpg',\r\n\t\t\t'Muffy',\r\n\t\t\t'Muffy',\r\n\t\t\t\"Sometimes I go here to see what poor people eat. Maybe it's not so bad to be poor. Just kidding ha!\"\r\n\t\t);\r\n\r\n\t\tconst review6 = _generate_customer_review(\r\n\t\t\t'https://d3crmev290s45i.cloudfront.net/frames/1009587xxx/1009587020/1009587020-disc001-file001-frame00180-size-original.jpg',\r\n\t\t\t'Timmy',\r\n\t\t\t'Timmy',\r\n\t\t\t'it s verry bad i fownd poop in iece creem -tiMMy rulez!!1'\r\n\t\t);\r\n\r\n\t\tconst review7 = _generate_customer_review(\r\n\t\t\t'https://yt3.googleusercontent.com/ytc/AGIKgqM1rslfN_yklJrqRJNF0VuqKG6VtK5SbDgnD_DaXw=s900-c-k-c0x00ffffff-no-rj',\r\n\t\t\t'Arthur',\r\n\t\t\t'Arthur',\r\n\t\t\t'The best in town!'\r\n\t\t);\r\n\r\n\t\tconst all_reviews = [\r\n\t\t\treview1,\r\n\t\t\treview2,\r\n\t\t\treview3,\r\n\t\t\treview4,\r\n\t\t\treview5,\r\n\t\t\treview6,\r\n\t\t\treview7,\r\n\t\t];\r\n\t\tall_reviews.forEach((r) => {\r\n\t\t\treviews_grid.appendChild(r);\r\n\t\t});\r\n\t\treview.appendChild(review_title);\r\n\t\treview.appendChild(reviews_grid);\r\n\t\treturn review;\r\n\t};\r\n\r\n\tconst generate_welcome = () => {\r\n\t\tconst content_div = document.querySelector('#content');\r\n\r\n\t\tconst welcome = (0,_helper_functions_html_creator__WEBPACK_IMPORTED_MODULE_0__.create_tag)('div', 'welcome');\r\n\r\n\t\tconst welcome_top = _generate_welcome_top();\r\n\t\tconst news = _generate_news();\r\n\t\tconst happy_customers = _generate_reviews();\r\n\r\n\t\twelcome.appendChild(welcome_top);\r\n\t\twelcome.appendChild(news);\r\n\t\twelcome.appendChild(happy_customers);\r\n\r\n\t\tcontent_div.appendChild(welcome);\r\n\t};\r\n\r\n\treturn { generate_welcome };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Welcome);\r\n\n\n//# sourceURL=webpack://10-odin-restaurant/./src/components/welcome.js?");

/***/ }),

/***/ "./src/helper_functions/html_creator.js":
/*!**********************************************!*\
  !*** ./src/helper_functions/html_creator.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create_img\": () => (/* binding */ create_img),\n/* harmony export */   \"create_tag\": () => (/* binding */ create_tag)\n/* harmony export */ });\nfunction create_tag(tag_type, class_name, content) {\r\n\tconst new_html_tag = document.createElement(tag_type);\r\n\tnew_html_tag.classList.add(class_name);\r\n\r\n\tif (typeof content !== undefined) {\r\n\t\tnew_html_tag.textContent = content;\r\n\t}\r\n\r\n\treturn new_html_tag;\r\n}\r\n\r\nfunction create_img(src, alt) {\r\n\tconst img = document.createElement('img');\r\n\timg.src = src;\r\n\timg.alt = alt;\r\n\treturn img;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://10-odin-restaurant/./src/helper_functions/html_creator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_tab_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tab_buttons */ \"./src/components/tab_buttons.js\");\n/* harmony import */ var _components_welcome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/welcome */ \"./src/components/welcome.js\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu */ \"./src/components/menu.js\");\n/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact */ \"./src/components/contact.js\");\n\r\n\r\n\r\n\r\n\r\nfunction clear_content() {\r\n\tlet all_content = document.querySelectorAll('#content > div');\r\n\tall_content = Array.from(all_content);\r\n\tconst main_content = all_content.filter(\r\n\t\t(el) => !el.classList.contains('button-group')\r\n\t);\r\n\r\n\tmain_content.forEach((content) => {\r\n\t\tif (!content.classList.contains('hidden')) {\r\n\t\t\tcontent.classList.add('hidden');\r\n\t\t}\r\n\t});\r\n}\r\n\r\nfunction display_content(content_class_name) {\r\n\tconst content = document.querySelector('.' + content_class_name);\r\n\tif (content.classList.contains('hidden')) {\r\n\t\tcontent.classList.remove('hidden');\r\n\t}\r\n}\r\n\r\nfunction init_tab_buttons() {\r\n\tconst welcome = document.querySelector('.welcome-btn');\r\n\twelcome.addEventListener('click', () => {\r\n\t\tclear_content();\r\n\t\tdisplay_content('welcome');\r\n\t});\r\n\r\n\tconst menu_btn = document.querySelector('.menu-btn');\r\n\tmenu_btn.addEventListener('click', () => {\r\n\t\tclear_content();\r\n\t\tdisplay_content('menu');\r\n\t});\r\n\r\n\tconst contact_btn = document.querySelector('.contact-btn');\r\n\tcontact_btn.addEventListener('click', () => {\r\n\t\tclear_content();\r\n\t\tdisplay_content('contact');\r\n\t});\r\n}\r\n\r\nfunction main() {\r\n\t_components_tab_buttons__WEBPACK_IMPORTED_MODULE_0__[\"default\"].generate_tab_buttons();\r\n\t_components_welcome__WEBPACK_IMPORTED_MODULE_1__[\"default\"].generate_welcome();\r\n\t_components_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"].generate_menu();\r\n\t_components_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"].generate_contact();\r\n\tclear_content();\r\n\tdisplay_content('welcome');\r\n\tinit_tab_buttons();\r\n}\r\n\r\nwindow.addEventListener('load', () => {\r\n\tmain();\r\n});\r\n\n\n//# sourceURL=webpack://10-odin-restaurant/./src/index.js?");

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