import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserList } from 'src/types/usersList';
import { Location } from '@angular/common';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users!: UserList[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private userservice: UserService, private location: Location) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    this.userservice.getUserList().subscribe((data) => {
      console.log('data is', data);
      this.users = data;
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getUsers();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getUsers();
  }
  goBack() {
    this.location.back();
  }
}
