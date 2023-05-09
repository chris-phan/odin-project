function compare_password_fields() {
	const password = document.querySelector('#password');
	const password_confirm = document.querySelector('#password-confirm');
	const error_text = document.querySelector('#password-invalid');
	console.log(password.value, password_confirm.value);
	if (password.value !== password_confirm.value) {
		error_text.style.visibility = 'visible';
		password.classList.add('error');
		password_confirm.classList.add('error');
	} else {
		error_text.style.visibility = 'hidden';
		password.classList.remove('error');
		password_confirm.classList.remove('error');
	}
	console.log('hi');
}

function init_password_fields() {
	const password = document.querySelector('#password');
	const password_confirm = document.querySelector('#password-confirm');
	password.addEventListener('keyup', compare_password_fields);
	password_confirm.addEventListener('keyup', compare_password_fields);
}

function main() {
	init_password_fields();
}

window.addEventListener('load', () => {
	main();
});
