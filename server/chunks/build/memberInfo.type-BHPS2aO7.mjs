import * as zod from 'zod';
import { c as createFileListSchema } from './signUp.type-C4a4H3kg.mjs';

var IdentityStatus = /* @__PURE__ */ ((IdentityStatus2) => {
  IdentityStatus2[IdentityStatus2["None"] = 0] = "None";
  IdentityStatus2[IdentityStatus2["AuditingPetSitter"] = 1] = "AuditingPetSitter";
  IdentityStatus2[IdentityStatus2["PetSitter"] = 2] = "PetSitter";
  IdentityStatus2[IdentityStatus2["DebatePetSitter"] = 3] = "DebatePetSitter";
  return IdentityStatus2;
})(IdentityStatus || {});
const memberPersonalInfoSchema = zod.object({
  name: zod.string().min(1, "\u66B1\u7A31\u5FC5\u586B").max(50, "\u66B1\u7A31\u592A\u9577\u4E86(50 \u5B57\u4EE5\u5167)"),
  firstName: zod.string().min(1, "\u6027\u6C0F\u5FC5\u586B"),
  lastName: zod.string().min(1, "\u540D\u5B57\u5FC5\u586B"),
  mobilePhone: zod.string().regex(/^09\d{2}[-\s]?\d{3}[-\s]?\d{3}$/, "\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC\u683C\u5F0F"),
  email: zod.string().email("\u8ACB\u8F38\u5165 email \u683C\u5F0F").min(1, "\u8ACB\u8F38\u5165 email").max(50, "\u4F60\u7684 email \u592A\u9577\u4E86\u5427\uFF01")
});
const memberPetSitterInfoFormSchema = zod.object({
  experienceYear: zod.number().int().nonnegative("\u8ACB\u8F38\u5165\u6B63\u6574\u6578\u62160"),
  introduction: zod.string().min(1, "\u8ACB\u8F38\u5165\u81EA\u6211\u4ECB\u7D39").max(500, "\u7D93\u9A57\u5BEB\u592A\u9577\u4E86\u5427\uFF01(500 \u5B57\u5167)"),
  petServiceImageList: createFileListSchema().nullable().refine((fileList) => {
    if (fileList !== null && fileList.length > 0) {
      if (!(fileList instanceof FileList)) {
        return false;
      }
      const fileArrayList = Array.from(fileList);
      return fileArrayList.every((file) => file.type.startsWith("image"));
    }
    return true;
  }, "\u4FDD\u59C6\u670D\u52D9\u7167\u7247\u683C\u5F0F\u932F\u8AA4")
});

export { IdentityStatus as I, memberPetSitterInfoFormSchema as a, memberPersonalInfoSchema as m };
//# sourceMappingURL=memberInfo.type-BHPS2aO7.mjs.map
