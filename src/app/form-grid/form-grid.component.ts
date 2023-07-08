import { Component } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-form-grid',
  templateUrl: './form-grid.component.html',
  styleUrls: ['./form-grid.component.css']
})
export class FormGridComponent {
  userData: any = [];
  nomineeData: any = {};
  guardianData: any = {};

  constructor(private formDataService: FormDataService) { }

  ngOnInit(): void {
    const userFormData = this.formDataService.getUserFormData();
    const nomineeFormData = this.formDataService.getNomineeFormData();
    const guardianFormData = this.formDataService.getGuardianFormData();
    this.userData = [
      {
        firstName: userFormData.firstName,
        lastName: userFormData.lastName,
        dob: userFormData.dob,
        email: userFormData.email,
        phoneNumber: userFormData.phoneNumber,
        proofType: userFormData.proofType,
        idNumber: userFormData.idNumber,
        addr1: userFormData.addr1,
        addr2: userFormData.addr2,
        addr3: userFormData.addr3,
        landmark: userFormData.landmark,
        city: userFormData.city,
        state: userFormData.state,
        nominee: userFormData.nominee,
        
      },
     
    ];
    this.nomineeData = [
      {
        firstName: guardianFormData.firstName,
        lastName: guardianFormData.lastName,
        dob: guardianFormData.dob,
        email: guardianFormData.email,
        phoneNumber: guardianFormData.phoneNumber,
        proofType: guardianFormData.proofType,
        idNumber: guardianFormData.idNumber,
        addr1: guardianFormData.addr1,
        addr2: guardianFormData.addr2,
        addr3: guardianFormData.addr3,
        landmark: guardianFormData.landmark,
        city: guardianFormData.city,
        state: guardianFormData.state,
        nominee: guardianFormData.nominee,
      }
    ];
    this.guardianData = [
      {
        firstName: nomineeFormData.firstName,
        lastName: nomineeFormData.lastName,
        dob: nomineeFormData.dob,
        email: nomineeFormData.email,
        phoneNumber: nomineeFormData.phoneNumber,
        proofType: nomineeFormData.proofType,
        idNumber: nomineeFormData.idNumber,
        addr1: nomineeFormData.addr1,
        addr2: nomineeFormData.addr2,
        addr3: nomineeFormData.addr3,
        landmark: nomineeFormData.landmark,
        city: nomineeFormData.city,
        state: nomineeFormData.state,
        nominee: nomineeFormData.nominee,
      }
    ];
  }
}
