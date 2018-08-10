import $ from 'jquery';

class MobileMenu{
	constructor(){
		this.siteHeader = $(".site-header");
		this.memuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.events();
	}
	
	events(){
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}
	
	toggleTheMenu(){
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.memuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

export default MobileMenu;