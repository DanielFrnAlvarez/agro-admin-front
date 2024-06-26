// types/User.ts

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  BASIC = 'basic',
}

export interface User {
  id: number,
  name: string;
  email: string;
  phone: string;
  access: UserRole;
}

export interface CreateUserInput {
  name: string;
  email: string;
  phone: string;
  access: UserRole;
}

export interface UpdateUserInput {
  name?: string;
  email?: string;
  phone?: string;
  access?: UserRole;
}