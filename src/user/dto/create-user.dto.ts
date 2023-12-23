import { UserRole } from "../constants/user.enum";

export class CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    roles: UserRole[];

}
