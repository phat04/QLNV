import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Wage {
  @PrimaryColumn()
  id: number;

  @Column()
  wage: number;

  @Column()
  description: string;
}
