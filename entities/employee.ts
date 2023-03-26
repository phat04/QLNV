import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Employee {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  departmentId: number;

  @Column()
  birthday: Date;

  @Column()
  wageId: number;
}
