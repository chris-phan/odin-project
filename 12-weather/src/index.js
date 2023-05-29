const get_weather_data = async (location) => {
	const request_url = `https://api.weatherapi.com/v1/current.json?key=96ed28e7d5da4a37bda31436232805&q=${location}`;
	let data = {};
	let res;
	try {
		res = await fetch(request_url);
		if (!res.ok) {
			throw new Error(res.statusText);
		}
		res = await res.json();
	} catch (err) {
		show_input_error();
		res = null;
	}

	if (res === null) {
		return null;
	}

	data.name = res.location.name;
	data.region = res.location.region;
	data.country = res.location.country;
	data.temp_f = res.current.temp_f;
	data.feelslike_f = res.current.feelslike_f;
	data.precip_in = res.current.precip_in;
	data.humidity = res.current.humidity;

	console.log(data);
	return data;
};

const show_input_error = () => {
	const error_text = document.querySelector('.error-text');
	if (error_text.classList.contains('hidden')) {
		error_text.classList.remove('hidden');
	}
};

const hide_input_error = () => {
	const error_text = document.querySelector('.error-text');
	if (!error_text.classList.contains('hidden')) {
		error_text.classList.add('hidden');
	}
};

const make_weather_visible = () => {
	document.querySelector('.weather-info').classList.remove('hidden');
};

const display_weather = async (location) => {
	const weather_data = await get_weather_data(location);
	if (weather_data !== null) {
		hide_input_error();
		make_weather_visible();

		const name = document.querySelector('.name');
		name.textContent = weather_data.name;

		const region = document.querySelector('.region');
		region.textContent = weather_data.region;

		const country = document.querySelector('.country');
		country.textContent = weather_data.country;

		const temp_f = document.querySelector('.temp-f');
		temp_f.textContent = weather_data.temp_f;

		const feelslike_f = document.querySelector('.feelslike-f');
		feelslike_f.textContent = weather_data.feelslike_f;

		const precip_in = document.querySelector('.precip-in');
		precip_in.textContent = weather_data.precip_in;

		const humidity = document.querySelector('.humidity');
		humidity.textContent = weather_data.humidity;
	} else {
		const error_text = document.querySelector('.error-text');
		error_text.classList.remove('hidden');
	}
};

const init_form = () => {
	const form = document.querySelector('.search-location-form');

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const form_data = new FormData(form);
		const form_props = Object.fromEntries(form_data);
		display_weather(form_props.location);
	});
};

function main() {
	init_form();
}

window.addEventListener('load', () => {
	main();
});
