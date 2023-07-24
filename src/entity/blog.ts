import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class blog {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    title: string;
    @Column()
    content: number;
    @Column({type: 'int'})
    idcategory: number
}