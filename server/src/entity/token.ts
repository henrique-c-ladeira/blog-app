import { Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Token {
  @ObjectIdColumn()
  id: string;
}
