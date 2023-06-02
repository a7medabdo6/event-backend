export declare enum UserRole {
    admin = "admin",
    seller = "seller",
    buyer = "buyer"
}
export declare class CreateCodeDto {
    email: string;
    code: string;
    type: UserRole;
}
