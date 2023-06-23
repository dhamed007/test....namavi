// create-student.dto.ts

export class CreateCoinDto {
  readonly userId: number;
  readonly accountNo: string;
  readonly coin: number;
  readonly status: number;
}

// update-student.dto.ts

export class UpdateCoinDto {
  readonly userId?: number;
  readonly accountNo?: string;
  readonly coin?: number;
  readonly status?: number;
}