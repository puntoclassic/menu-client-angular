import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import {AbstractControl} from "@angular/forms";

@Directive({
  selector: "[appFieldErrors]",
})
export class FieldErrorsDirective implements OnInit {
  @Input()
  appFieldErrors: AbstractControl;

  constructor(
    private templateRef: TemplateRef<any>,
    private vcr: ViewContainerRef,
  ) {
  }

  ngOnInit(): void {
    this.appFieldErrors.valueChanges.subscribe(() => {
      if (this.appFieldErrors.errors && (this.appFieldErrors.touched || this.appFieldErrors.dirty)) {
        this.vcr.clear();
        this.vcr.createEmbeddedView(this.templateRef);
      } else {
        this.vcr.clear();
      }
    });
  }
}
