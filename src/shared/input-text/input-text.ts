import { CommonModule } from '@angular/common';
import { Component, Input, input, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NgControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-text.html',
  styleUrl: './input-text.css'
})
export class InputText implements ControlValueAccessor{

  label = input<string>('');
   type = input<string>('text');
   placeHolder = input<string>('');

constructor (@Self() public ngControl :NgControl ) {
  this.ngControl.valueAccessor = this;
}

  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }


  get control() : FormControl {
    return this.ngControl.control as FormControl;
  }

}
