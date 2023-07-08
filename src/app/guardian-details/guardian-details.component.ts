import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { FormDataService } from '../form-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-guardian-details',
  templateUrl: './guardian-details.component.html',
  styleUrls: ['./guardian-details.component.css']
})
export class GuardianDetailsComponent {
  guardianForm!: FormGroup;
  ageValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value) {
      const birthday = new Date(control.value);
      const today = new Date();
      const age = today.getFullYear() - birthday.getFullYear();

      if (age < 18) {
        return { 'invalidAge': true };
      }
    }
    return null;
  }
  constructor(private formDataService: FormDataService, private router: Router) { }

  ngOnInit(): void {
    this.guardianForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
      dob: new FormControl('', [Validators.required, this.ageValidator]),
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
  submitGuardian() {
    this.formDataService.setFormData('guardian',this.guardianForm.value );
    console.log('t', this.guardianForm.value)
    this.router.navigate(['/form-grid']);
  }
}
