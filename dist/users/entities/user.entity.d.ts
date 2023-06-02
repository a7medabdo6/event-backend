import { Docs } from 'src/Docs/entities/Docs.entity';
import { Meeting } from 'src/meeting/entities/meeting.entity';
export declare enum UserRole {
    admin = "admin",
    seller = "seller",
    buyer = "buyer"
}
export declare class User {
    id: number;
    email: string;
    code: string;
    phone: string;
    photo: string;
    type: string;
    password: string;
    username: string;
    role: string;
    active: boolean;
    createBy: number;
    Docs: Docs;
    meetings: Meeting;
}
