/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */
// Opens and closes navigation menu

const primaryHeader = document.querySelector('.primary-header')
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const warnMessage = document.querySelector(".alert-info");

navToggle.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible") ? navToggle.setAttribute("aria-expanded", false) : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay")
})
