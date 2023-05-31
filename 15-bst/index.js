const TreeNode = (val) => {
	let left = null;
	let right = null;

	const set_val = (new_val) => {
		val = new_val;
	};

	const get_val = () => {
		return val;
	};

	const set_left_child = (next_node) => {
		left = next_node;
	};

	const get_left_child = () => {
		return left;
	};

	const set_right_child = (next_node) => {
		right = next_node;
	};

	const get_right_child = () => {
		return right;
	};

	return {
		set_val,
		get_val,
		set_left_child,
		get_left_child,
		set_right_child,
		get_right_child,
	};
};

const BST = () => {
	let root = null;
	let cur_size = 0;
	let print_str = [];

	// Takes a list of integers to create a balanced tree
	const build_tree = (nums) => {
		// Remove duplicates and sort list
		nums = Array.from(new Set(nums));
		nums.sort((a, b) => {
			return a - b;
		});

		const build_tree_helper = (cur_node, arr) => {
			if (arr.length === 0) {
				cur_node = null;
				return cur_node;
			}

			// Make sure to do integer division
			const mid = Math.floor(arr.length / 2);

			cur_node = TreeNode(arr[mid]);
			const left_child = build_tree_helper(
				cur_node.get_left_child(),
				arr.slice(0, mid)
			);
			const right_child = build_tree_helper(
				cur_node.get_right_child(),
				arr.slice(mid + 1)
			);
			cur_node.set_left_child(left_child);
			cur_node.set_right_child(right_child);
			return cur_node;
		};

		root = build_tree_helper(root, nums);
		cur_size = nums.length;
		return root;
	};

	// Taken from https://www.theodinproject.com/lessons/javascript-binary-search-trees
	// Prints a tree/subtree
	const prettyPrint = (node, prefix = '', isLeft = true) => {
		if (node === null) {
			return;
		}
		if (node.get_right_child() !== null) {
			prettyPrint(
				node.get_right_child(),
				`${prefix}${isLeft ? '│   ' : '    '}`,
				false
			);
		}

		// Uncomment to print to console
		// console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.get_val()}`);

		print_str.push(`${prefix}${isLeft ? '└── ' : '┌── '}${node.get_val()}`);

		if (node.get_left_child() !== null) {
			prettyPrint(
				node.get_left_child(),
				`${prefix}${isLeft ? '    ' : '│   '}`,
				true
			);
		}
	};

	const insert = (val) => {
		if (root === null) {
			root = TreeNode(val);
			return true;
		}

		let cur_node = root;
		let parent = root;
		while (cur_node !== null) {
			parent = cur_node;
			if (val < cur_node.get_val()) {
				cur_node = cur_node.get_left_child();
			} else if (val > cur_node.get_val()) {
				cur_node = cur_node.get_right_child();
			} else {
				return false;
			}
		}

		const new_node = TreeNode(val);
		if (val < parent.get_val()) {
			parent.set_left_child(new_node);
		} else {
			parent.set_right_child(new_node);
		}

		return true;
	};

	// Return the minimum node in a tree given a starting node
	const _min = (node) => {
		while (node.get_left_child() !== null) {
			node = node.get_left_child();
		}
		return node;
	};

	const remove = (val) => {
		if (root === null) {
			return true;
		}

		// Find node to remove
		let remove_node = root;
		let parent = null;
		let is_left_child = false;
		while (remove_node !== null && remove_node.get_val() !== val) {
			parent = remove_node;
			if (val < remove_node.get_val()) {
				remove_node = remove_node.get_left_child();
				is_left_child = true;
			} else if (val > remove_node.get_val()) {
				remove_node = remove_node.get_right_child();
				is_left_child = false;
			}
		}

		if (remove_node === null || remove_node.get_val() !== val) {
			return false;
		}

		let replacement_node = null;
		if (
			remove_node.get_left_child() === null &&
			remove_node.get_right_child() === null
		) {
			// Case 1: node to remove is a leaf node
			replacement_node = null;
		} else if (remove_node.get_left_child() === null) {
			// Case 2a: node to remove has one child which is a right child
			replacement_node = remove_node.get_right_child();
		} else if (remove_node.get_right_child() === null) {
			// Case 2b: node to remove has one child which is a left child
			replacement_node = remove_node.get_left_child();
		} else {
			// Case 3: node to remove has 2 children
			replacement_node = _min(remove_node.get_right_child());
			remove(replacement_node.get_val());
			replacement_node.set_left_child(remove_node.get_left_child());
			replacement_node.set_right_child(remove_node.get_right_child());
		}

		if (parent === null) {
			// Removing root
			root = replacement_node;
		} else if (is_left_child) {
			parent.set_left_child(replacement_node);
		} else {
			parent.set_right_child(replacement_node);
		}

		return true;
	};

	const find = (val) => {
		let node = root;
		while (node !== null) {
			if (val < node.get_val()) {
				node = node.get_left_child();
			} else if (val > node.get_val()) {
				node = node.get_right_child();
			} else {
				return node;
			}
		}
		return null;
	};

	// Passes nodes to @func as parameters in BFS order
	const level_order = (func) => {
		if (root === null) {
			return false;
		}

		let queue = [root];

		while (queue.length > 0) {
			const cur_node = queue.shift();
			if (cur_node.get_left_child() !== null) {
				queue.push(cur_node.get_left_child());
			}
			if (cur_node.get_right_child() !== null) {
				queue.push(cur_node.get_right_child());
			}
			func(cur_node);
		}

		return true;
	};

	// Passes nodes to @func as parameters in DFS preorder
	const preorder = (func) => {
		const preorder_helper = (node, func) => {
			if (node === null) {
				return false;
			}

			func(node);
			preorder_helper(node.get_left_child(), func);
			preorder_helper(node.get_right_child(), func);
			return true;
		};

		return preorder_helper(root, func);
	};

	// Passes nodes to @func as parameters in DFS inorder
	const inorder = (func) => {
		const inorder_helper = (node, func) => {
			if (node === null) {
				return false;
			}

			inorder_helper(node.get_left_child(), func);
			func(node);
			inorder_helper(node.get_right_child(), func);
			return true;
		};

		return inorder_helper(root, func);
	};

	// Passes nodes to @func as parameters in DFS postorder
	const postorder = (func) => {
		const postorder_helper = (node, func) => {
			if (node === null) {
				return false;
			}

			postorder_helper(node.get_left_child(), func);
			postorder_helper(node.get_right_child(), func);
			func(node);
			return true;
		};

		return postorder_helper(root, func);
	};

	// Number of edges in longest path from @node to a leaf node
	// BFS from @node and count levels
	const height = (node) => {
		if (node === null) {
			return -1;
		}

		let queue = [{ node, level: 0 }];
		let level = 0;
		while (queue.length > 0) {
			const cur_node = queue.shift();
			level = Math.max(cur_node.level, level);
			if (cur_node.node.get_left_child() !== null) {
				queue.push({
					node: cur_node.node.get_left_child(),
					level: cur_node.level + 1,
				});
			}
			if (cur_node.node.get_right_child() !== null) {
				queue.push({
					node: cur_node.node.get_right_child(),
					level: cur_node.level + 1,
				});
			}
		}

		return level;
	};

	// Number of edges from @node to root node
	const depth = (node) => {
		if (node === null) {
			return -1;
		}

		let cur_node = root;
		let num_edges = 0;
		while (cur_node !== null) {
			if (node.get_val() < cur_node.get_val()) {
				cur_node = cur_node.get_left_child();
			} else if (node.get_val() > cur_node.get_val()) {
				cur_node = cur_node.get_right_child();
			} else {
				return num_edges;
			}
			num_edges++;
		}

		if (cur_node === null) {
			return -1;
		}
	};

	// Checks if heights of all nodes' left and right differ in height
	// by at most 1
	const is_balanced = () => {
		let is_tree_balanced = true;
		const height_helper = (node, height) => {
			if (node === null) {
				return height;
			}

			let left_height = height;
			let right_height = height;
			if (node.get_left_child() !== null) {
				left_height = height_helper(node.get_left_child(), height + 1);
			}
			if (node.get_left_child() !== null) {
				right_height = height_helper(
					node.get_right_child(),
					height + 1
				);
			}
			if (Math.abs(left_height - right_height) > 1) {
				is_tree_balanced = false;
			}
			return Math.max(left_height, right_height);
		};

		height_helper(root, 0);
		return is_tree_balanced;
	};

	const rebalance = () => {
		let all_vals = [];
		inorder((node) => {
			all_vals.push(node.get_val());
		});
		build_tree(all_vals);
	};

	const clear = () => {
		root = null;
	};

	const get_pretty_print = () => {
		print_str = [];
		prettyPrint(root);
		return print_str;
	};

	const get_root = () => {
		return root;
	};

	return {
		build_tree,
		insert,
		remove,
		find,
		level_order,
		preorder,
		inorder,
		postorder,
		height,
		depth,
		is_balanced,
		rebalance,
		prettyPrint,
		clear,
		get_pretty_print,
		get_root,
	};
};

