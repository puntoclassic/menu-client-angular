import { AbstractControl } from "@angular/forms";

export class Utils {
  static getTextInputClass(control: AbstractControl) {
    return {
      "text-input-invalid": !control.valid && control.touched,
      "text-input": control.valid || !control.touched,
    };
  }
}
