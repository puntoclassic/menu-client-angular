import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Directive({
  selector: "[appSelectInput]",
})
export class SelectInputDirective implements OnInit {
  @Input()
  appSelectInput: AbstractControl;

  constructor(private eleRef: ElementRef<HTMLSelectElement>) {
  }

  ngOnInit(): void {
    this.eleRef.nativeElement
      .classList.add("select-input");
    this.appSelectInput.valueChanges.subscribe(() => {
      if (this.appSelectInput.touched || this.appSelectInput.dirty) {
        if (this.appSelectInput.valid) {
          this.eleRef.nativeElement
            .classList.remove("select-input-invalid");
          this.eleRef.nativeElement
            .classList.add("select-input");
        } else {
          this.eleRef.nativeElement
            .classList.remove("select-input");
          this.eleRef.nativeElement
            .classList.add("select-input-invalid");
        }
      }
    });
  }
}
