import * as zod from 'zod';
import { i as definePrivateState } from './server.mjs';
import { u as useCustomError } from './useCustomError-C6r27JZ9.mjs';
import { S as ServiceStatus, p as paginationSearchSchema, e as petServiceSchema, f as discussionSchema, a as serviceTypeNameList, P as PetType, b as PetSize } from './petSitter.type-BjvpgkZ2.mjs';
import { u as useImage } from './composables-VAV01sHq.mjs';
import { computed } from 'vue';

var AppointmentStatus = /* @__PURE__ */ ((AppointmentStatus2) => {
  AppointmentStatus2["PendingForReply"] = "pending";
  AppointmentStatus2["ReservedPay"] = "reservedPay";
  AppointmentStatus2["WaitForService"] = "waitForService";
  AppointmentStatus2["FinishedNoComment"] = "finishedNoComment";
  AppointmentStatus2["Finished"] = "finished";
  AppointmentStatus2["Canceled"] = "Canceled";
  AppointmentStatus2["Error"] = "error";
  return AppointmentStatus2;
})(AppointmentStatus || {});
const appointmentTagList = {
  [
    "pending"
    /* PendingForReply */
  ]: "\u7B49\u5F85\u8913\u6BCD\u56DE\u8986",
  // pale
  [
    "reservedPay"
    /* ReservedPay */
  ]: "\u5F85\u4ED8\u6B3E",
  // yellow
  [
    "waitForService"
    /* WaitForService */
  ]: "\u5DF2\u4ED8\u6B3E",
  // green
  [
    "finishedNoComment"
    /* FinishedNoComment */
  ]: "\u5DF2\u5B8C\u6210",
  // pale
  [
    "finished"
    /* Finished */
  ]: "\u5DF2\u5B8C\u6210",
  // pale
  [
    "Canceled"
    /* Canceled */
  ]: "\u5DF2\u53D6\u6D88",
  // red
  [
    "error"
    /* Error */
  ]: "\u5DF2\u53D6\u6D88"
  // red
};
const appointReservationMap = /* @__PURE__ */ new Map([
  ["pending", "\u7B49\u5F85\u8913\u6BCD\u56DE\u8986"],
  ["reservedPay", "\u7B49\u5F85\u4ED8\u6B3E"],
  ["waitForService", "\u5DF2\u4ED8\u6B3E"],
  ["finishedNoComment", "\u5DF2\u5B8C\u6210"],
  ["finished", "\u5DF2\u5B8C\u6210"],
  // 原本叫做 預約完成
  ["Canceled", "\u53D6\u6D88"],
  ["error", "\u932F\u8AA4"]
]);
var AppointmentDetailProcessStatus = /* @__PURE__ */ ((AppointmentDetailProcessStatus2) => {
  AppointmentDetailProcessStatus2[AppointmentDetailProcessStatus2["Finished"] = 0] = "Finished";
  AppointmentDetailProcessStatus2[AppointmentDetailProcessStatus2["Current"] = 1] = "Current";
  AppointmentDetailProcessStatus2[AppointmentDetailProcessStatus2["NotYet"] = 2] = "NotYet";
  return AppointmentDetailProcessStatus2;
})(AppointmentDetailProcessStatus || {});
const appointmentSearchSchema = zod.object({
  serviceType: zod.nativeEnum(ServiceStatus).or(zod.literal("")).optional(),
  timePeriod: zod.number().nullable().array().length(2)
});
appointmentSearchSchema.merge(paginationSearchSchema);
zod.object({
  ticketCode: zod.string(),
  name: zod.string(),
  avatar: zod.string(),
  appointmentTime: zod.number(),
  status: zod.nativeEnum(AppointmentStatus),
  serviceName: zod.nativeEnum(ServiceStatus),
  price: zod.number().optional()
});
zod.object({
  status: zod.nativeEnum(AppointmentStatus),
  ticketCode: zod.string(),
  ticketEstiblishTime: zod.number(),
  mainService: petServiceSchema,
  keeperName: zod.string(),
  keeperphone: zod.string().regex(/^09\d{2}[-\s]?\d{3}[-\s]?\d{3}$/, "\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC\u683C\u5F0F"),
  keeperEmail: zod.string().email("\u8ACB\u8F38\u5165 email \u683C\u5F0F").min(1, "\u8ACB\u8F38\u5165 email"),
  servicePetSitterPhotoUrl: zod.string().url(),
  servicePetSitterName: zod.string(),
  serviceTimeStart: zod.number().int("\u8ACB\u8F38\u5165\u6574\u6578"),
  serviceTimeEnd: zod.number().int("\u8ACB\u8F38\u5165\u6574\u6578"),
  serviceAddress: zod.string(),
  petNameDescription: zod.string(),
  serviceDetail: zod.string(),
  // 顯示服務細項，不收費的
  serviceExtraService: petServiceSchema.array().optional(),
  // 額外服務要收費的，顯示在上面
  description: zod.string().optional(),
  discussionList: discussionSchema.array().optional()
});
zod.object({
  id: zod.number().int().nonnegative("\u8ACB\u8F38\u5165\u6B63\u6574\u6578\u62160"),
  name: zod.string(),
  iconText: zod.string(),
  status: zod.nativeEnum(AppointmentDetailProcessStatus)
});
var WalletStatus = /* @__PURE__ */ ((WalletStatus2) => {
  WalletStatus2[WalletStatus2["None"] = 0] = "None";
  WalletStatus2[WalletStatus2["Discount"] = 1] = "Discount";
  WalletStatus2[WalletStatus2["Return"] = 2] = "Return";
  return WalletStatus2;
})(WalletStatus || {});
const walletName = {
  [
    0
    /* None */
  ]: "\u672A\u4F7F\u7528",
  [
    1
    /* Discount */
  ]: "\u9810\u7D04\u6298\u62B5",
  [
    2
    /* Return */
  ]: "\u9810\u7D04\u9000\u56DE"
};
zod.object({
  ticketCode: zod.string(),
  walletStatus: zod.nativeEnum(WalletStatus),
  transactionMoney: zod.number(),
  transactionTime: zod.number()
});
const useMemberApi = () => {
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const updatePersonalInfo = async (request) => {
    console.log(request);
    await wait(500);
    return true;
  };
  const personalInfoPhoneValidate = async (phone) => {
    console.log(phone);
    await wait(500);
    return true;
  };
  const personalInfoSendPhoneValidateCode = async (code) => {
    console.log(code);
    await wait(500);
    return true;
  };
  const resetPassword = async (request) => {
    console.log(request);
    await wait(500);
    return true;
  };
  const getAppointmentList = async (request) => {
    console.log(request);
    await wait(500);
    const getFakeStatus = (index) => {
      if (index % 5 === 0) {
        return AppointmentStatus.PendingForReply;
      }
      if (index % 5 === 1) {
        return AppointmentStatus.ReservedPay;
      }
      if (index % 5 === 2) {
        return AppointmentStatus.WaitForService;
      }
      if (index % 5 === 3) {
        return AppointmentStatus.FinishedNoComment;
      }
      if (index % 5 === 4) {
        return AppointmentStatus.Finished;
      }
      return AppointmentStatus.Canceled;
    };
    return Array.from({ length: 5 }).map((_, index) => ({
      ticketCode: `F1234567890${index}`,
      name: "\u9673\u5C0F\u660E",
      avatar: "https://picsum.photos/id/237/200/300",
      appointmentTime: 1730457416671,
      status: getFakeStatus(index),
      serviceName: ServiceStatus.ToHomeCare,
      price: 814
    }));
  };
  const getWalletList = async (request) => {
    console.log(request);
    await wait(500);
    return [
      {
        ticketCode: "F47237468",
        walletStatus: WalletStatus.Discount,
        transactionMoney: -300,
        transactionTime: 1731995000756
      },
      {
        ticketCode: "4093670",
        walletStatus: WalletStatus.Return,
        transactionMoney: -300,
        transactionTime: 1731995000756
      },
      {
        ticketCode: "F47237468",
        walletStatus: WalletStatus.Discount,
        transactionMoney: -300,
        transactionTime: 1731995000756
      },
      {
        ticketCode: "4093670",
        walletStatus: WalletStatus.Return,
        transactionMoney: -300,
        transactionTime: 1731995000756
      },
      {
        ticketCode: "F47237468",
        walletStatus: WalletStatus.Discount,
        transactionMoney: -300,
        transactionTime: 1731995000756
      },
      {
        ticketCode: "4093670",
        walletStatus: WalletStatus.Return,
        transactionMoney: -300,
        transactionTime: 1731995000756
      },
      {
        ticketCode: "F47237468",
        walletStatus: WalletStatus.Discount,
        transactionMoney: -300,
        transactionTime: 1731995000756
      },
      {
        ticketCode: "4093670",
        walletStatus: WalletStatus.Return,
        transactionMoney: -300,
        transactionTime: 1731995000756
      },
      {
        ticketCode: "F47237468",
        walletStatus: WalletStatus.Discount,
        transactionMoney: -300,
        transactionTime: 1731995000756
      },
      {
        ticketCode: "4093670",
        walletStatus: WalletStatus.Return,
        transactionMoney: -300,
        transactionTime: 1731995000756
      }
    ];
  };
  const beAPetSitterAudit = async (request) => {
    console.log(request);
    await wait(500);
    return true;
  };
  const updatePetSitterInfo = async (request) => {
    console.log(request);
    await wait(500);
    return true;
  };
  const updatePetSitterQA = async (request) => {
    console.log(request);
    await wait(500);
    return true;
  };
  const getOrderList = async (request) => {
    console.log(request);
    await wait(500);
    const orderList = Array.from({ length: 10 }, (_, index) => ({
      ticketCode: `F4723746${index.toString()}`,
      orderTime: 1730630597802,
      name: "richBaby",
      orderStatus: AppointmentStatus.PendingForReply,
      serviceItem: ServiceStatus.ToHomeCare
    }));
    return orderList;
  };
  const getIncomeLogList = async (request) => {
    console.log(request);
    await wait(500);
    const logList = Array.from({ length: 10 }, (_, index) => ({
      ticketCode: `F47237468${index}`,
      orderStatus: AppointmentStatus.WaitForService,
      allocatedAmount: 814,
      allocatedTime: 171648e7
    }));
    return logList;
  };
  const getAppointmentDetail = async (ticketCode) => {
    console.log(ticketCode);
    await wait(500);
    const img = useImage();
    const hint = Number(ticketCode.split("").pop());
    const getFakeStatusData = (hint2) => {
      if (hint2 % 5 === 0) {
        return AppointmentStatus.PendingForReply;
      }
      if (hint2 % 5 === 1) {
        return AppointmentStatus.ReservedPay;
      }
      if (hint2 % 5 === 2) {
        return AppointmentStatus.WaitForService;
      }
      if (hint2 % 5 === 3) {
        return AppointmentStatus.FinishedNoComment;
      }
      if (hint2 % 5 === 4) {
        return AppointmentStatus.Finished;
      }
      return AppointmentStatus.Canceled;
    };
    const result = {
      status: getFakeStatusData(hint),
      ticketCode,
      ticketEstiblishTime: 166871364e4,
      // serviceType: ServiceStatus.ToHomeCare,
      mainService: {
        id: 1,
        name: serviceTypeNameList[ServiceStatus.ToHomeCare],
        price: 1620
      },
      keeperName: "\u9673\u4F51\u744B",
      keeperphone: "0926390926",
      keeperEmail: "baby.c.a.t@yahoo.com.tw",
      servicePetSitterPhotoUrl: "https://picsum.photos/id/237/200/300",
      servicePetSitterName: "\u516D\u6BDB\u8207\u6211",
      serviceTimeStart: 16687476e5,
      serviceTimeEnd: 16687548e5,
      serviceAddress: "\u65B0\u5317\u5E02\u677F\u6A4B\u5340\u7248\u65B0\u8DEF325\u5DF73\u865F",
      petNameDescription: "\u5947\u5947 ( \u7F8E\u6A02\u8482/5-10kg )\u3001\u5947\u5947 ( \u7F8E\u6A02\u8482/5-10kg )",
      serviceDetail: "\u5BF5\u7269\u9935\u85E5\u3001\u6563\u6B65\u905B\u72D7",
      // 顯示服務細項，不收費的
      serviceExtraService: [
        {
          id: 1,
          name: "\u5BF5\u7269\u9935\u85E5",
          price: 80
        },
        {
          id: 2,
          name: "\u6563\u6B65\u905B\u72D7",
          price: 80
        }
      ],
      description: "\u6B64\u5340\u584A\u70BA\u9810\u7D04\u55AE\u5099\u8A3B\uFF0C\u7531\u98FC\u4E3B\u9810\u7D04\u7559\u8A00\u7D66\u8913\u6BCD\u7684"
    };
    if (result.status === AppointmentStatus.Finished) {
      result.discussionList = [
        {
          id: 1,
          name: "\u9EC3\u66C9\u739F",
          avatar: img("images/frontpage/dogcard.jpg"),
          message: "\u5C0D\u5F85\u6211\u7684\u72D7\u72D7\u975E\u5E38\u6709\u8010\u5FC3\u548C\u611B\u5FC3\uFF0C\u7E3D\u662F\u6309\u6642\u6E96\u6642\u4F86\u5E6B\u5FD9\u7167\u9867\uFF0C\u8B93\u6211\u53EF\u4EE5\u5B89\u5FC3\u5DE5\u4F5C\u3002\u611F\u8B1D\u5979\u7684\u4ED8\u51FA\uFF01",
          time: "1 \u500B\u6708\u524D",
          rating: 5,
          isPetSitter: false,
          discussionList: [
            {
              id: 1,
              name: "\u516D\u6BDB\u8207\u6211",
              avatar: img("images/frontpage/dogcard.jpg"),
              message: "\u611F\u8B1D\u60A8\u7684\u4FE1\u4EFB\u548C\u652F\u6301\uFF0C\u6211\u975E\u5E38\u4EAB\u53D7\u7167\u9867\u5404\u7A2E\u53EF\u611B\u7684\u5BF5\u7269\uFF0C\u5E0C\u671B\u53EF\u4EE5\u70BA\u66F4\u591A\u5BB6\u5EAD\u63D0\u4F9B\u5E6B\u52A9\u548C\u670D\u52D9\u3002\u518D\u6B21\u611F\u8B1D\u60A8\u7684\u4FE1\u4EFB",
              time: "1 \u500B\u6708\u524D",
              isPetSitter: true
            }
          ]
        },
        {
          id: 2,
          name: "\u9EC3\u66C9\u739F",
          avatar: img("images/frontpage/dogcard.jpg"),
          message: "\u5C0D\u5F85\u6211\u7684\u72D7\u72D7\u975E\u5E38\u6709\u8010\u5FC3\u548C\u611B\u5FC3\uFF0C\u7E3D\u662F\u6309\u6642\u6E96\u6642\u4F86\u5E6B\u5FD9\u7167\u9867\uFF0C\u8B93\u6211\u53EF\u4EE5\u5B89\u5FC3\u5DE5\u4F5C\u3002\u611F\u8B1D\u5979\u7684\u4ED8\u51FA\uFF01",
          time: "1 \u500B\u6708\u524D",
          isPetSitter: false
        }
      ];
    }
    return result;
  };
  const getOrderDetail = async (ticketCode) => {
    console.log(ticketCode);
    await wait(500);
    const img = useImage();
    const hint = Number(ticketCode.split("").pop());
    const getFakeStatusData = (hint2) => {
      if (hint2 % 5 === 0) {
        return AppointmentStatus.PendingForReply;
      }
      if (hint2 % 5 === 1) {
        return AppointmentStatus.ReservedPay;
      }
      if (hint2 % 5 === 2) {
        return AppointmentStatus.WaitForService;
      }
      if (hint2 % 5 === 3) {
        return AppointmentStatus.FinishedNoComment;
      }
      if (hint2 % 5 === 4) {
        return AppointmentStatus.Finished;
      }
      return AppointmentStatus.Canceled;
    };
    const result = {
      status: getFakeStatusData(hint),
      ticketCode,
      ticketEstiblishTime: 166871364e4,
      // serviceType: ServiceStatus.ToHomeCare,
      mainService: {
        id: 1,
        name: serviceTypeNameList[ServiceStatus.ToHomeCare],
        price: 1620
      },
      keeperName: "\u9673\u4F51\u744B",
      keeperphone: "0926390926",
      keeperEmail: "baby.c.a.t@yahoo.com.tw",
      servicePetSitterPhotoUrl: "https://picsum.photos/id/237/200/300",
      servicePetSitterName: "\u516D\u6BDB\u8207\u6211",
      serviceTimeStart: 16687476e5,
      serviceTimeEnd: 16687548e5,
      serviceAddress: "\u65B0\u5317\u5E02\u677F\u6A4B\u5340\u7248\u65B0\u8DEF325\u5DF73\u865F",
      petNameDescription: "\u5947\u5947 ( \u7F8E\u6A02\u8482/5-10kg )\u3001\u5947\u5947 ( \u7F8E\u6A02\u8482/5-10kg )",
      serviceDetail: "\u5BF5\u7269\u9935\u85E5\u3001\u6563\u6B65\u905B\u72D7",
      // 顯示服務細項，不收費的
      serviceExtraService: [
        {
          id: 1,
          name: "\u5BF5\u7269\u9935\u85E5",
          price: 80
        },
        {
          id: 2,
          name: "\u6563\u6B65\u905B\u72D7",
          price: 80
        }
      ],
      description: "\u6B64\u5340\u584A\u70BA\u9810\u7D04\u55AE\u5099\u8A3B\uFF0C\u7531\u98FC\u4E3B\u9810\u7D04\u7559\u8A00\u7D66\u8913\u6BCD\u7684"
    };
    if (result.status === AppointmentStatus.Finished) {
      result.discussionList = [
        {
          id: 1,
          name: "\u9EC3\u66C9\u739F",
          avatar: img("images/frontpage/dogcard.jpg"),
          message: "\u5C0D\u5F85\u6211\u7684\u72D7\u72D7\u975E\u5E38\u6709\u8010\u5FC3\u548C\u611B\u5FC3\uFF0C\u7E3D\u662F\u6309\u6642\u6E96\u6642\u4F86\u5E6B\u5FD9\u7167\u9867\uFF0C\u8B93\u6211\u53EF\u4EE5\u5B89\u5FC3\u5DE5\u4F5C\u3002\u611F\u8B1D\u5979\u7684\u4ED8\u51FA\uFF01",
          time: "1 \u500B\u6708\u524D",
          rating: 5,
          isPetSitter: false,
          discussionList: [
            {
              id: 1,
              name: "\u516D\u6BDB\u8207\u6211",
              avatar: img("images/frontpage/dogcard.jpg"),
              message: "\u611F\u8B1D\u60A8\u7684\u4FE1\u4EFB\u548C\u652F\u6301\uFF0C\u6211\u975E\u5E38\u4EAB\u53D7\u7167\u9867\u5404\u7A2E\u53EF\u611B\u7684\u5BF5\u7269\uFF0C\u5E0C\u671B\u53EF\u4EE5\u70BA\u66F4\u591A\u5BB6\u5EAD\u63D0\u4F9B\u5E6B\u52A9\u548C\u670D\u52D9\u3002\u518D\u6B21\u611F\u8B1D\u60A8\u7684\u4FE1\u4EFB",
              time: "1 \u500B\u6708\u524D",
              isPetSitter: true
            }
          ]
        },
        {
          id: 2,
          name: "\u9EC3\u66C9\u739F",
          avatar: img("images/frontpage/dogcard.jpg"),
          message: "\u5C0D\u5F85\u6211\u7684\u72D7\u72D7\u975E\u5E38\u6709\u8010\u5FC3\u548C\u611B\u5FC3\uFF0C\u7E3D\u662F\u6309\u6642\u6E96\u6642\u4F86\u5E6B\u5FD9\u7167\u9867\uFF0C\u8B93\u6211\u53EF\u4EE5\u5B89\u5FC3\u5DE5\u4F5C\u3002\u611F\u8B1D\u5979\u7684\u4ED8\u51FA\uFF01",
          time: "1 \u500B\u6708\u524D",
          isPetSitter: false
        }
      ];
    }
    return result;
  };
  const getPetSitterIncomeFinance = async () => {
    await wait(500);
    return {
      unit: "NT",
      totalBalance: 277814,
      // accountCode: '****3456',
      distributingFinance: {
        amount: 277814,
        distributTime: 14035392e5
      },
      distributedFinance: {
        amount: 277814,
        distributTime: 14035392e5
      }
    };
  };
  const cancelAppointmentReservation = async (ticketCode) => {
    console.log(ticketCode);
    await wait(500);
    return true;
  };
  const payTheBill = async (ticketCode) => {
    console.log(ticketCode);
    await wait(500);
    return true;
  };
  const leaveComment = async (ticketCode, formInput) => {
    console.log(ticketCode, formInput);
    await wait(500);
    return true;
  };
  const setIncomeAccount = async (request) => {
    console.log(request);
    await wait(500);
    return true;
  };
  const editOrder = async (request) => {
    console.log(request);
    await wait(500);
    return true;
  };
  const getOrderEditDetail = async (ticketCode) => {
    console.log(ticketCode);
    const result = {
      petEditList: [
        {
          id: 1,
          petType: PetType.Dog,
          name: "\u72D7\u72D7",
          size: PetSize.MEDIUM,
          extraServiceList: []
        }
      ],
      serviceType: ServiceStatus.ToHomeCare,
      serviceTimePeriod: [null, null],
      serviceCityName: "\u65B0\u5317\u5E02",
      serviceRegionName: "\u677F\u6A4B\u5340",
      serviceAddress: "\u677F\u65B0\u8DEF325\u5DF73\u865F",
      price: 1900,
      note: "\u6B64\u5340\u584A\u70BA\u9810\u7D04\u55AE\u5099\u8A3B\uFF0C\u7531\u98FC\u4E3B\u9810\u7D04\u7559\u8A00\u7D66\u4FDD\u6BCD"
    };
    await wait(500);
    return result;
  };
  return {
    updatePersonalInfo,
    personalInfoPhoneValidate,
    personalInfoSendPhoneValidateCode,
    resetPassword,
    getAppointmentList,
    beAPetSitterAudit,
    updatePetSitterInfo,
    updatePetSitterQA,
    getOrderList,
    getIncomeLogList,
    getWalletList,
    getAppointmentDetail,
    getOrderDetail,
    cancelAppointmentReservation,
    payTheBill,
    leaveComment,
    getPetSitterIncomeFinance,
    setIncomeAccount,
    editOrder,
    getOrderEditDetail
  };
};
const useMemberStore = definePrivateState("useMemberStore", () => {
  return {
    appointmentList: [],
    petSitterOrderList: [],
    incomeLogList: [],
    walletList: [],
    currentDetailTicketCode: "",
    currentAppointmentDetail: null,
    currentOrderDetail: null,
    currentEditDetail: null
  };
}, (privateState) => {
  const { customTypeError, fatalError } = useCustomError();
  const { updatePersonalInfo, personalInfoPhoneValidate, personalInfoSendPhoneValidateCode, resetPassword, getAppointmentList, beAPetSitterAudit, updatePetSitterInfo, updatePetSitterQA, getOrderList, getIncomeLogList, getWalletList, getAppointmentDetail, getOrderDetail, cancelAppointmentReservation, payTheBill, leaveComment, editOrder, getOrderEditDetail } = useMemberApi();
  const handleUpdatePersonalInfo = async (request) => {
    try {
      const isSuccess = await updatePersonalInfo(request);
      return isSuccess;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handlePersonalInfoPhoneValidate = async (phoneNumber) => {
    try {
      const phoneSchemma = zod.string().regex(/^09\d{2}[-\s]?\d{3}[-\s]?\d{3}$/, "\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC\u683C\u5F0F").min(1, "\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC\u683C\u5F0F");
      const validatedPhone = phoneSchemma.parse(phoneNumber);
      const isSuccess = await personalInfoPhoneValidate(validatedPhone);
      return isSuccess;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handlePersonalInfoPhoneValidateCode = async (code) => {
    try {
      if (code.length !== 4) {
        return false;
      }
      const isSuccess = await personalInfoSendPhoneValidateCode(code);
      return isSuccess;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleResetPassword = async (request) => {
    try {
      const isSuccess = await resetPassword(request);
      return isSuccess;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleGetAppointmentList = async (formInput, currentPage) => {
    const pageCount = 10;
    try {
      const start = (currentPage - 1) * pageCount;
      const request = {
        ...formInput,
        start,
        limit: pageCount
      };
      const response = await getAppointmentList(request);
      privateState.appointmentList = response;
      return true;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleBeAPetSitter = async (request) => {
    try {
      const isSuccess = await beAPetSitterAudit(request);
      return isSuccess;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handlePetSitterInfo = async (request) => {
    try {
      const isSuccess = await updatePetSitterInfo(request);
      return isSuccess;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleUpdatePetSitterQA = async (request) => {
    try {
      const isSuccess = await updatePetSitterQA(request);
      return isSuccess;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleSearchOrderList = async (formInput, currentPage) => {
    const pageCount = 10;
    try {
      const start = (currentPage - 1) * pageCount;
      const request = {
        ...formInput,
        start,
        limit: pageCount
      };
      const response = await getOrderList(request);
      privateState.petSitterOrderList = response;
      return true;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleSearchIncomeList = async (formInput, currentPage) => {
    const pageCount = 10;
    try {
      const start = (currentPage - 1) * pageCount;
      const request = {
        ...formInput,
        start,
        limit: pageCount
      };
      const response = await getIncomeLogList(request);
      privateState.incomeLogList = response;
      return true;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleGetWalletList = async (formInput, currentPage) => {
    const pageCount = 10;
    try {
      const start = (currentPage - 1) * pageCount;
      const request = {
        ...formInput,
        start,
        limit: pageCount
      };
      const response = await getWalletList(request);
      privateState.walletList = response;
      return true;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleGetAppointmentDetail = async (ticketCode) => {
    try {
      const response = await getAppointmentDetail(ticketCode);
      if (response) {
        setCurrentAppointmentDetail(response);
        setCurrentDetailTicketCode(ticketCode);
      }
      return true;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleCancelReservation = async (ticketCode) => {
    try {
      const response = await cancelAppointmentReservation(ticketCode);
      if (response) {
      }
      return true;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handlePayTheBill = async (ticketCode) => {
    try {
      const response = await payTheBill(ticketCode);
      if (response) {
      }
      return true;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleCommentSubmit = async (ticketCode, formInput) => {
    try {
      const response = await leaveComment(ticketCode, formInput);
      if (response) {
      }
      return true;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleGetOrderDetail = async (ticketCode) => {
    try {
      const response = await getOrderDetail(ticketCode);
      if (response) {
        setCurrentOrderDetail(response);
        setCurrentDetailTicketCode(ticketCode);
      }
      return true;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleEditOrder = async (ticketCode) => {
    try {
      const response = await editOrder(ticketCode);
      if (response) {
      }
      return true;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleGetOrderEditDetail = async (ticketCode) => {
    try {
      const response = await getOrderEditDetail(ticketCode);
      setCurrentEditDetail(response);
      return true;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const setCurrentDetailTicketCode = (currentDetailTicketCode) => {
    privateState.currentDetailTicketCode = currentDetailTicketCode;
  };
  const resetCurrentDetailTicketCode = () => {
    privateState.currentDetailTicketCode = "";
  };
  const setCurrentAppointmentDetail = (currentAppointmentDetail) => {
    privateState.currentAppointmentDetail = currentAppointmentDetail;
  };
  const resetCurrentAppointmentDetail = () => {
    privateState.currentAppointmentDetail = null;
  };
  const setCurrentOrderDetail = (currentOrderDetail) => {
    privateState.currentOrderDetail = currentOrderDetail;
  };
  const resetCurrentOrderDetail = () => {
    privateState.currentOrderDetail = null;
  };
  const setCurrentEditDetail = (currentEditDetail) => {
    privateState.currentEditDetail = currentEditDetail;
  };
  const resetCurrentEditDetail = () => {
    privateState.currentEditDetail = null;
  };
  return {
    // getters::
    appointmentList: computed(() => privateState.appointmentList),
    petSitterOrderList: computed(() => privateState.petSitterOrderList),
    incomeLogList: computed(() => privateState.incomeLogList),
    walletList: computed(() => privateState.walletList),
    currentDetailTicketCode: computed(() => privateState.currentDetailTicketCode),
    currentAppointmentDetail: computed(() => privateState.currentAppointmentDetail),
    currentOrderDetail: computed(() => privateState.currentOrderDetail),
    currentEditDetail: computed(() => privateState.currentEditDetail),
    // methods::
    handleUpdatePersonalInfo,
    handlePersonalInfoPhoneValidate,
    handlePersonalInfoPhoneValidateCode,
    handleResetPassword,
    handleGetAppointmentList,
    handleBeAPetSitter,
    handlePetSitterInfo,
    handleUpdatePetSitterQA,
    handleSearchOrderList,
    handleSearchIncomeList,
    handleGetWalletList,
    handleCancelReservation,
    handlePayTheBill,
    handleCommentSubmit,
    resetCurrentDetailTicketCode,
    handleGetAppointmentDetail,
    handleGetOrderDetail,
    handleEditOrder,
    handleGetOrderEditDetail,
    resetCurrentAppointmentDetail,
    setCurrentOrderDetail,
    resetCurrentOrderDetail,
    resetCurrentEditDetail
  };
});

export { AppointmentStatus as A, appointmentTagList as a, AppointmentDetailProcessStatus as b, appointReservationMap as c, appointmentSearchSchema as d, useMemberApi as e, useMemberStore as u, walletName as w };
//# sourceMappingURL=useMemberStore-uW6LN4tp.mjs.map
