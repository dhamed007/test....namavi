// create-student.dto.ts

export class CreateStudentDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly age: number;
  readonly type: string;
}

// update-student.dto.ts

export class UpdateStudentDto {
  readonly firstName?: string;
  readonly lastName?: string;
  readonly age?: number;
  readonly type?: string;
}