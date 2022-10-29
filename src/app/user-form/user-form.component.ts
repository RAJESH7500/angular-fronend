import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Dropdown } from 'src/types/dropdown';
import { User } from 'src/types/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  dropdownList: Dropdown[] = [];
  dropdownSettings: IDropdownSettings = {};
  user!: User;
  userForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userservice: UserService,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.dropdownList = [
      { id: 1, text: 'NodeJS' },
      { id: 2, text: 'ReactJS' },
      { id: 3, text: 'AngularJS' },
      { id: 4, text: 'JavaScript' },
      { id: 5, text: 'HTML' },
      { id: 6, text: 'CSS' },
    ];
    this.dropdownSettings = {
      idField: 'id',
      textField: 'text',
    };
  }
  createForm() {
    this.userForm = this.fb.group({
      firstname: '',
      lastname: '',
      email: '',
      contactNumber: '',
      company: ' ',
      interestedIn: 'interested in',
      budget: 'budget',
      technologies: '',
      description: '',
    });
  }
  saveEmployee(userData: any) {
    this.userservice.creatUser(userData).subscribe(
      (data) => {
        console.log(data);
        this.gotoUserList();
      },
      (error) => console.log(error)
    );
  }
  gotoUserList() {
    this.router.navigate(['/list']);
  }
  onSubmit() {
    this.user = this.userForm.value;
    const userData = {
      data: {
        first_name: this.user.firstname,
        last_name: this.user.lastname,
        email: this.user.email,
        company: this.user.company,
        interested_in: this.user.interestedIn,
        budget: this.user.budget,
        technologies: this.user.technologies
          .map((item) => item.text)
          .join(', '),
        description: this.user.description,
      },
    };

    this.saveEmployee(userData);
    this.userForm.reset();
  }
}
