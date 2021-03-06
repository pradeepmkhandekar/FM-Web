/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {
})();

$(document).ready(function(){
	var bodyEl = document.body,//document.getElementById('mainbody'), 
		content = document.querySelector('.content','.container-fluid'),
		openbtn = document.getElementById('open-button'),
		closebtn = document.getElementById('close-button'),
		isOpen = false;

	function init() {
		initEvents();
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	function initEvents() {
		openbtn.addEventListener('click',toggleMenu);
		if( closebtn ) {
			closebtn.addEventListener('click',toggleMenu);
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener('click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	init();
});