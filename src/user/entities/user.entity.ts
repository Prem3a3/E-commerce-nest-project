import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "../constants/user.enum";

@Entity({name: 'user'})
export class User {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    email:string
    @Column()
    password:string
    @Column({type:'enum', enum:UserRole, default: UserRole.USER})
    roles:UserRole[]
    

}
