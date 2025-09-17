export interface CreateCharacterDto {
  name: string;
  date: string;
  description: string;
  img: string;
}

export interface CharacterResponseDto {
  _id: string;
  name: string;
  date: string;
  description: string;
  img: string;
  createdAt: Date;
  updatedAt: Date;
}