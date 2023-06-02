import { Repository } from 'typeorm';
import { CreateCodeDto } from './dto/create-code.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare enum UserRole {
    admin = "admin",
    seller = "seller",
    buyer = "buyer"
}
export declare class UsersService {
    private repo;
    constructor(repo: Repository<User>);
    create(UpdateUser: UpdateUserDto): Promise<User>;
    createcode(CreateCodeDto: CreateCodeDto): Promise<User>;
    createCodeadmin(CreateCodeDto: CreateCodeDto): Promise<User>;
    findAll(userRole: string): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    update(id: number, updateUser: Partial<User>): Promise<User>;
    remove(id: number): Promise<User>;
}
