/// <reference types="multer" />
import { DocsService } from './Docs.service';
import { UpdateDocsDto } from './dto/update-Docs.dto';
import { UsersService } from 'src/users/users.service';
export declare class DocsController {
    private readonly DocsService;
    private readonly usersService;
    constructor(DocsService: DocsService, usersService: UsersService);
    findAll(ClientId: number): Promise<import("../users/entities/user.entity").User>;
    uploadFile(body: any, file: Express.Multer.File): Promise<void>;
    findOne(id: string): Promise<import("./entities/Docs.entity").Docs>;
    update(id: string, updateDocsDto: UpdateDocsDto): string;
    remove(id: string): string;
}
