import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appTextInput]',
})
export class TextInputDirective implements AfterViewInit {
  @Input()
  appTextInput: AbstractControl;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.updateValidationClass();
  }

  @HostListener('blur') onBlur() {
    this.updateValidationClass();
  }

  @HostListener('input') onInput() {
    this.updateValidationClass();
  }

  private updateValidationClass() {
    if (
      this.appTextInput.invalid &&
      (this.appTextInput.dirty || this.appTextInput.touched)
    ) {
      this.renderer.removeClass(this.el.nativeElement, 'text-input');
      this.renderer.addClass(this.el.nativeElement, 'text-input-invalid');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'text-input-invalid');
      this.renderer.addClass(this.el.nativeElement, 'text-input');
    }
  }
}
