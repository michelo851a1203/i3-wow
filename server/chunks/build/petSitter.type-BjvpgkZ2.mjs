import * as zod from 'zod';

const paginationSearchSchema = zod.object({
  start: zod.number().int().min(1, "\u6700\u5C0F\u503C\u70BA 1").nonnegative("\u8ACB\u8F38\u5165\u6B63\u6574\u6578\u62160"),
  limit: zod.number().int().nonnegative("\u8ACB\u8F38\u5165\u6B63\u6574\u6578\u62160")
});
const descendOrderStatus = [
  "asc",
  "desc"
];
const deescendOrderSchema = zod.object({
  order: zod.enum(descendOrderStatus)
});
const baseDiscussionSchema = zod.object({
  id: zod.number(),
  name: zod.string(),
  avatar: zod.string(),
  message: zod.string(),
  time: zod.string(),
  isPetSitter: zod.boolean(),
  rating: zod.number().min(0).max(5).optional(),
  attachUrlList: zod.string().array().optional()
});
const discussionSchema = baseDiscussionSchema.extend({
  discussionList: zod.lazy(() => discussionSchema.array().optional())
});
var ServiceStatus = /* @__PURE__ */ ((ServiceStatus2) => {
  ServiceStatus2["ToHomeCare"] = "\u5230\u5E9C\u7167\u8B77";
  ServiceStatus2["ToHomeBeauty"] = "\u5230\u5E9C\u7F8E\u5BB9";
  return ServiceStatus2;
})(ServiceStatus || {});
var PetSize = /* @__PURE__ */ ((PetSize2) => {
  PetSize2[PetSize2["Mini"] = 0] = "Mini";
  PetSize2[PetSize2["SMALL"] = 1] = "SMALL";
  PetSize2[PetSize2["MEDIUM"] = 2] = "MEDIUM";
  PetSize2[PetSize2["LARGE"] = 3] = "LARGE";
  PetSize2[PetSize2["SuperLarge"] = 4] = "SuperLarge";
  return PetSize2;
})(PetSize || {});
const petSizeDetailName = {
  [
    0
    /* Mini */
  ]: "\u8FF7\u4F60(1-5 kg)",
  [
    1
    /* SMALL */
  ]: "\u5C0F\u578B(5-10 kg)",
  [
    2
    /* MEDIUM */
  ]: "\u4E2D\u578B(10-20 kg)",
  [
    3
    /* LARGE */
  ]: "\u5927\u578B(20-40 kg)",
  [
    4
    /* SuperLarge */
  ]: "\u8D85\u5927\u578B(40+ kg)"
};
var PetType = /* @__PURE__ */ ((PetType2) => {
  PetType2[PetType2["Dog"] = 1] = "Dog";
  PetType2[PetType2["Cat"] = 2] = "Cat";
  PetType2[PetType2["Bird"] = 3] = "Bird";
  PetType2[PetType2["Rabbit"] = 4] = "Rabbit";
  PetType2[PetType2["Mouse"] = 5] = "Mouse";
  return PetType2;
})(PetType || {});
const petNameMapping = {
  [
    1
    /* Dog */
  ]: "\u72D7",
  [
    2
    /* Cat */
  ]: "\u8C93",
  [
    3
    /* Bird */
  ]: "\u9CE5",
  [
    4
    /* Rabbit */
  ]: "\u5154",
  [
    5
    /* Mouse */
  ]: "\u9F20"
};
var SpecialPetSitterCertificateStatus = /* @__PURE__ */ ((SpecialPetSitterCertificateStatus2) => {
  SpecialPetSitterCertificateStatus2[SpecialPetSitterCertificateStatus2["None"] = 0] = "None";
  SpecialPetSitterCertificateStatus2[SpecialPetSitterCertificateStatus2["Approved"] = 1] = "Approved";
  return SpecialPetSitterCertificateStatus2;
})(SpecialPetSitterCertificateStatus || {});
const SpecialPetSitterCertificateName = {
  [
    0
    /* None */
  ]: "\u7121",
  [
    1
    /* Approved */
  ]: "\u5DF2\u9A57\u8B49"
};
var PetSitterCertificateStatus = /* @__PURE__ */ ((PetSitterCertificateStatus2) => {
  PetSitterCertificateStatus2[PetSitterCertificateStatus2["None"] = 0] = "None";
  PetSitterCertificateStatus2[PetSitterCertificateStatus2["Pass"] = 1] = "Pass";
  return PetSitterCertificateStatus2;
})(PetSitterCertificateStatus || {});
const PetSitterCertificateName = {
  [
    0
    /* None */
  ]: "\u7121",
  [
    1
    /* Pass */
  ]: "\u5DF2\u901A\u904E"
};
var VerifiedIdentityStatus = /* @__PURE__ */ ((VerifiedIdentityStatus2) => {
  VerifiedIdentityStatus2[VerifiedIdentityStatus2["None"] = 0] = "None";
  VerifiedIdentityStatus2[VerifiedIdentityStatus2["NicePerson"] = 1] = "NicePerson";
  return VerifiedIdentityStatus2;
})(VerifiedIdentityStatus || {});
const VerifiedIdentityName = {
  [
    0
    /* None */
  ]: "\u7121",
  [
    1
    /* NicePerson */
  ]: "\u5DF2\u78BA\u8A8D\u826F\u6C11"
};
var IconNameStatus = /* @__PURE__ */ ((IconNameStatus2) => {
  IconNameStatus2["Sitter"] = "sitter";
  IconNameStatus2["Beauty"] = "beauty";
  return IconNameStatus2;
})(IconNameStatus || {});
const serviceIconNameMapping = {
  [ServiceStatus.ToHomeCare]: "sitter",
  [ServiceStatus.ToHomeBeauty]: "beauty"
  /* Beauty */
};
const serviceTypeNameList = {
  [ServiceStatus.ToHomeCare]: "\u5230\u5E9C\u4FDD\u59C6",
  [ServiceStatus.ToHomeBeauty]: "\u5230\u5E9C\u7F8E\u5BB9"
};
const petSitterCardSchema = zod.object({
  id: zod.number(),
  name: zod.string(),
  photoUrl: zod.string(),
  serviceCount: zod.number().int().positive(),
  commentUserImageUrl: zod.string().optional(),
  comment: zod.string().optional(),
  rating: zod.number(),
  commentCount: zod.number(),
  price: zod.number(),
  isLike: zod.boolean().optional()
});
zod.object({
  count: zod.number().int().nonnegative("\u8ACB\u8F38\u5165\u6B63\u6574\u6578\u62160"),
  cardList: petSitterCardSchema.array()
});
const petServiceSchema = zod.object({
  id: zod.number(),
  name: zod.string(),
  price: zod.number(),
  iconName: zod.nativeEnum(IconNameStatus).optional(),
  description: zod.string().optional()
});
const petTypeServiceSchema = zod.object({
  petType: zod.nativeEnum(PetType),
  extraServiceList: petServiceSchema.array().optional(),
  petSizeList: zod.nativeEnum(PetSize).array().optional()
});
const mainServiceSchema = petServiceSchema.extend({
  pet: petTypeServiceSchema.array()
});
const servicePriceSchema = mainServiceSchema.array();
const regionSchema = zod.object({
  cityCode: zod.number(),
  distructCodeList: zod.number().array(),
  isAll: zod.boolean().optional()
});
const petsCertificateSchema = zod.object({
  specialPet: zod.nativeEnum(SpecialPetSitterCertificateStatus),
  petSitter: zod.nativeEnum(PetSitterCertificateStatus),
  experienceYear: zod.number().int().positive(),
  verifiedIdentity: zod.nativeEnum(VerifiedIdentityStatus)
});
const unavailableTimeSchema = zod.object({
  month: zod.number(),
  day: zod.number().array()
});
zod.object({
  id: zod.number(),
  name: zod.string(),
  about: zod.string(),
  photoUrl: zod.string(),
  rating: zod.number(),
  commentCount: zod.number().int().positive(),
  servicePrice: servicePriceSchema,
  serviceRegionCodeList: regionSchema.array(),
  unavailableTimeList: unavailableTimeSchema.array(),
  petsCertificate: petsCertificateSchema,
  attachmentUrlList: zod.string().array(),
  lineUrl: zod.string().optional(),
  youtubeUrl: zod.string().optional(),
  facebookUrl: zod.string().optional(),
  shareLinkUrl: zod.string().optional(),
  isLike: zod.boolean().optional()
});
const ratingDistributionKey = [
  "1",
  "2",
  "3",
  "4",
  "5"
];
const allRateDistributionSchema = zod.record(zod.enum(ratingDistributionKey), zod.number());
zod.object({
  rating: zod.number(),
  commentCount: zod.number(),
  allRate: allRateDistributionSchema,
  discussionList: discussionSchema.array()
});
const priceRangeSchema = zod.object({
  min: zod.number().min(0).int().nonnegative(),
  max: zod.number().max(3e3).int().nonnegative()
});
const petterSitterSearchSchema = zod.object({
  serviceType: zod.nativeEnum(ServiceStatus).or(zod.literal("")).optional(),
  serviceTimePeriod: zod.number().nullable().array().length(2).optional(),
  serviceRegionCodeList: zod.number().array().optional(),
  petType: zod.nativeEnum(PetType).or(zod.literal(-1)).optional(),
  priceRange: priceRangeSchema.refine((val) => val.min <= val.max, "\u6700\u5C0F\u50F9\u683C\u5FC5\u9808\u5C0F\u65BC\u7B49\u65BC\u6700\u5927\u50F9\u683C")
});
petterSitterSearchSchema.merge(deescendOrderSchema);

export { IconNameStatus as I, PetType as P, ServiceStatus as S, VerifiedIdentityStatus as V, serviceTypeNameList as a, PetSize as b, SpecialPetSitterCertificateStatus as c, PetSitterCertificateStatus as d, petServiceSchema as e, discussionSchema as f, petNameMapping as g, petSizeDetailName as h, SpecialPetSitterCertificateName as i, PetSitterCertificateName as j, VerifiedIdentityName as k, petterSitterSearchSchema as l, paginationSearchSchema as p, serviceIconNameMapping as s };
//# sourceMappingURL=petSitter.type-BjvpgkZ2.mjs.map
