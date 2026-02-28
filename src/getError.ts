import { FormGroup } from '@angular/forms';
import { ERROR_MESSAGES } from './errors-messages';

export function getErrorMessage(controlName: string,form:FormGroup,fieldName:string): string | null {
  const control = form.get(controlName);

  if (!control || !control.errors || !control.touched) {
    return null;
  }

  const firstErrorKey = Object.keys(control.errors)[0];

  if (firstErrorKey === 'required') {
    return  fieldName+' field is required';
  }
  else if (firstErrorKey=='minlength'){
    return fieldName+' must be at least 8 characters';
  }
  else if(firstErrorKey=='maxlength'){
    return fieldName+' must not exceed'+ control?.errors['maxlength'].requiredLength+' characters'
  }
  

  return ERROR_MESSAGES[firstErrorKey] ?? null;
}