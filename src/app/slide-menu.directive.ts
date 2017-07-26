import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
	selector: '[stakSlideMenu]'
})
export class SlideMenuDirective {

	constructor(element: ElementRef, renderer: Renderer) {
		renderer.listen(element.nativeElement, 'click', (event) => {
			event.preventDefault();
			let wrapper = document.getElementById("wrapper");
			if(wrapper.className.indexOf('toggled') === -1) {
				wrapper.className += ' toggled';
			} else {
				wrapper.className = wrapper.className.replace(' toggled','');
			}
		});
	}
}
