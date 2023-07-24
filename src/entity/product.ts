import {Column, Entity, ManyToOne, PrimaryGeneratedColumn,} from "typeorm";
import { Students } from "./studen";


@Entity()
export class ProductPro {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column()
    price: number;
    @Column({type: 'text'})
    image: string;
    @Column({type: 'int'})
    category: number
    
    @ManyToOne(() => Students, (Students) => Students.ProductPro)
    Students;
}
