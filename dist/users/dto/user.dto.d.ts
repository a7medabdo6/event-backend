import { Docs } from 'src/Docs/entities/Docs.entity';
export declare class UserDto {
    id: number;
    email: string;
    active: boolean;
    username: string;
    role: string;
    createBy: number;
    Docs: Docs;
}
