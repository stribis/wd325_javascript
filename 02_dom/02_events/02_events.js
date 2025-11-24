/* Event Listener:
   What is an event listener?

   Imagine a Doorbell and a Listener:
   A button on a webpage is like a doorbell.
   An event is like someone pressing the doorbell (the action).
   An event listener is like you standing by the door and listening for the doorbell to ring.
   When the doorbell rings (the event happens), you react by opening the door (a specific function runs).

   What is an Event?
   An event is something that happens on a webpage.
    - A button is clicked.
    - The mouse is moved.
    - A key is pressed.
    - The page is scrolled.
    - ... (like almost every interaction ;))

   What is an Event Listener?
   An event listener is like a watcher and as the name already implies: "something that is listening ...".
   It waits for a specific event to happen and then, when it happened, runs some code (a callback function) in response.

   What is addEventListener?
   The addEventListener method is how we tell the webpage to listen for a specific event on an element
   (like a button, input box, or the whole page). Technically we are "attaching" / "putting" the listener-thingy
   (mentioned above) to a specific element so that it becomes able to do the "listening" and returning the callback
   function.

   Adding an event listener to the DOM:
   To add an event listener to an element, you use the 'addEventListener()' method.
   This method allows you to define a specific function that will execute
   when the specified event occurs on the target element.

   syntax: element.addEventListener(event, listener, options);
   Parameters:
    - event: A string representing the name of the event (e.g., "click", "mouseover", "keydown").
    - listener: A function that will be executed when the event occurs.
            - can be an anonymous function, function expression or an arrow function (see basics/06_functions)
    - options (optional): An object or a boolean that specifies options for the listener:
        capture: If true, the event is captured in the capturing phase.
        once: If true, the listener is executed only once and then removed.
        passive: If true, indicates that the listener will not call preventDefault()
*/

const btnAdd = document.querySelector('.btn-add');
const btnRemove = document.querySelector('.btn-remove');
const btnRemoveAll = document.querySelector('.btn-remove-all');

btnAdd.addEventListener('click', () => {
  // console.log('An event took place. The button was clicked!');

  // 1 Create a Div
  const box = document.createElement('div');
  // 2 add class "box"
  box.classList.add('box');
  // 3 add attribute "aria-label" "example"
  box.setAttribute('aria-label', 'example');
  // Set a new style attribue
  // Background Color using RGB
  box.setAttribute(
    'style',
    `background-color: rgb(${randomColor()},0,${randomColor()})`
  );
  // 4 add div to container
  document.querySelector('.container').appendChild(box);
});

btnRemove.addEventListener('click', () => {
  if (document.querySelector('.box:last-of-type')) {
    // select last box in container
    const lastBox = document.querySelector('.box:last-of-type');
    // Remove the selected box
    lastBox.remove();
  } else {
    alert('No boxes to remove');
  }
});

btnRemoveAll.addEventListener('click', () => {
  if (document.querySelector('.box')) {
    document.querySelectorAll('.box').forEach((box) => box.remove());
  }
  // document.querySelector('.container').innerHTML = '';
});

function randomColor() {
  // Generate a number between 0 and 255
  return Math.floor(Math.random() * 255);
}
