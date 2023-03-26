import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Department {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  quantityEmployee: number;

  @Column()
  managerId: number;
}
