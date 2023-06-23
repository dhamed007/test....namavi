// create-student.dto.ts

export class CreateRoomDto {
  readonly userId: number;
  readonly type: string;
  readonly chatInitiator: number;
}

// update-student.dto.ts

export class UpdateRoomDto {
  readonly userId?: number;
  readonly type?: string;
  readonly chatInitiator?: number;
}