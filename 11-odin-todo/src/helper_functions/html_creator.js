function create_tag(tag_type, class_name, content) {
	const new_html_tag = document.createElement(tag_type);
	new_html_tag.classList.add(class_name);

	if (typeof content !== undefined) {
		new_html_tag.textContent = content;
	}

	return new_html_tag;
}

function create_svg(title_str, path_str, class_name) {
	const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	const title = document.createElement('title');
	const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

	svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	svg.setAttribute('viewBox', '0 0 24 24');

	title.textContent = title_str;
	path.setAttribute('d', path_str);

	svg.appendChild(title);
	svg.appendChild(path);

	svg.classList.add(class_name);

	return svg;
}

export { create_tag, create_svg };
