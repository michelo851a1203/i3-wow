import * as zod from 'zod';
import { A as AppointmentStatus } from './useMemberStore-uW6LN4tp.mjs';
import { S as ServiceStatus } from './petSitter.type-BjvpgkZ2.mjs';
import { c as createFileListSchema, s as socialNetworkLinkSchema } from './signUp.type-C4a4H3kg.mjs';

const orderStatusName = /* @__PURE__ */ new Map([
  [AppointmentStatus.PendingForReply, "\u5DF2\u9810\u7D04\u672A\u56DE\u8986"],
  [AppointmentStatus.ReservedPay, "\u5F85\u4ED8\u6B3E"],
  [AppointmentStatus.WaitForService, "\u5DF2\u4ED8\u6B3E\uFF0C\u672A\u670D\u52D9"],
  [AppointmentStatus.FinishedNoComment, "\u5DF2\u5B8C\u6210(\u5C1A\u672A\u8A55\u8AD6)"],
  [AppointmentStatus.Finished, "\u5DF2\u5B8C\u6210(\u5DF2\u8A55\u8AD6)"],
  [AppointmentStatus.Canceled, "\u53D6\u6D88"],
  [AppointmentStatus.Error, "\u932F\u8AA4"]
]);
zod.object({
  ticketCode: zod.string(),
  orderTime: zod.number(),
  name: zod.string(),
  orderStatus: zod.nativeEnum(AppointmentStatus),
  serviceItem: zod.nativeEnum(ServiceStatus)
});
const memberBePetSitterFormSchema = zod.object({
  firstName: zod.string().min(1, "\u8ACB\u8F38\u5165\u540D\u5B57").max(50, "\u540D\u5B57\u592A\u9577\u4E86\u5427\uFF01"),
  lastName: zod.string().min(1, "\u8ACB\u8F38\u5165\u59D3\u6C0F").max(50, "\u59D3\u6C0F\u592A\u9577\u4E86\u5427\uFF01"),
  mobilePhone: zod.string().regex(/^09\d{2}[-\s]?\d{3}[-\s]?\d{3}$/, "\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC\u683C\u5F0F").min(1, "\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC"),
  email: zod.string().email("\u8ACB\u8F38\u5165 email \u683C\u5F0F").min(1, "\u8ACB\u8F38\u5165 email").max(50, "\u4F60\u7684 email \u592A\u9577\u4E86\u5427\uFF01"),
  identityImageFront: zod.instanceof(File).nullable().refine((file) => {
    if (file === null || file.size === 0) {
      return false;
    }
    return file.type.startsWith("image");
  }, "\u8ACB\u4E0A\u50B3\u8EAB\u5206\u8B49\u6B63\u9762\u5716\u7247"),
  identityImageBack: zod.instanceof(File).nullable().refine((file) => {
    if (file === null || file.size === 0) {
      return false;
    }
    return file.type.startsWith("image");
  }, "\u8ACB\u4E0A\u50B3\u8EAB\u5206\u8B49\u53CD\u9762\u5716\u7247"),
  title: zod.string().min(1, "\u982D\u929C\u81EA\u6211\u4ECB\u7D39\u5FC5\u586B").max(200, "\u982D\u929C\u81EA\u6211\u4ECB\u7D39\u592A\u9577\u4E86\u5427\uFF01(200\u5B57\u4EE5\u5167)"),
  experienceYear: zod.number(),
  description: zod.string().min(1, "\u8ACB\u8F38\u5165\u8913\u6BCD\u7D93\u9A57").max(200, "\u7D93\u9A57\u5BEB\u592A\u9577\u4E86\u5427\uFF01(200 \u5B57\u5167)"),
  certificateProofFileList: createFileListSchema().nullable().refine((fileList) => {
    if (fileList === null || fileList.length === 0) {
      return false;
    }
    if (!(fileList instanceof FileList)) {
      return false;
    }
    const fileArrayList = Array.from(fileList);
    return fileArrayList.every((file) => file.type.startsWith("image"));
  }, "\u8ACB\u4E0A\u50B3\u7279\u7A2E\u8B49\u660E\u6216\u76F8\u95DC\u8A8D\u8B49"),
  petServiceImageList: createFileListSchema().nullable().refine((fileList) => {
    if (fileList !== null && fileList.length > 0) {
      if (!(fileList instanceof FileList)) {
        return false;
      }
      const fileArrayList = Array.from(fileList);
      return fileArrayList.every((file) => file.type.startsWith("image"));
    }
    return true;
  }, "\u4FDD\u59C6\u670D\u52D9\u7167\u7247\u683C\u5F0F\u932F\u8AA4"),
  isExperienceOnOtherPlatform: zod.boolean(),
  otherPlatform: zod.string().optional(),
  socialNetworkLinkList: socialNetworkLinkSchema.array().optional()
});

export { memberBePetSitterFormSchema as m, orderStatusName as o };
//# sourceMappingURL=memberPetSitter.type-CaMt6ZpT.mjs.map
