import { Role } from "./role.model";

export class User{
    user_id!:number;
    username!:string ;
    password!: string ;
    roles!:Role[];
    role!: Role;
    email!:string;
    }