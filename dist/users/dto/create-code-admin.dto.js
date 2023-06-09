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
exports.CreateCodeDto = exports.UserRole = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var UserRole;
(function (UserRole) {
    UserRole["admin"] = "admin";
    UserRole["seller"] = "seller";
    UserRole["buyer"] = "buyer";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
class CreateCodeDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, code: { required: true, type: () => String }, type: { required: true, enum: require("./create-code-admin.dto").UserRole } };
    }
}
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateCodeDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCodeDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(UserRole),
    __metadata("design:type", String)
], CreateCodeDto.prototype, "type", void 0);
exports.CreateCodeDto = CreateCodeDto;
//# sourceMappingURL=create-code-admin.dto.js.map