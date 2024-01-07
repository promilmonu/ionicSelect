import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-lession-select-array',
  templateUrl: './lession-select-array.page.html',
  styleUrls: ['./lession-select-array.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LessionSelectArrayPage implements OnInit {
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
   
  ];
  formControls:any={};
 
  constructor(private fb: FormBuilder) {
   
  }

  ngOnInit() {
    
    this.formData.forEach((item, index) => {
    item.values
        .forEach((filterValues) => {
          
          if(filterValues.selected){
            console.log(filterValues.value)
            this.formControls["selectGroup"] = new FormArray([]);
          }
          
          
        })
        
      });
      this.formHander();
  }

  formHander() {

    this.formLession = this.fb.group(this.formControls);
    console.log(this.formLession.value)
    this.addarray()
  }

  getSelectedValue() {
    
  }

  addarray(){
    const data = this.formLession.controls['selectGroup'].value as FormArray

    data.push(new FormControl('asdfasdfsa'))
  }

  submitHandler(){
    console.log('submit',this.formLession.value)
  }

}
