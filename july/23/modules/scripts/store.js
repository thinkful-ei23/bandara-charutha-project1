/* global shoppingList, cuid, $ */
// eslint-disable-next-line no-unused-vars

const STORE = {
    items: [
        { id: cuid(), name: 'apples', checked: false },
        { id: cuid(), name: 'oranges', checked: false },
        { id: cuid(), name: 'milk', checked: true },
        { id: cuid(), name: 'bread', checked: false }
      ],
      hideCheckedItems: false,
      searchTerm: ''
    }

const store = (function () {

    // const foo = 'bar';

    let items = STORE.items;
    let hideCheckedItems = STORE.hideCheckedItems;
    let searchTerm = STORE.searchTerm;

    return items;
    return hideCheckedItems;
    return searchTerm;
}() );

