import LinkedList from "./LinkedList.js";

const list = new LinkedList();

console.log("List:", list.toString());
console.log("Size: ", list.size());


list.append(2);
console.log("List:", list.toString());
console.log("Size: ", list.size());


list.append(33);
console.log("List:", list.toString());

list.prepend(11);
console.log("List:", list.toString());

list.append(23);
console.log("List:", list.toString());

console.log("Size: ", list.size());
console.log("Head: ", list.head());
console.log("Tail: ", list.tail());
console.log("At 2: ", list.at(2));
console.log("At 1: ", list.at(1));
console.log("At 4: ", list.at(4));
console.log("Pop: ", list.pop());
console.log("List:", list.toString());
console.log("Size: ", list.size());
console.log("Contains 11: ", list.contains(11));
console.log("Contains 2: ", list.contains(2));
console.log("FindIndex 33: ", list.findIndex(33));
