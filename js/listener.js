var elUsername = document.getElementById('username');   // Username input
var elMsg = document.getElementById('feedback');        // Error msg element

function checkUsername(minLength) {                     // Declare function
  if (elUsername.value.length < minLength) {            // If username too short
    // Set the error message
    elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
  } else {                                              // Otherwise
    elMsg.innerHTML = '';                               // Clear msg
  }
}

elUsername.addEventListener('blur', function() {        // When it loses focus
  checkUsername(8);                                     // Pass argument here
}, false);


var elPassword = document.getElementById('password');    // Password input
var elNote = document.getElementById('regeneration');    // Error msg element

function checkPassword(minExtent) {                      // Declare function
  if (elPassword.value.length < minExtent) {             // If password too short
    // Set the error message
    elNote.innerHTML = 'Username must be ' + minExtent + ' characters or more';
  } else {                                               // Otherwise
    elNote.innerHTML = '';                               // Clear msg
  }
}

elPassword.addEventListener('blur', function() {         // When it loses focus
  checkPassword(12);                                     // Pass argument here
}, false);
