import { MeetingService } from './meeting.service';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import { UsersService } from 'src/users/users.service';
export declare class MeetingController {
    private readonly meetingService;
    private readonly usersService;
    constructor(meetingService: MeetingService, usersService: UsersService);
    uploadFile(body: CreateMeetingDto): Promise<void>;
    findAll(ClientId: number): Promise<import("./entities/meeting.entity").Meeting[]>;
    findOne(id: string): Promise<import("./entities/meeting.entity").Meeting>;
    update(id: string, updateMeetingDto: UpdateMeetingDto): Promise<import("./entities/meeting.entity").Meeting>;
    remove(id: string): string;
}
