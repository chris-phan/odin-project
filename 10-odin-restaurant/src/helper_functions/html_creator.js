function create_tag(tag_type, class_name, content) {
	const new_html_tag = document.createElement(tag_type);
	new_html_tag.classList.add(class_name);

	if (typeof content !== undefined) {
		new_html_tag.textContent = content;
	}

	return new_html_tag;
}

function create_img(src, alt) {
	const img = document.createElement('img');
	img.src = src;
	img.alt = alt;
	return img;
}

export { create_tag, create_img };
