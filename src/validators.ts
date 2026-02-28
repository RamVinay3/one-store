import { AbstractControl, ValidationErrors } from '@angular/forms';

export function namedPatternValidator(
  key: string,
  regex: RegExp
) {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    return regex.test(control.value)
      ? null
      : { [key]: true };
  };
}