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
exports.Meeting = void 0;
const openapi = require("@nestjs/swagger");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let Meeting = class Meeting {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, title: { required: true, type: () => String }, notes: { required: true, type: () => String }, alarm_time: { required: true, type: () => String }, color: { required: true, type: () => String }, alarm_status: { required: true, type: () => Boolean }, user: { required: true, type: () => require("../../users/entities/user.entity").User }, created_at: { required: true, type: () => Date } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Meeting.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Meeting.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Meeting.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Meeting.prototype, "alarm_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Meeting.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Meeting.prototype, "alarm_status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.meetings),
    __metadata("design:type", user_entity_1.User)
], Meeting.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    (0, typeorm_1.Column)({}),
    __metadata("design:type", Date)
], Meeting.prototype, "created_at", void 0);
Meeting = __decorate([
    (0, typeorm_1.Entity)()
], Meeting);
exports.Meeting = Meeting;
//# sourceMappingURL=meeting.entity.js.map