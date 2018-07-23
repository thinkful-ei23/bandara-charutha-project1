/* global shoppingList, cuid, $, Items */
// eslint-disable-next-line no-unused-vars

const store = (function () {

	let items = [
		{ id: cuid(), name: 'apples', checked: false },
		{ id: cuid(), name: 'oranges', checked: false },
		{ id: cuid(), name: 'milk', checked: true },
		{ id: cuid(), name: 'bread', checked: false }
	];
	let hideCheckedItems = false;
	let searchTerm = '';
    
	const findById = function(id) {
		return store.items.find(item => item.id === id);
	};

	const addItem = function(name) {
		try {
			Items.validateName(name);
			Items.create(name);
			this.items(items.create(name))
		} catch(error) {
			console.log('Cannot add items:' + error.message);
		}
	};

	const findAndToggleChecked = function(id) {
		const foundItem = this.findById(id);
		foundItem.checked = !foundItem.checked;

	};

	return {items, hideCheckedItems, searchTerm, findById, addItem, findAndToggleChecked};
}() );