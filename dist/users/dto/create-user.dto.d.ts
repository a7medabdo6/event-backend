export declare enum UserRole {
    admin = "admin",
    seller = "seller",
    buyer = "buyer"
}
export declare class CreateUserDto {
    email: string;
    password: string;
    code: string;
    username: string;
    role: UserRole;
    createBy: number;
    active: boolean;
}
