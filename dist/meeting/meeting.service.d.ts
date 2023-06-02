import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import { Meeting } from './entities/meeting.entity';
export declare class MeetingService {
    private repo;
    private readonly usersService;
    constructor(repo: Repository<Meeting>, usersService: UsersService);
    create(createMeetingDto: CreateMeetingDto, user: User): Promise<Meeting>;
    findAll(ClientId: number): Promise<Meeting[]>;
    findOne(id: number): Promise<Meeting>;
    update(id: number, updateMeetingDto: UpdateMeetingDto): Promise<Meeting>;
    remove(id: number): string;
}
