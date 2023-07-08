import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  userFormData: any = {}; // Store form data here
  nomineeFormData: any = {};
  guardianFormData: any = {};
  constructor() { }
  getUserFormData() {
    return this.userFormData;
  }

  getNomineeFormData() {
    return this.nomineeFormData;
  }

  getGuardianFormData() {
    return this.guardianFormData;
  }

  setFormData(type: string, data: any) {
    if (type === 'user') {
      this.userFormData = { ...this.userFormData, ...data };
      console.log('ddd', this.userFormData);
    } else if (type === 'nominee') {
      this.nomineeFormData = { ...this.nomineeFormData, ...data };
    } else if (type === 'guardian') {
      this.guardianFormData = { ...this.guardianFormData, ...data };
      console.log('ddd', this.guardianFormData);
    }

  }

  clearFormData() {
    this.userFormData = {};
    this.nomineeFormData = {};
    this.guardianFormData = {};
  }
}
