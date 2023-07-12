// Ioana A Mititean
// 37.3 - ES2015 Modules

/**
 * Array helper functions.
 */


/**
 * Return a randomly-selected item from an array of items.
 */
function choice(items) {
    const randIdx = Math.floor(Math.random() * items.length);
    return items[randIdx];
}


/**
 * Remove the first matching item from items, if the item exists, and return it. Otherwise, return
 * undefined.
 */
function remove(items, item) {
    const itemIdx = items.indexOf(item);

    if (itemIdx !== -1) {

        items.splice(itemIdx, 1);
        return item;
    }
}


export {choice, remove};
