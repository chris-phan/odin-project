// *OLD*: function constructor for Book
// function Book(title, author, num_pages, have_read) {
// 	this.title = title;
// 	this.author = author;
// 	this.num_pages = num_pages;
// 	this.have_read = have_read;
// 	this.info = () => {
// 		let book_info = `${this.title} by ${this.author}, ${this.num_pages},`;
// 		if (!have_read) {
// 			book_info = book_info + ' not read yet';
// 		} else {
// 			book_info = book_info + ' read';
// 		}
// 		return book_info;
// 	};
// }

// *NEW*: class definition for Book
class Book {
	constructor(title, author, num_pages, have_read) {
		this._title = title;
		this._author = author;
		this._num_pages = num_pages;
		this._have_read = have_read;
	}

	get title() {
		return this._title;
	}

	set title(title) {
		this._title = title;
	}

	get author() {
		return this._author;
	}

	set author(author) {
		this._author = author;
	}

	get num_pages() {
		return this._num_pages;
	}

	set num_pages(num_pages) {
		this._num_pages = num_pages;
	}

	get have_read() {
		return this._have_read;
	}

	set have_read(have_read) {
		this.have_read = have_read;
	}

	info() {
		let book_info = `${this.title} by ${this.author}, ${this.num_pages},`;
		if (!have_read) {
			book_info = book_info + ' not read yet';
		} else {
			book_info = book_info + ' read';
		}
		return book_info;
	}
}

function init_show_form_button() {
	document.querySelector('.show-form').addEventListener('click', (e) => {
		e.target.classList.toggle('showing');
		document.querySelector('.form-container').classList.toggle('hidden');
	});
}

function init_form() {
	document.querySelector('form').addEventListener('submit', (e) => {
		e.preventDefault();

		const title = document.querySelector('#title').value;
		const author = document.querySelector('#author').value;
		const num_pages = document.querySelector('#num_pages').value;
		const have_read = document.querySelector('#have_read').checked;

		const book = new Book(title, author, num_pages, have_read);

		create_book_card(book);
	});
}

/**
 * Book card will look like this:
 * <div class="book-card">
 *      <button class="delete-book"></button>
 *      <p class="title">Title</p>
 *      <p class="author">Author</p>
 *      <p class="num_pages">100 pages</p>
 *      <button class="mark-read"></button>
 * </div>
 */
function create_book_card(book) {
	const book_card = document.createElement('div');
	const delete_book = document.createElement('button');
	const title = document.createElement('p');
	const author = document.createElement('p');
	const num_pages = document.createElement('p');
	const toggle_read = document.createElement('button');

	book_card.classList.add('book-card');
	delete_book.classList.add('delete-book');
	title.classList.add('title');
	author.classList.add('author');
	num_pages.classList.add('num_pages');
	toggle_read.classList.add('mark-read');

	console.log('hehe');
	title.innerText = book.title;
	author.innerText = `By ${book.author}`;
	num_pages.innerText = `${book.num_pages} pages`;
	if (book.have_read) {
		book_card.classList.add('read');
		toggle_read.classList.add('read');
	}

	delete_book.addEventListener('click', (e) => {
		e.target.parentNode.remove();
	});

	toggle_read.addEventListener('click', (e) => {
		e.target.parentNode.classList.toggle('read');
		e.target.classList.toggle('read');
	});

	book_card.appendChild(delete_book);
	book_card.appendChild(title);
	book_card.appendChild(author);
	book_card.appendChild(num_pages);
	book_card.appendChild(toggle_read);
	console.log(book_card);

	document.querySelector('div.books').appendChild(book_card);
}

function main() {
	init_show_form_button();
	init_form();
}

window.addEventListener('load', () => {
	main();
});
