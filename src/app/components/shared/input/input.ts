import { Attribute, Component, forwardRef, inject, Input, input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR,NgControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'form-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInput),
      multi: true,
    },
  ],
})
export class FormInput implements ControlValueAccessor{
  value: string = '';
  disabled = false;
  
  constructor(
    @Attribute('label') public label: string,
    @Attribute('placeholder')public placeholder:string,
    @Attribute('type')public type:string
  ) {
   
  }
 @Input('error') error:string|undefined |null;

  // Functions Angular gives us
  onChange = (value: string) => {};
  onTouched = () => {};

  // Called when form updates value
  writeValue(value: string): void {
    this.value = value;
  }

  // Register change function
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Register touched function
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // When user types
  updateValue(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }

  markTouched() {
    this.onTouched();
  }
}
