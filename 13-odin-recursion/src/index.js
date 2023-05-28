// Returns the first @length_of_seq Fibonacci numbers iteratively
const fibs = (length_of_seq) => {
	if (length_of_seq <= 0) {
		return [];
	}

	let res = [0];
	for (let i = 1; i < length_of_seq; i++) {
		let next_fib_num;
		if (res.length < 2) {
			next_fib_num = 1;
		} else {
			next_fib_num = res[res.length - 1] + res[res.length - 2];
		}
		res.push(next_fib_num);
	}
	return res;
};

// Returns the first @length_of_seq Fibonacci numbers recursively
const fib_rec = (length_of_seq) => {
	if (length_of_seq <= 0) {
		return [];
	}

	let res = [];
	const fib_helper = (depth, prev, curr) => {
		if (depth === length_of_seq) {
			return curr;
		}
		res.push(prev);
		fib_helper(depth + 1, curr, prev + curr);
	};
	fib_helper(0, 0, 1);

	return res;
};

const merge = (list1, list2) => {
	let res = [];

	let i = 0;
	let j = 0;

	// Keep merging until one list is completely merged
	while (i < list1.length && j < list2.length) {
		if (list1[i] < list2[j]) {
			res.push(list1[i]);
			i++;
		} else {
			res.push(list2[j]);
			j++;
		}
	}

	// Add leftovers from remaining list if there are leftovers
	if (i < list1.length) {
		list1.slice(i).forEach((num) => {
			res.push(num);
		});
	} else if (j < list2.length) {
		list2.slice(j).forEach((num) => {
			res.push(num);
		});
	}

	return res;
};

const divide = (nums) => {
	if (nums.length <= 1) {
		return nums;
	}
	let left = divide(nums.slice(0, nums.length / 2));
	let right = divide(nums.slice(nums.length / 2));
	return merge(left, right);
};

const merge_sort = (nums) => {
	return divide(nums);
};

const init_fib_form = () => {
	const fib_form = document.querySelector('.fib-form');
	fib_form.addEventListener('submit', (e) => {
		e.preventDefault();
		const form_data = new FormData(fib_form);
		const form_props = Object.fromEntries(form_data);
		const res = fib_rec(Number(form_props.length));
		document.querySelector('.fib-res').textContent = res.join(', ');
	});
};

const init_sort_form = () => {
	const sort_form = document.querySelector('.sort-form');
	sort_form.addEventListener('submit', (e) => {
		e.preventDefault();
		const form_data = new FormData(sort_form);
		const form_props = Object.fromEntries(form_data);
		let int_list = form_props.list.split(', ').map((num) => {
			return Number(num);
		});
		console.log(int_list);
		const res = merge_sort(int_list);
		document.querySelector('.sort-res').textContent = res.join(', ');
	});
};

function main() {
	init_fib_form();
	init_sort_form();
	console.log('whoohoo');
	const nums = [10, 9, 8, 7, 5, 29, 19, 1, 0, -543, -2, 4, -5, 0, 9, 1];
	console.log(merge_sort(nums));
}

window.addEventListener('load', () => {
	main();
});
