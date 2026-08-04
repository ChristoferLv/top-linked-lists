# Linked Lists

Data structure project developed as part of the JavaScript path of [The Odin Project](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript), focused on implementing linked lists and node manipulation operations.

## Project Objective

The main objective was to practice:
- Modeling a custom data structure in JavaScript
- Linking nodes with `next` and `prev` references
- Classic linked list operations (insertion, reading, and searching)
- Encapsulation with private fields and class methods

## What is it?

An implementation of `LinkedList` in JavaScript (doubly linked list style) with methods to:
- Insert elements at the beginning and end
- Check size, head, and tail
- Access values by index
- Remove the first element
- Check whether a value exists
- Find the index of a value
- Generate a string representation of the list

The class uses a factory to create nodes and a separate file to demonstrate usage via `console.log`.

## How to use

1. Enter the project folder:
   `Javascript/top-linked-lists`
2. Run the demo file in an environment with ES Modules support:
   `node index.js`

## Features

- **`append(value)`**: adds a new value to the end of the list
- **`prepend(value)`**: adds a new value to the beginning of the list
- **`size()`**: returns the current number of elements
- **`head()`**: returns the value of the first element
- **`tail()`**: returns the value of the last element
- **`at(index)`**: returns the value at the requested position
- **`pop()`**: removes and returns the first element's value
- **`contains(value)`**: checks whether a value exists in the list
- **`findIndex(value)`**: returns the index of the value or `-1` if not found
- **`toString()`**: returns a formatted string representation of the list

## File Structure

- `LinkedList.js`: implementation of the `LinkedList` class and node factory
- `index.js`: demo script for list operations

## Technologies Used

- JavaScript (ES Modules)

---

Project developed following: [The Odin Project - Linked Lists](https://www.theodinproject.com/lessons/javascript-linked-lists)

📍 **Main repository with all projects**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
