import { create_tag, create_img } from '../helper_functions/html_creator';

const Welcome = (() => {
	const _generate_welcome_top = () => {
		const welcome_top = create_tag('div', 'welcome-top');
		const title = create_tag(
			'h1',
			'title',
			"Elwood City's Famous Sugar Bowl!"
		);
		const img = create_img(
			'https://cdn.arthurwiki.com/thumb/c/c1/Sugar_Bowl.png/250px-Sugar_Bowl.png',
			'sugar bowl'
		);
		welcome_top.appendChild(title);
		welcome_top.appendChild(img);
		return welcome_top;
	};

	const _generate_news_story = (title, text) => {
		const news_story = create_tag('div', 'news-story');
		const news_title = create_tag('h4', 'news-headline', title);
		const news_text = create_tag('p', 'news-body', text);
		news_story.appendChild(news_title);
		news_story.appendChild(news_text);
		return news_story;
	};

	const _generate_news = () => {
		const news = create_tag('div', 'news');
		const news_title = create_tag('h3', 'news', 'News');
		const news_stories = create_tag('div', 'news-stories-container');

		const story1 = _generate_news_story(
			'🍨 Sunday Sundaes are back! 🍨',
			"Swing by this Sunday for a free sundae and choose your own toppings, all for grand ol' price of FREE!"
		);

		const story2 = _generate_news_story(
			'👬 Giving back 👭',
			"We will be donating a portion of our profits to Lakewood Elementary School where it will help fund field trips for our community's curious and awesome students."
		);

		const story3 = _generate_news_story(
			"🍊 Orange you glad it's summer? 🍊",
			'Due to popular demand, orange flavored ice cream is back! Come by for a free sample! But be quick, a pineapple told me that this deal will only last for the summer!'
		);

		const story4 = _generate_news_story(
			'🌎 For the squirrels 🌎',
			"We're in the proecss of making 100% of our packaging biodegradable. Keep our neighborhood clean and bring your own spoon for a 75% discount!"
		);

		const all_stories = [story1, story2, story3, story4];

		all_stories.forEach((story) => {
			news_stories.appendChild(story);
		});
		news.appendChild(news_title);
		news.appendChild(news_stories);

		return news;
	};

	const _generate_customer_review = (img_src, img_alt, name, review) => {
		const review_div = create_tag('div', 'review');
		const profile_pic = create_img(img_src, img_alt);
		const review_text = create_tag('div', 'review-text');
		const review_name = create_tag('h4', 'review-name', name);
		const review_body = create_tag('p', 'review-body', review);

		review_text.appendChild(review_name);
		review_text.appendChild(review_body);

		const all_review_tags = [profile_pic, review_text];
		all_review_tags.forEach((tag) => {
			review_div.appendChild(tag);
		});

		return review_div;
	};

	const _generate_reviews = () => {
		const review = create_tag('div', 'happy-customers');
		const review_title = create_tag(
			'h3',
			'review-title',
			'Customer Reviews'
		);
		const reviews_grid = create_tag('div', 'reviews-grid');

		const review1 = _generate_customer_review(
			'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/pttki3swozjf8h78qhgi/arthur-teacher?fimg-ssr-default',
			'Mr. Ratburn',
			'Nigel Ratburn',
			'Ate here last weekend with my friend Patrick. It was so good I almost married him on the spot. Thankfully, I left the engagement ring at home. Phew!'
		);

		const review2 = _generate_customer_review(
			'https://www.drawingtutorials101.com/drawing-tutorials/Cartoon-TV/Arthur/d-w--read/how-to-draw-D-W--Read-from-Arthur-step-0.png',
			'D.W.',
			'D.W.',
			'ice cream more like poop 9/10'
		);

		const review3 = _generate_customer_review(
			'https://preview.redd.it/arthur-ending-why-was-brains-alan-future-not-included-v0-8ndq7ox96wo81.jpg?auto=webp&s=973644328f60d7873b09c7d8578f95b16d0308dd',
			'Brain',
			'Brain',
			'Great place to study. I recommend the triple banana super split.'
		);

		const review4 = _generate_customer_review(
			'https://image.pbs.org/video-assets/pbs-kids/arthur/241627/images/kids-mezzannine-16x9_758.jpg',
			'Buster',
			'Buster',
			"Saw an alien here one time, and I come here every week to try to see it again. It's been 5 months and no luck. Keep your eyes peeled! (get it? like a banana, they put bananas on ice cream and they call it a banana split, it's one of the things they sell here and it's really really good)"
		);

		const review5 = _generate_customer_review(
			'https://i.ytimg.com/vi/RUbJq_ugIJI/maxresdefault.jpg',
			'Muffy',
			'Muffy',
			"Sometimes I go here to see what poor people eat. Maybe it's not so bad to be poor. Just kidding ha!"
		);

		const review6 = _generate_customer_review(
			'https://d3crmev290s45i.cloudfront.net/frames/1009587xxx/1009587020/1009587020-disc001-file001-frame00180-size-original.jpg',
			'Timmy',
			'Timmy',
			'it s verry bad i fownd poop in iece creem -tiMMy rulez!!1'
		);

		const review7 = _generate_customer_review(
			'https://yt3.googleusercontent.com/ytc/AGIKgqM1rslfN_yklJrqRJNF0VuqKG6VtK5SbDgnD_DaXw=s900-c-k-c0x00ffffff-no-rj',
			'Arthur',
			'Arthur',
			'The best in town!'
		);

		const all_reviews = [
			review1,
			review2,
			review3,
			review4,
			review5,
			review6,
			review7,
		];
		all_reviews.forEach((r) => {
			reviews_grid.appendChild(r);
		});
		review.appendChild(review_title);
		review.appendChild(reviews_grid);
		return review;
	};

	const generate_welcome = () => {
		const content_div = document.querySelector('#content');

		const welcome = create_tag('div', 'welcome');

		const welcome_top = _generate_welcome_top();
		const news = _generate_news();
		const happy_customers = _generate_reviews();

		welcome.appendChild(welcome_top);
		welcome.appendChild(news);
		welcome.appendChild(happy_customers);

		content_div.appendChild(welcome);
	};

	return { generate_welcome };
})();

export default Welcome;
