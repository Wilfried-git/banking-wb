"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBeneficiaryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_beneficiary_dto_1 = require("./create-beneficiary.dto");
class UpdateBeneficiaryDto extends (0, mapped_types_1.PartialType)(create_beneficiary_dto_1.CreateBeneficiaryDto) {
}
exports.UpdateBeneficiaryDto = UpdateBeneficiaryDto;
//# sourceMappingURL=update-beneficiary.dto.js.map