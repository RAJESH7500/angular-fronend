import { Routes } from '@angular/router';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserListComponent } from '../user-list/user-list.component';
export const routes: Routes = [
  { path: 'home', component: UserFormComponent },
  { path: 'list', component: UserListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