const display_tree = (tree) => {
	const display = document.querySelector('.bst-display');
	display.textContent = tree.get_pretty_print().join('\n');
};

const init_tree_ui = (tree) => {
	const build_tree = document.querySelector('.build-tree');
	build_tree.addEventListener('click', () => {
		const input = prompt(
			'Enter a list of integers separated by a space, e.g. 10 2 8 9 2 -1 0'
		);
		if (input === null) {
			return;
		}

		let nums = input.split(' ');
		let int_nums = [];
		for (let i = 0; i < nums.length; i++) {
			if (isNaN(nums[i])) {
				return;
			}
			int_nums.push(Number(nums[i]));
		}
		tree.build_tree(int_nums);
		display_tree(tree);
	});

	const insert = document.querySelector('.insert');
	insert.addEventListener('click', () => {
		const input = prompt('Enter an integer');
		if (isNaN(input) || input === null) {
			return;
		}

		tree.insert(Number(input));
		display_tree(tree);
	});

	const remove = document.querySelector('.remove');
	remove.addEventListener('click', () => {
		const input = prompt('Enter an integer');
		if (isNaN(input) || input === null) {
			return;
		}

		tree.remove(Number(input));
		display_tree(tree);
	});

	const find = document.querySelector('.find');
	find.addEventListener('click', () => {
		const input = prompt('Enter an integer');
		if (isNaN(input) || input === null) {
			return;
		}
		let print_str = '';
		if (tree.find(Number(input)) === null) {
			print_str = `${input} is NOT in the tree`;
		} else {
			print_str = `${input} is in the tree`;
		}
		alert(print_str);
	});

	const level_order = document.querySelector('.level-order');
	level_order.addEventListener('click', () => {
		let arr = [];
		tree.level_order((node) => {
			arr.push(node.get_val());
		});
		if (arr.length === 0) {
			alert('Tree is empty!');
			return;
		}

		alert(arr.join(', '));
	});

	const preorder = document.querySelector('.preorder');
	preorder.addEventListener('click', () => {
		let arr = [];
		tree.preorder((node) => {
			arr.push(node.get_val());
		});
		if (arr.length === 0) {
			alert('Tree is empty!');
			return;
		}

		alert(arr.join(', '));
	});

	const inorder = document.querySelector('.inorder');
	inorder.addEventListener('click', () => {
		let arr = [];
		tree.inorder((node) => {
			arr.push(node.get_val());
		});
		if (arr.length === 0) {
			alert('Tree is empty!');
			return;
		}

		alert(arr.join(', '));
	});

	const postorder = document.querySelector('.postorder');
	postorder.addEventListener('click', () => {
		let arr = [];
		tree.postorder((node) => {
			arr.push(node.get_val());
		});
		if (arr.length === 0) {
			alert('Tree is empty!');
			return;
		}

		alert(arr.join(', '));
	});

	const height = document.querySelector('.height');
	height.addEventListener('click', () => {
		const input = prompt('Enter an integer');
		if (isNaN(input) || input === null) {
			return;
		}

		const node = tree.find(Number(input));
		alert(`Height of node ${input} = ${tree.height(node)}`);
	});

	const depth = document.querySelector('.depth');
	depth.addEventListener('click', () => {
		const input = prompt('Enter an integer');
		if (isNaN(input) || input === null) {
			return;
		}

		const node = tree.find(Number(input));
		alert(`Depth of node ${input} = ${tree.depth(node)}`);
	});

	const is_balanced = document.querySelector('.is-balanced');
	is_balanced.addEventListener('click', () => {
		let print_str = '';
		if (tree.is_balanced()) {
			print_str = 'Tree is balanced';
		} else {
			print_str = 'Tree is NOT balanced';
		}
		alert(print_str);
	});

	const rebalance = document.querySelector('.rebalance');
	rebalance.addEventListener('click', () => {
		tree.rebalance();
		display_tree(tree);
	});

	const clear = document.querySelector('.clear');
	clear.addEventListener('click', () => {
		tree.clear();
		display_tree(tree);
	});
};

function main() {
	const tree = BST();
	init_tree_ui(tree);
	display_tree(tree);
}

window.addEventListener('load', main);
