import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-lession-select',
  templateUrl: './lession-select.page.html',
  styleUrls: ['./lession-select.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, FormsModule],
})
export class LessionSelectPage implements OnInit {
  formLession!: FormGroup;
  formData = [
    {
      type: 'select',
      placeholder: 'select placehoder',
      name: 'selectGroup1234',
      multiple: true,
      values: [
        { label: 'option-1', value: 'option-1', selected: true },
        { label: 'option-2', value: 'option-2', selected: false },
        { label: 'option-3', value: 'option-3', selected: true },
      ],
    },
    {
      type: 'select',
      placeholder: 'select placehoder',
      name: 'selectGroup1234',
      multiple: true,
      values: [
        { label: 'option-1', value: 'option-1', selected: true },
        { label: 'option-2', value: 'option-2', selected: true },
        { label: 'option-3', value: 'option-3', selected: false },
      ],
    },
  ];
  formControls:any={};
 
  constructor(private fb: FormBuilder) {
   
  }

  ngOnInit() {
    
   
    this.formData.forEach((item, index) => {
      const getValues=item.values
        .filter((filterValues) => filterValues.selected)
        .map((selectedOption)=>selectedOption.value)
        console.log(getValues)
        this.formControls[`select${index}`] = new FormControl(getValues);
    });
    this.formHander();
  }

  formHander() {

    this.formLession = this.fb.group(this.formControls);
    console.log(this.formLession.value)
  }

  getSelectedValue() {
    
  }

  submitHandler(){
    console.log('submit',this.formLession.value)
  }
}
