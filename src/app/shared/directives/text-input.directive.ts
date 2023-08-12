import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import {AbstractControl} from "@angular/forms";

@Directive({
  selector: "[appTextInput]",
})
export class TextInputDirective {
  @Input()
  appTextInput: AbstractControl;

  constructor(private eleRef: ElementRef<HTMLInputElement>) {
    this.eleRef.nativeElement
      .classList.add("text-input");
    this.eleRef.nativeElement.onchange = () => {
      if (this.appTextInput.touched || this.appTextInput.dirty) {
        if (this.appTextInput.valid) {
          this.eleRef.nativeElement
            .classList.remove("text-input-invalid");
          this.eleRef.nativeElement
            .classList.add("text-input");
        } else {
          this.eleRef.nativeElement
            .classList.remove("text-input");
          this.eleRef.nativeElement
            .classList.add("text-input-invalid");
        }
      }
    };
  }
}
