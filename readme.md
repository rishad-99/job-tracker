1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById returns a single element by its unique ID; getElementsByClassName returns a live collection of all elements with that class; querySelector is a js method that finds the first element matching any CSS selector, while querySelectorAll returns a static list of all matches.
2. How do you create and insert a new element into the DOM?
Ans: We can first create the node using document.createElement('tagName'), customize it (like adding text or classes), and then attach it into the DOM tree using methods like appendChild(), prepend(), or insertBefore() on a parent element.
3. What is Event Bubbling? And how does it work?
Ans: Event Bubbling is the process where an event starts at the most specific target element and then "bubbles up" through in the DOM hierarchy (like a bubble rising in water) until it reaches the window object.
4. What is Event Delegation in JavaScript? Why is it useful?
Ans:This is a pattern where we attach a single event listener to a parent element to manage events for all its current (and future!) children; it’s incredibly useful for improving performance and handling dynamically added elements without re-binding listeners.
5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() stops the browser's default action (like a link opening or a form submitting), whereas stopPropagation() stops the event from traveling further up or down the DOM tree, preventing other parent listeners from firing.