export class User {
  first_name?: string;
  last_name?: string;
  role?: UserRole;
  user_id?: string;
  token?: string;
  email?: string;
  password?: string;
}
enum UserRole {
  MANAGER = 'Manager',
  HAIRDRESSER = 'Hairdresser',
  ADMIN = 'Admin',
}