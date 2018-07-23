/* global shoppingList, cuid, $, Item */
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
			Item.validateName(name);
			this.items.push(Item.create(name));
		} catch(error) {
			console.log('Cannot add items:' + error.message);
		}
	};

	const findAndToggleChecked = function(id) {
		const foundItem = this.findById(id);
		foundItem.checked = !foundItem.checked;
	};

	const findAndUpdateName = function(id, newName) {
		try {
			Item.validateName(newName);
			this.findById(id);
			store.item.name = newName;
		} catch(error) {
			console.log('Cannot update name: ' + error.message);
		}
	};

	const findAndDelete = function(id) {
		let foundItem = this.findById(id);
		store.items = store.items.filter(item => item !== foundItem);
	};

	const toggleCheckedFilter = function(id) {
		this.hideCheckedItems = !this.hideCheckedItems;
	}

	const setSearchTerm = function(val) {
		this.searchTerm = val;
	}

	return {items, hideCheckedItems, searchTerm, findById, addItem, findAndToggleChecked, findAndUpdateName, findAndDelete, toggleCheckedFilter, setSearchTerm};
}() );