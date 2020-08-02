import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nested-form-two',
  templateUrl: './nested-form-two.component.html',
  styleUrls: ['./nested-form-two.component.scss']
})
export class NestedFormTwoComponent implements OnInit {

  nameControl = new FormControl(null);
  dobControl = new FormControl(null);
  isInActivePeriodControl = new FormControl(null);
  organizationalUnitNameControl = new FormControl(null);
  form = new FormGroup({
    dateOfBirth: this.dobControl,
    name: this.nameControl,
    isInActivePeriod: this.isInActivePeriodControl,
    organizationalUnitName: this.organizationalUnitNameControl
  });
  constructor() { }

  ngOnInit(): void {
  }

}
