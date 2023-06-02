"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const typeorm_1 = require("@nestjs/typeorm");
const users_service_1 = require("../users/users.service");
const typeorm_2 = require("typeorm");
const meeting_entity_1 = require("./entities/meeting.entity");
let MeetingService = class MeetingService {
    constructor(repo, usersService) {
        this.repo = repo;
        this.usersService = usersService;
    }
    async create(createMeetingDto, user) {
        const meeting = await this.repo.create(createMeetingDto);
        meeting.user = user;
        return this.repo.save(meeting);
    }
    async findAll(ClientId) {
        const Client = await this.usersService.findOne(ClientId);
        if (Client.role == 'admin') {
            const meeting = await this.repo.find({
                relations: { user: true },
            });
            return meeting;
        }
        const meeting = await this.repo.find({
            where: { user: Client },
            relations: { user: true },
        });
        return meeting;
    }
    async findOne(id) {
        const meeting = await this.repo.findOne({
            where: { id },
            relations: { user: true },
        });
        return meeting;
    }
    async update(id, updateMeetingDto) {
        const meeting = await this.findOne(id);
        if (!meeting) {
            throw new exceptions_1.NotFoundException('meeting not found');
        }
        Object.assign(meeting, updateMeetingDto);
        return this.repo.save(meeting);
    }
    remove(id) {
        return `This action removes a #${id} meeting`;
    }
};
MeetingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(meeting_entity_1.Meeting)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], MeetingService);
exports.MeetingService = MeetingService;
//# sourceMappingURL=meeting.service.js.map