import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ProductPro } from "./product";


@Entity()
export class Students {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column()
    age: number;
    @Column({type: 'text'})
    score: string;

    @OneToMany(() => ProductPro, (ProductPro) => ProductPro.Students)
    ProductPro
}
