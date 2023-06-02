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
exports.User = exports.UserRole = void 0;
const openapi = require("@nestjs/swagger");
const Docs_entity_1 = require("../../Docs/entities/Docs.entity");
const meeting_entity_1 = require("../../meeting/entities/meeting.entity");
const typeorm_1 = require("typeorm");
var UserRole;
(function (UserRole) {
    UserRole["admin"] = "admin";
    UserRole["seller"] = "seller";
    UserRole["buyer"] = "buyer";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
let User = class User {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, email: { required: true, type: () => String }, code: { required: true, type: () => String }, phone: { required: true, type: () => String }, photo: { required: true, type: () => String }, type: { required: true, type: () => String }, password: { required: true, type: () => String }, username: { required: true, type: () => String }, role: { required: true, type: () => String }, active: { required: true, type: () => Boolean }, createBy: { required: true, type: () => Number }, Docs: { required: true, type: () => require("../../Docs/entities/Docs.entity").Docs }, meetings: { required: true, type: () => require("../../meeting/entities/meeting.entity").Meeting } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: '00000000',
    }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: '00000000',
    }),
    __metadata("design:type", String)
], User.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: "seller",
    }),
    __metadata("design:type", String)
], User.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: '00000000',
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: '00000000',
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: "seller",
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: false,
    }),
    __metadata("design:type", Boolean)
], User.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: '0',
    }),
    __metadata("design:type", Number)
], User.prototype, "createBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Docs_entity_1.Docs, (Docs) => Docs.user),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Docs_entity_1.Docs)
], User.prototype, "Docs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => meeting_entity_1.Meeting, (Meeting) => Meeting.user),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", meeting_entity_1.Meeting)
], User.prototype, "meetings", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map