function openList() {
	
// --------------------------------------------------------------
	const listBtn_1 = document.querySelector('.list-open-btn_1');
	const list_1 = document.querySelector('.list-description_1');
	const listIcon_1 = document.querySelector('.list-icon_1');

	listBtn_1.onclick = function () {
		list_1.classList.toggle('list-description--open_1');
		listIcon_1.classList.toggle('list-icon--active_1');
		document.body.classList.toggle('no-scroll');
	};

// --------------------------------------------------------------
	const listBtn_2 = document.querySelector('.list-open-btn_2');
	const list_2 = document.querySelector('.list-description_2');
	const listIcon_2 = document.querySelector('.list-icon_2');

	listBtn_2.onclick = function () {
		list_2.classList.toggle('list-description--open_2');
		listIcon_2.classList.toggle('list-icon--active_2');
		document.body.classList.toggle('no-scroll');
	};

// --------------------------------------------------------------
	const listBtn_3 = document.querySelector('.list-open-btn_3');
	const list_3 = document.querySelector('.list-description_3');
	const listIcon_3 = document.querySelector('.list-icon_3');

	listBtn_3.onclick = function () {
		list_3.classList.toggle('list-description--open_3');
		listIcon_3.classList.toggle('list-icon--active_3');
		document.body.classList.toggle('no-scroll');
	};

// --------------------------------------------------------------
	const listBtn_4 = document.querySelector('.list-open-btn_4');
	const list_4 = document.querySelector('.list-description_4');
	const listIcon_4 = document.querySelector('.list-icon_4');

	listBtn_4.onclick = function () {
		list_4.classList.toggle('list-description--open_4');
		listIcon_4.classList.toggle('list-icon--active_4');
		document.body.classList.toggle('no-scroll');
	};
}

export default openList;