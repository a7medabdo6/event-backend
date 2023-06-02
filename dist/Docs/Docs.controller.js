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
exports.DocsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const Docs_service_1 = require("./Docs.service");
const update_Docs_dto_1 = require("./dto/update-Docs.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const Docs_dto_1 = require("./dto/Docs.dto");
const serialize_interceptor_1 = require("../interceptors/serialize.interceptor");
const users_service_1 = require("../users/users.service");
let DocsController = class DocsController {
    constructor(DocsService, usersService) {
        this.DocsService = DocsService;
        this.usersService = usersService;
    }
    findAll(ClientId) {
        return this.DocsService.findAll(ClientId);
    }
    async uploadFile(body, file) {
        console.log(body);
        const User = await this.usersService.findOne(+body.userId);
        const product = await this.DocsService.create(Object.assign(Object.assign({}, body), { doc: file === null || file === void 0 ? void 0 : file.filename }), User);
        throw new common_1.HttpException('CREATED', common_1.HttpStatus.CREATED);
    }
    findOne(id) {
        return this.DocsService.findOne(+id);
    }
    update(id, updateDocsDto) {
        return this.DocsService.update(+id, updateDocsDto);
    }
    remove(id) {
        return this.DocsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("../users/entities/user.entity").User }),
    __param(0, (0, common_1.Query)('ClientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DocsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('doc', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                callback(null, uniqueSuffix + (0, path_1.extname)(file.originalname));
            },
        }),
        fileFilter: (req, file, callback) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|gif|pdf|doc)$/)) {
                return callback(new Error('Only image files are allowed!'), false);
            }
            callback(null, true);
        },
        limits: {
            fileSize: 1024 * 1024,
        },
    })),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DocsController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/Docs.entity").Docs }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_Docs_dto_1.UpdateDocsDto]),
    __metadata("design:returntype", void 0)
], DocsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocsController.prototype, "remove", null);
DocsController = __decorate([
    (0, common_1.Controller)('docs'),
    (0, serialize_interceptor_1.Serialize)(Docs_dto_1.DocsDto),
    __metadata("design:paramtypes", [Docs_service_1.DocsService,
        users_service_1.UsersService])
], DocsController);
exports.DocsController = DocsController;
//# sourceMappingURL=Docs.controller.js.map