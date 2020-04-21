'use strict';

/**
 * Creates a smooth scroll when using the Nav links
 */
function handleNavScroll() {
  $('nav').find('a').click(event => {
    event.preventDefault();
    let section = $(event.currentTarget).attr('href');
    $('html, body').animate({
      scrollTop: $(section).offset().top
    });
  });
}

/**
 * Opens the navigation menu when the 'Hamburger' is clicked on mobile
 */
function handleHamburgerClick() {
  $('.hamburger').click(event => {
    event.preventDefault();
    $('.menu').toggleClass('hidden');
  });
}



/**
 * Main function to handle all event listeners
 */
function main() {
  handleNavScroll();
  handleHamburgerClick();
}

$(main);