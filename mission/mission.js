// Select the dropdown element out of the DOM
const themeSelector = document.querySelector('#theme-selector');

function changeTheme() {
  // Check the current value of the select element
  const selectedTheme = themeSelector.value;

  // If the value is "dark", add the "dark" class to the body and change the logo
  if (selectedTheme === 'dark') {
    document.body.classList.add('dark');
    document.querySelector('img').src = 'byui-logo_white.png';
  } else {
    // Otherwise, remove the "dark" class and change the logo back to blue
    document.body.classList.remove('dark');
    document.querySelector('img').src = 'byui-logo_blue.webp';
  }
}

// Add an event listener to the themeSelector element
// Use the changeTheme function as the event handler function
themeSelector.addEventListener('change', changeTheme);
