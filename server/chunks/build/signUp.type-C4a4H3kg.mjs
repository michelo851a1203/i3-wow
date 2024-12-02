import * as zod from 'zod';

var PetSitterSignUpStep = /* @__PURE__ */ ((PetSitterSignUpStep2) => {
  PetSitterSignUpStep2[PetSitterSignUpStep2["None"] = 0] = "None";
  PetSitterSignUpStep2[PetSitterSignUpStep2["Personal"] = 1] = "Personal";
  PetSitterSignUpStep2[PetSitterSignUpStep2["Qualification"] = 2] = "Qualification";
  PetSitterSignUpStep2[PetSitterSignUpStep2["Audit"] = 3] = "Audit";
  return PetSitterSignUpStep2;
})(PetSitterSignUpStep || {});
var GenderStatus = /* @__PURE__ */ ((GenderStatus2) => {
  GenderStatus2[GenderStatus2["None"] = 0] = "None";
  GenderStatus2[GenderStatus2["Male"] = 1] = "Male";
  GenderStatus2[GenderStatus2["Female"] = 2] = "Female";
  return GenderStatus2;
})(GenderStatus || {});
const genderName = {
  [
    0
    /* None */
  ]: "\u4E0D\u4FBF\u900F\u9732",
  [
    1
    /* Male */
  ]: "\u7537\u6027",
  [
    2
    /* Female */
  ]: "\u5973\u6027"
};
var SocialNetwork = /* @__PURE__ */ ((SocialNetwork2) => {
  SocialNetwork2["NONE"] = "\u8ACB\u9078\u64C7";
  SocialNetwork2["THREAD"] = "thread";
  SocialNetwork2["INSTAGRAM"] = "instagram";
  SocialNetwork2["FACEBOOK"] = "facebook";
  SocialNetwork2["TWITTER"] = "X(twitter)";
  SocialNetwork2["LINKEDIN"] = "linkedin";
  SocialNetwork2["YOUTUBE"] = "youtube";
  SocialNetwork2["TIKTOK"] = "tiktok";
  SocialNetwork2["PINTEREST"] = "pinterest";
  SocialNetwork2["SNAPCHAT"] = "snapchat";
  SocialNetwork2["REDDIT"] = "reddit";
  SocialNetwork2["WHATSAPP"] = "whatsapp";
  SocialNetwork2["TELEGRAM"] = "telegram";
  SocialNetwork2["DISCORD"] = "discord";
  SocialNetwork2["TWITCH"] = "twitch";
  SocialNetwork2["MEDIUM"] = "medium";
  SocialNetwork2["GITHUB"] = "github";
  SocialNetwork2["LINE"] = "line";
  SocialNetwork2["PLURK"] = "plurk";
  SocialNetwork2["DCARD"] = "dcard";
  SocialNetwork2["PTT"] = "ptt";
  return SocialNetwork2;
})(SocialNetwork || {});
var PetSitterSignUpPersonalImageType = /* @__PURE__ */ ((PetSitterSignUpPersonalImageType2) => {
  PetSitterSignUpPersonalImageType2["PersonalIdentityImageFront"] = "pet-sitter-sigin-up-id-front";
  PetSitterSignUpPersonalImageType2["PersonalIdentityImageBack"] = "pet-sitter-sigin-up-id-back";
  return PetSitterSignUpPersonalImageType2;
})(PetSitterSignUpPersonalImageType || {});
const signUpFormSchema = zod.object({
  firstName: zod.string().min(1, "\u8ACB\u8F38\u5165\u59D3\u6C0F").max(50, "\u59D3\u6C0F\u592A\u9577\u4E86\u5427\uFF01"),
  lastName: zod.string().min(1, "\u8ACB\u8F38\u5165\u540D\u5B57").max(50, "\u540D\u5B57\u592A\u9577\u4E86\u5427\uFF01"),
  gender: zod.nativeEnum(GenderStatus),
  email: zod.string().email("\u8ACB\u8F38\u5165 email \u683C\u5F0F").min(1, "\u8ACB\u8F38\u5165 email").max(50, "\u4F60\u7684 email \u592A\u9577\u4E86\u5427\uFF01"),
  emailVerifyCode: zod.string().min(1, "\u8ACB\u8F38\u5165\u9A57\u8B49\u78BC").length(4, "\u8ACB\u8F38\u51654\u4F4D\u9A57\u8B49\u78BC"),
  password: zod.string().min(6, "\u9577\u5EA6\u70BA6-18\u500B\u5B57\u5143").max(18, "\u9577\u5EA6\u70BA6-18\u500B\u5B57\u5143").regex(/(?=.*[A-Z]).*/g, "\u5305\u542B1\u500B\u5927\u5BEB\u5B57\u6BCD").regex(/(?=.*\d).*/g, "\u5305\u542B1\u500B\u6578\u5B57"),
  confirmPassword: zod.string().min(6, "\u9577\u5EA6\u70BA6-18\u500B\u5B57\u5143").max(18, "\u9577\u5EA6\u70BA6-18\u500B\u5B57\u5143").regex(/(?=.*[A-Z]).*/g, "\u5305\u542B1\u500B\u5927\u5BEB\u5B57\u6BCD").regex(/(?=.*\d).*/g, "\u5305\u542B1\u500B\u6578\u5B57")
}).superRefine(({ password, confirmPassword }, ctx) => {
  if (password !== confirmPassword) {
    ctx.addIssue({
      path: ["confirmPassword"],
      code: zod.ZodIssueCode.custom,
      message: "\u8207\u5BC6\u78BC\u4E0D\u4E00\u81F4"
    });
  }
});
const petSittersignUpPersonalFormSchema = zod.object({
  firstName: zod.string().min(1, "\u8ACB\u8F38\u5165\u59D3\u6C0F").max(50, "\u59D3\u6C0F\u592A\u9577\u4E86\u5427\uFF01"),
  lastName: zod.string().min(1, "\u8ACB\u8F38\u5165\u540D\u5B57").max(50, "\u540D\u5B57\u592A\u9577\u4E86\u5427\uFF01"),
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
  mobilePhone: zod.string().regex(/^09\d{2}[-\s]?\d{3}[-\s]?\d{3}$/, "\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC\u683C\u5F0F"),
  email: zod.string().email("\u8ACB\u8F38\u5165 email \u683C\u5F0F").min(1, "\u8ACB\u8F38\u5165 email").max(50, "\u4F60\u7684 email \u592A\u9577\u4E86\u5427\uFF01")
});
petSittersignUpPersonalFormSchema.omit({ identityImageFront: true, identityImageBack: true });
const socialNetworkLinkSchema = zod.object({
  name: zod.nativeEnum(SocialNetwork),
  link: zod.string()
});
const createFileListSchema = () => {
  return zod.any();
};
const petSitterSignUpQualificationFormSchema = zod.object({
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
petSittersignUpPersonalFormSchema.merge(petSitterSignUpQualificationFormSchema);

export { GenderStatus as G, PetSitterSignUpPersonalImageType as P, SocialNetwork as S, signUpFormSchema as a, PetSitterSignUpStep as b, createFileListSchema as c, petSitterSignUpQualificationFormSchema as d, genderName as g, petSittersignUpPersonalFormSchema as p, socialNetworkLinkSchema as s };
//# sourceMappingURL=signUp.type-C4a4H3kg.mjs.map
