function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // selects the audio file present with the pressed key
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);   // stores the div element of the pressed key in the variable
  if (!audio) return; // If no audio then nothing return


  key.classList.add('playing'); // Add class 'playing' to the key variable
  audio.currentTime = 0; // Set current time position to 0 seconds
  audio.play(); // Play the audio file
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;// Our statement will return nothing if there is not any property with the property name of 'transform'
  e.target.classList.remove('playing'); // If there is 'transform' property, 'playing' class will be removed from the element
}



const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach((key => key.addEventListener('transitionend', removeTransition)));



/* This event listener ensure that playSound() calls itself
if any key is pressed in the browser window*/
window.addEventListener('keydown', playSound);
