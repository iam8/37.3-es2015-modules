// Ioana A Mititean
// 37.3 - ES2015 Modules

/**
 * Perform some operations using some imported items (ES2015 modules imports).
 */

import fruit from "./foods";
import {choice, remove} from "./helpers";


// Randomly draw a fruit from the array
const fruitChoice = choice(fruit);

// Log messages
console.log(`I'd like one ${fruitChoice}, please.`);
console.log(`Here you go: ${fruitChoice}.`);
console.log("Delicious! May I have another?");

// Remove the fruit from the array
remove(fruit, fruitChoice);

// Log final message
console.log(`I'm sorry, we're all out. We have ${fruit.length} other fruit types left.`);
