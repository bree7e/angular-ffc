import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => QuantityInputComponent),
    multi: true,
  }],
})
export class QuantityInputComponent implements ControlValueAccessor {
  value = 0;
  disabled = false;
  private onChange = (value: any) => {};
  private onTouched = () => {};

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  writeValue(outsideValue: number) {
    // получить из Forms API
    this.value = outsideValue;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  updateValue(insideValue: number) {
    this.value = insideValue; // html
    this.onChange(insideValue); // уведомить Forms API
    this.onTouched();
  }
}
