import { User } from 'src/users/entities/user.entity';
export declare class CreateMeetingDto {
    title: string;
    notes: string;
    color: string;
    alarm_status: boolean;
    alarm_time: string;
    user: User;
}
