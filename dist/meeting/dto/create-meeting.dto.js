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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMeetingDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const user_entity_1 = require("../../users/entities/user.entity");
class CreateMeetingDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, notes: { required: true, type: () => String }, color: { required: true, type: () => String }, alarm_status: { required: true, type: () => Boolean }, alarm_time: { required: true, type: () => String }, user: { required: true, type: () => require("../../users/entities/user.entity").User } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeetingDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMeetingDto.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMeetingDto.prototype, "color", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateMeetingDto.prototype, "alarm_status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMeetingDto.prototype, "alarm_time", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", user_entity_1.User)
], CreateMeetingDto.prototype, "user", void 0);
exports.CreateMeetingDto = CreateMeetingDto;
//# sourceMappingURL=create-meeting.dto.js.map