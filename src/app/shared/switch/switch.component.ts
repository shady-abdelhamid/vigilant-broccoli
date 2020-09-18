import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'vb-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent implements OnInit {
  /** input for initial value */
  @Input('value') value: boolean;

  /** output emit for value change */
  @Output('valueChange') valueChange = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  switch() {
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }
}
