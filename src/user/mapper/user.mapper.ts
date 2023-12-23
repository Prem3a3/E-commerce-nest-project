import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../entities/user.entity";

@Injectable()
export class UserMapper {
    toUserEntity(dto: CreateUserDto)
    {
        const user = new User();
        user.email = dto.email;
        user.name = dto.firstName;
        user.roles = dto.roles;
        user.password = dto.password;
        return user;
    }

}