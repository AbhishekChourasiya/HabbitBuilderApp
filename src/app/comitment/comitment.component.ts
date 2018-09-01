import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comitment',
  templateUrl: './comitment.component.html',
  styleUrls: ['./comitment.component.css']
})
export class ComitmentComponent implements OnInit {



  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  atStake: number;

  constructor(private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      daysPerWeek: ['', Validators.required],
      noOfWeeks: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      amount: ['', Validators.required],
    });

    this.thirdFormGroup = this._formBuilder.group({
      umpire: ['', Validators.required],
    });
  }

  form1() {
    console.log(this.firstFormGroup.value);
  }

  form2() {
    console.log(this.secondFormGroup.value);
  }
  submitted() {
    console.log(this.firstFormGroup.value.firstCtrl + ' : ' + this.secondFormGroup.value.secondCtrl);
    this.atStake = this.firstFormGroup.value.noOfWeeks * this.secondFormGroup.value.amount;
    alert('Confirm again for amount:' + this.atStake);
    this.router.navigateByUrl('/habit');
  }

}

