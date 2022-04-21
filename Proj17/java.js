let firstName = window.localStorage.getItem('firstName')

// If no firstName was previously saved...
if (firstName === null) {
  // Ask the user for their first name
  firstName = window.prompt('What is your first name?')

  // If the user clicked "Cancel"...
  if (firstName === null) {
    // Set the first name to "mysterious stranger"
    firstName = 'mysterious stranger'
  // Otherwise, if the user provided a first name...
  } else {
    // Permanently store the user's first name
    window.localStorage.setItem('firstName', firstName)
  }
}

// Get the element where we'll display our greeting
const greetingElement = document.getElementById('greeting')
// Say hi to the user, including their first name
greetingElement.textContent = 'Hi, ' + firstName
