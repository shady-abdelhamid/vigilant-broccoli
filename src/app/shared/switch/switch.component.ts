import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'vb-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent implements OnInit {
  /** input for initial value */
  @Input() value: boolean;

  /** output emit for value change */
  @Output() valueChange = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  switch(): void {
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }
}
