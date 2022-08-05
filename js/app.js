/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navMenu = document.getElementsByClassName("navbar__menu");

document.getElementById("navbar__list");

const landscapes = document.createElement("li");
const stillLife = document.createElement("li");
const portraits = document.createElement("li");

landscapes.textContent = "LandScapes";
stillLife.textContent = "Still-Life";
portraits.textContent = "Portraits";


navbar__list.append(landscapes, stillLife, portraits);

navMenu.appendChild(navbar__list);






// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


