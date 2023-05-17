import { create_tag } from '../helper_functions/html_creator';

const Contact = (() => {
	const _capitalize_first_letter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const _generate_piece_of_contact = (contact_type, contact_info) => {
		const contact_piece = create_tag('div', contact_type);
		const contact_type_tag = create_tag(
			'h2',
			contact_type,
			_capitalize_first_letter(contact_type)
		);
		const contact_body = create_tag('p', 'contact-body', contact_info);

		contact_piece.appendChild(contact_type_tag);
		contact_piece.appendChild(contact_body);

		return contact_piece;
	};

	const _generate_contact_info = () => {
		const contact_info = create_tag('div', 'contact-info');
		const address = _generate_piece_of_contact(
			'address',
			'000 Willy Wonka Ave, Elmwood City'
		);
		const telephone = _generate_piece_of_contact(
			'telephone',
			'271-182-8182'
		);
		const email = _generate_piece_of_contact(
			'Email',
			'support@sugarbowl.com'
		);

		const all_contact_info = [address, telephone, email];
		all_contact_info.forEach((info) => {
			contact_info.appendChild(info);
		});

		return contact_info;
	};

	const generate_contact = () => {
		const content = document.querySelector('#content');

		const contact = create_tag('div', 'contact');
		const contact_title = create_tag('h1', 'section-title', 'Contact');
		const contact_info = _generate_contact_info();

		contact.appendChild(contact_title);
		contact.appendChild(contact_info);

		content.appendChild(contact);
	};

	return { generate_contact };
})();

export default Contact;
