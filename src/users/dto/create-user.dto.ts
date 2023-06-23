// create-student.dto.ts

export class CreateUserDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly age: number;
  readonly type: string;
}

// update-student.dto.ts

export class UpdateUserDto {
  readonly firstName?: string;
  readonly lastName?: string;
  readonly age?: number;
  readonly type?: string;
}