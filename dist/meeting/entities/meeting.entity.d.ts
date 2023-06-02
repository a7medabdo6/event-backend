import { User } from 'src/users/entities/user.entity';
export declare class Meeting {
    id: number;
    title: string;
    notes: string;
    alarm_time: string;
    color: string;
    alarm_status: boolean;
    user: User;
    created_at: Date;
}
