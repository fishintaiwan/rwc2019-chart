// var el = document.querySelectorAll('board');
// el.addEventListener('click', toggleClass(el));

function toggleClass(el) { 
  for (i = 0; i < el.length; i++) {
    el.classList.toggle('expanded');
  }
}

document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.board')) return;

	// Don't follow the link
	event.preventDefault();

	// Log the clicked element in the console
    console.log(event.target);
    toggleClass(event.target)

}, false);