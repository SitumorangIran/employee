import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-modal-add-employee',
  templateUrl: './modal-add-employee.component.html',
  styleUrls: ['./modal-add-employee.component.css']
})
export class ModalAddEmployeeComponent implements OnChanges {
  @Input() showModal: any;
  @Input() dataEditModal: any;
  @Input() dataDetailModal: any;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() employeeAddedModal: EventEmitter<any> = new EventEmitter<any>();
  @Output() employeeEditedModal: EventEmitter<any> = new EventEmitter<any>();

  formFields = [
    { id: 'username', name: 'username', label: 'Username', type: 'text', model: '', validationKey: 'validUsername', validationMessage: 'Username harus diisi.' },
    { id: 'firstName', name: 'firstName', label: 'First Name', type: 'text', model: '', validationKey: 'validFirstName', validationMessage: 'First Name harus diisi.' },
    { id: 'lastName', name: 'lastName', label: 'Last Name', type: 'text', model: '', validationKey: 'validLastName', validationMessage: 'Last Name harus diisi.' },
    { id: 'email', name: 'email', label: 'Email', type: 'email', model: '', validationKey: 'validEmail', validationMessage: 'Email harus diisi dengan format yang valid.' },
    { id: 'birthDate', name: 'birthDate', label: 'Birth Date', type: 'date', model: '', validationKey: 'validBirthDate', validationMessage: 'Tanggal lahir harus diisi.' },
    { id: 'basicSalary', name: 'basicSalary', label: 'Basic Salary', type: 'number', model: '', validationKey: 'validBasicSalary', validationMessage: 'Basic Salary harus diisi dengan angka.' },
    { id: 'status', name: 'status', label: 'Status', type: 'select', model: '', options: ['Active', 'Inactive'], validationKey: 'validStatus', validationMessage: 'Status harus dipilih.' },
    { id: 'group', name: 'group', label: 'Group', type: 'text', model: '', validationKey: 'validGroup', validationMessage: 'Group harus diisi.' },
    { id: 'description', name: 'description', label: 'Description', type: 'textarea', model: '', validationKey: 'validDescription', validationMessage: 'Description harus diisi.' }
  ];

  cekValid: any = {
    validUsername: false,
    validFirstName: false,
    validLastName: false,
    validEmail: false,
    validBirthDate: false,
    validBasicSalary: false,
    validStatus: false,
    validGroup: false,
    validDescription: false,
  };

  cekValidFirst: boolean = false;
  id: number = Math.random();
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  birthDate: string | null = new Date().toISOString().substr(0, 10);
  basicSalary: number = 0;
  status: string = '';
  group: string = '';
  description: string = '';

  modalTitle: string = '';

  ngOnChanges() {
    if (this.dataEditModal) {
      this.modalTitle = 'Edit Data Employee';
      this.username = this.dataEditModal.username || '';
      this.firstName = this.dataEditModal.firstName || '';
      this.lastName = this.dataEditModal.lastName || '';
      this.email = this.dataEditModal.email || '';
      this.birthDate = this.dataEditModal.birthDate || new Date().toISOString().substr(0, 10);
      this.basicSalary = this.dataEditModal.basicSalary || 0;
      this.status = this.dataEditModal.status || '';
      this.group = this.dataEditModal.group || '';
      this.description = this.dataEditModal.description || '';
    } else if (this.dataDetailModal){
      this.modalTitle = 'Detail Data Employee';
      this.username = this.dataDetailModal.username || '';
      this.firstName = this.dataDetailModal.firstName || '';
      this.lastName = this.dataDetailModal.lastName || '';
      this.email = this.dataDetailModal.email || '';
      this.birthDate = this.dataDetailModal.birthDate || new Date().toISOString().substr(0, 10);
      this.basicSalary = this.dataDetailModal.basicSalary || 0;
      this.status = this.dataDetailModal.status || '';
      this.group = this.dataDetailModal.group || '';
      this.description = this.dataDetailModal.description || '';
    }else {
      this.modalTitle = 'Add Data Employee';
    }
  }

  reset() {
    this.formFields.forEach(field => field.model = '');
    this.username = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.birthDate = new Date().toISOString().substr(0, 10);
    this.basicSalary = 0;
    this.status = '';
    this.group = '';
    this.description = '';
  }

  close() {
    this.closeModal.emit(false);
    this.reset();
  }

  addEmployee() {
    this.cekValidFirst = false;
    const newEmployeeData = {
      id: this.id,
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      birthDate: this.birthDate,
      basicSalary: this.basicSalary,
      status: this.status,
      group: this.group,
      description: this.description
    };

    this.validateFields();

    if (!this.cekValidFirst) {
      this.employeeAddedModal.emit(newEmployeeData);
      this.close();
    }
  }

  detailEmployee() {
    if (this.dataDetailModal) {
      this.dataDetailModal.username = this.username;
      this.dataDetailModal.firstName = this.firstName;
      this.dataDetailModal.lastName = this.lastName;
      this.dataDetailModal.email = this.email;
      this.dataDetailModal.birthDate = this.birthDate;
      this.dataDetailModal.basicSalary = this.basicSalary;
      this.dataDetailModal.status = this.status;
      this.dataDetailModal.group = this.group;
      this.dataDetailModal.description = this.description;

      this.employeeEditedModal.emit(this.dataDetailModal);
      this.close();
    }
  }

  editEmployee() {
    if (this.dataEditModal) {
      this.dataEditModal.username = this.username;
      this.dataEditModal.firstName = this.firstName;
      this.dataEditModal.lastName = this.lastName;
      this.dataEditModal.email = this.email;
      this.dataEditModal.birthDate = this.birthDate;
      this.dataEditModal.basicSalary = this.basicSalary;
      this.dataEditModal.status = this.status;
      this.dataEditModal.group = this.group;
      this.dataEditModal.description = this.description;

      this.employeeEditedModal.emit(this.dataEditModal);
      this.close();
    }
  }

  private validateFields() {
    this.formFields.forEach(field => {
      if (!field.model) {
        this.cekValid[field.validationKey] = true;
        this.cekValidFirst = true;
      } else {
        this.cekValid[field.validationKey] = false;
      }
    });
  }
}
