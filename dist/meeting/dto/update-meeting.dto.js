"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMeetingDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_meeting_dto_1 = require("./create-meeting.dto");
class UpdateMeetingDto extends (0, swagger_1.PartialType)(create_meeting_dto_1.CreateMeetingDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateMeetingDto = UpdateMeetingDto;
//# sourceMappingURL=update-meeting.dto.js.map