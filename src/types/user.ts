import { Dropdown } from './dropdown';
export class User {
  firstname!: string;
  lastname!: string;
  email!: string;
  contactNumber!: string;
  company!: string;
  interestedIn!: string;
  budget!: string;
  technologies!: Dropdown[];
  description!: string;
}
