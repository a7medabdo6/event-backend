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
exports.MeetingController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const meeting_service_1 = require("./meeting.service");
const create_meeting_dto_1 = require("./dto/create-meeting.dto");
const update_meeting_dto_1 = require("./dto/update-meeting.dto");
const users_service_1 = require("../users/users.service");
let MeetingController = class MeetingController {
    constructor(meetingService, usersService) {
        this.meetingService = meetingService;
        this.usersService = usersService;
    }
    async uploadFile(body) {
        const User = await this.usersService.findOne(+body.user);
        const product = await this.meetingService.create(Object.assign({}, body), User);
        throw new common_1.HttpException('CREATED', common_1.HttpStatus.CREATED);
    }
    findAll(ClientId) {
        return this.meetingService.findAll(ClientId);
    }
    findOne(id) {
        return this.meetingService.findOne(+id);
    }
    update(id, updateMeetingDto) {
        return this.meetingService.update(+id, updateMeetingDto);
    }
    remove(id) {
        return this.meetingService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_meeting_dto_1.CreateMeetingDto]),
    __metadata("design:returntype", Promise)
], MeetingController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/meeting.entity").Meeting] }),
    __param(0, (0, common_1.Query)('ClientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MeetingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/meeting.entity").Meeting }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MeetingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/meeting.entity").Meeting }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_meeting_dto_1.UpdateMeetingDto]),
    __metadata("design:returntype", void 0)
], MeetingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MeetingController.prototype, "remove", null);
MeetingController = __decorate([
    (0, common_1.Controller)('meeting'),
    __metadata("design:paramtypes", [meeting_service_1.MeetingService,
        users_service_1.UsersService])
], MeetingController);
exports.MeetingController = MeetingController;
//# sourceMappingURL=meeting.controller.js.map