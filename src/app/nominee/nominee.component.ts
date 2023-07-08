import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from '../form-data.service';
@Component({
  selector: 'app-nominee',
  templateUrl: './nominee.component.html',
  styleUrls: ['./nominee.component.css']
})
export class NomineeComponent {
  userForm!: FormGroup;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
      dob: new FormControl('', [Validators.required]),
      email: new FormControl(''),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      proofType: new FormControl('', [Validators.required]),
      idNumber: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9_\\-][A-Za-z0-9_\\-]*')]),
      addr1: new FormControl('', [Validators.required]),
      addr2: new FormControl(''),
      addr3: new FormControl(''),
      landmark: new FormControl(''),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
    });
  }
  SubmitUser() {
    this.formDataService.setFormData('nominee', this.userForm.value);
    const birthday = new Date(this.userForm.controls['dob'].value);
    const today = new Date();
    const age = today.getFullYear() - birthday.getFullYear();
    if (age < 18) {
      console.log('ss', age);
      this.router.navigateByUrl('/guardian-details');
    } else {
      this.router.navigate(['/form-grid']);
    }
  }
}
