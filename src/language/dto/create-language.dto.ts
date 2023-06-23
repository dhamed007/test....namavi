// create-student.dto.ts

export class CreateLangDto {
  readonly languagePack: number;
  readonly status: number;
  readonly createdBy: number;
  readonly updatedBy: number;
}

// update-student.dto.ts

export class UpdateLangDto {
  readonly languagePack?: number;
  readonly status?: number;
  readonly createdBy?: number;
  readonly updatedBy?: number;
}