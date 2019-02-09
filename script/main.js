const hamburgMenuOpenBtn = document.querySelector(".hamburger__menu-link");
const hamburgMenuCloseBtn = document.querySelector(".hamburger__menu-closeBtn");
const hamburgMenu = document.querySelector(".hamburger__menu-wrap");
let op = 0.19;

hamburgMenuOpenBtn.addEventListener('click', e => {
	hamburgMenu.classList.add("hamburger__menu-wrap_visible");
	hamburgMenu.style.opacity = 0;

	setTimeout(function fadeIn() {
		if (op < .99) {
			op += 0.2;
			hamburgMenu.style.opacity = op;
			setTimeout(fadeIn, 100);
		}
	})
});

hamburgMenuCloseBtn.addEventListener('click', e => {
	hamburgMenuClose();
});

document.addEventListener('keydown', e => {
	if(e.keyCode == 27) {
		hamburgMenuClose();
	}
});

function hamburgMenuClose() {
	setTimeout(function fadeOut() {
		if (op > 0) {
			op -= 0.2;
			hamburgMenu.style.opacity = op;
			setTimeout(fadeOut, 100);
		} else {
			hamburgMenu.classList.remove("hamburger__menu-wrap_visible");
		}
	})
	//
}

// ************* T E A M    A C C O R D E O N
const acco_list = document.querySelector(".accordeon__list");
const acco_items = acco_list.querySelectorAll(".accordeon__item");

for (const item of acco_items) {
	item.addEventListener("click", eventHandlerAcco);
}

function eventHandlerAcco(e) {
	const item = e.currentTarget;
	const wrap = item.querySelector(".accordeon__item__wrap");
	if (item.classList.contains("active")) {
		closeAccoMenu(item, wrap, "height");
	} else {
		const activeItem = acco_list.querySelector(".accordeon__item.active");
		if(activeItem) {
			const activeWrap = activeItem.querySelector(".accordeon__item__wrap");
			closeAccoMenu(activeItem, activeWrap, "height");
		}
		
		openAccoMenu(item, wrap, "height");
		
	}
}

// ************* M E N U    A C C O R D E O N
const menu_list = document.querySelector(".menus__accordeon");
const menu_items = menu_list.querySelectorAll(".menus__item-wrap");

for (const menuItem of menu_items) {
	menuItem.addEventListener("click", eventHandlerMenu);
}

function eventHandlerMenu(e) {
	const item = e.currentTarget;
	const wrap = item.querySelector(".menus__item-text-wrap");

	if (item.classList.contains("active")) {
		closeAccoMenu(item, wrap, "width");
	} else {
		const activeItem = menu_list.querySelector(".menus__item-wrap.active");
		if (activeItem) {
			const activeWrap = activeItem.querySelector(".menus__item-text-wrap");
			closeAccoMenu(activeItem, activeWrap, "width");
		}
		openAccoMenu(item, wrap, "width");
	}
}

// *************  A C C O R D E O N    F U N C T I O N S
function openAccoMenu(item, wrap, type) {
	const content = wrap.firstElementChild;
	const current = type == "height" ? content.getBoundingClientRect()[type] + "px" : "95%";
	wrap.style[type] = `${current}`;
	item.classList.add("active");	
}

function closeAccoMenu(item, wrap, type) {
	wrap.style[type] = 0;
	item.classList.remove("active");	 
}


//*************** S L I D E R 
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector(".burgers__slider__list");

const step = items.firstElementChild.getBoundingClientRect().width;
const maxRight = (items.children.length - 1) * step;
const minRight = 0;
let currentRight = 0;

//console.log("maxRight = " + maxRight + "	minRight = " + minRight);

rightBtn.addEventListener('click', e => {
	e.preventDefault();
	console.log("step = " + step + "	currentRight = " + currentRight);
	if (currentRight < maxRight) {
		currentRight += step;
		items.style.right = `${currentRight}px`;
	} else {
		currentRight = 0;
		items.style.right = `${currentRight}px`;
	}
});

leftBtn.addEventListener('click', e => {
	e.preventDefault();
	console.log("step = " + step + "	currentRight = " + currentRight);
	if (currentRight > minRight) {
		currentRight -= step;
		items.style.right = `${currentRight}px`;
	} else {
		currentRight = maxRight;
		items.style.right = `${currentRight}px`;
	}
});



