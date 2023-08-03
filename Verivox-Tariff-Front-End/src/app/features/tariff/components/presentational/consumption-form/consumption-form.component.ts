import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMPTY_STRING_VALUE } from 'src/app/utils/simple-constants.const';

@Component({
  selector: 'app-consumption-form',
  templateUrl: './consumption-form.component.html',
  styleUrls: ['./consumption-form.component.scss']
})
export class ConsumptionFormComponent {
  @Output() consumptionChanges = new EventEmitter<number>();

  readonly form = this.buildForm();

  constructor(private builder: FormBuilder) {}

  private buildForm() {
    return this.builder.group({
      consumption: [undefined as number | undefined, [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  submit() {
    const consumption = this.form.get('consumption')?.value;
    this.consumptionChanges.emit(consumption!);
  }
}
