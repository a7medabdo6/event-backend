import { I18nContext } from 'nestjs-i18n';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { User } from './entities/user.entity';
import { CreateCodeDto } from './dto/create-code.dto';
export declare class UsersController {
    private readonly usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
    whoami(user: unknown): unknown;
    getHello(i18n: I18nContext): Promise<any>;
    createCode(CreateCodeDto: CreateCodeDto, session: any): Promise<User>;
    createCodeAmdin(CreateCodeDto: CreateCodeDto, session: any): Promise<User>;
    signup(createUserDto: CreateUserDto, session: any): Promise<User>;
    signin(createUserDto: any, session: any): Promise<User>;
    signout(session: any): Promise<string>;
    findAll(userRole: string): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<User>;
}
