import {
  AbstractControl,
  AsyncValidatorFn,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";

export function passwordMatch(): ValidatorFn {
  return (control: FormGroup): ValidationErrors | null => {
    var passwordField = control.get("password");
    var confirmPasswordField = control.get("confirmPassword");
    if (passwordField.errors && !confirmPasswordField.errors) {
      return;
    }
    if (passwordField.value != confirmPasswordField.value) {
      confirmPasswordField.setErrors({ passwordMatch: true });
      return null;
    } else {
      confirmPasswordField.setErrors(null);
      return null;
    }
  };
}
