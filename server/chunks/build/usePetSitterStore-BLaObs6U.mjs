import { a as serviceTypeNameList, S as ServiceStatus, I as IconNameStatus, P as PetType, b as PetSize, c as SpecialPetSitterCertificateStatus, d as PetSitterCertificateStatus, V as VerifiedIdentityStatus } from './petSitter.type-BjvpgkZ2.mjs';
import { u as useImage } from './composables-VAV01sHq.mjs';
import { i as definePrivateState } from './server.mjs';
import { u as useCustomError } from './useCustomError-C6r27JZ9.mjs';
import { computed } from 'vue';

const usePetSitterApi = () => {
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const img = useImage();
  const getPetterSitterList = async (request) => {
    console.log(request);
    await wait(500);
    return {
      count: 1234,
      cardList: Array.from({ length: 10 }, (_, index) => {
        return {
          id: index + 1,
          name: "\u516D\u6BDB\u8207\u6211",
          photoUrl: img("images/nannylist/nanny.svg"),
          serviceCount: 12,
          commentUserImageUrl: img("images/nannylist/Oval.svg"),
          comment: "\u300C\u5C0D\u5F85\u6211\u7684\u72D7\u72D7\u975E\u5E38\u6709\u8010\u5FC3\u548C\u611B\u5FC3\uFF0C\u7E3D\u662F\u6309\u6642\u6E96\u6642\u4F86\u5E6B\u5FD9\u7167\u9867\uFF0C\u8B93\u6211\u53EF\u4EE5\u5B89\u5FC3\u5DE5\u4F5C\u3002\u611F\u8B1D\u5979\u7684\u4ED8\u51FA\uFF01\u300D",
          rating: 4.5,
          commentCount: 26,
          price: 520,
          isLike: false
        };
      })
    };
  };
  const likeThisPetSitter = async (token, id, isLike) => {
    console.log(token, id, isLike);
    await wait(500);
    return true;
  };
  const getPetSitterBasicInfo = async (id) => {
    console.log(id);
    await wait(500);
    return {
      id: 1,
      name: "\u4E94\u6BDB\u8207\u6211",
      about: '\u5F9E\u5C0F\u6211\u5C31\u5F88\u559C\u6B61\u5C0F\u52D5\u7269\uFF0C\u4E5F\u990A\u904E\u5F88\u591A\u7A2E\u52D5\u7269\u5982\u72D7\u3001\u8C93\u3001\u9CE5\u3001\u8001\u9F20\u3001\u5154\u5B50\u3001\u86C7..\u7B49\uFF0C\u76EE\u524D\u5BB6\u67099\u96BB\u8C931\u96BB\u5C4B\u9802\u9F9C\u3002\n \u5C0D\u65BC\u5C0F\u52D5\u7269\u6211\u90FD\u975E\u5E38\u75BC\u611B\uFF0C\u5C0D\u5F85\u6BDB\u5B69\u5982\u540C\u5F85\u5C0F\u5B69\u4E00\u6A23\u3002\u904E\u53BB20\u5E74\u4F86\u9678\u7E8C\u6551\u904E\u6578\u96BB\u6D41\u6D6A\u7684\u72D7\u72D7\uFF0C\u5148\u5B89\u7F6E\u5728\u627E\u5408\u9069\u7684\u4EBA\u9001\u990A\u3002\n \u56E0\u70BA\u592A\u559C\u6B61\u5C0F\u52D5\u7269\uFF0C\u6240\u4EE5\u540C\u5B78\u670B\u53CB\u82E5\u64BF\u5230\u5C0F\u52D5\u7269\u90FD\u6703\u8AAA"\u4EA4\u7D66\u4F73\u7F8E"\uFF0C\u800C\u6211\u6BCF\u6B21\u4E5F\u4E0D\u8CA0\u671F\u671B\u7684\u6551\u6D3B\u4ED6\u5011\u9084\u5E6B\u4ED6\u5011\u5A36\u59BB\u751F\u5B50\u5462\uFF01\u{1F601}\u{1F601}\u{1F601}\n \u8FC4\u4ECA\u990A\u72D7\u5DF2\u670930\u5E7E\u5E74\u7D93\u9A57\u8207\u990A\u8C938\u5E74\u7D93\u9A57\u90FD\u662F\u5F9E\u5C0F\u990A\u5927\u7684\uFF0C\u56E0\u6B64\u5C0D\u65BC\u8C93\u54AA\u3001\u72D7\u72D7\u7684\u7D30\u5FAE\u75C7\u72C0\uFF0C\u6211\u90FD\u80FD\u5F88\u5FEB\u767C\u73FE\u4E26\u5373\u65E9\u5C31\u91AB\u6CBB\u7642\uFF0C\u7167\u9867\u5E7C\u8C93\u3001\u5976\u8C93\u3001\u5E7C\u72AC\u4E5F\u662F\u7D93\u9A57\u5F88\u8C50\u5BCC\u5594\uFF01',
      photoUrl: "https://picsum.photos/id/40/500/500",
      rating: 4.3,
      commentCount: 15,
      servicePrice: [
        {
          id: 1,
          name: ServiceStatus.ToHomeCare,
          price: 100,
          iconName: IconNameStatus.Sitter,
          description: "\u5230\u5E9C\u63D0\u4F9B\u7167\u8B77",
          pet: [
            {
              petType: PetType.Dog,
              petSizeList: [
                PetSize.Mini,
                PetSize.MEDIUM,
                PetSize.LARGE
              ]
            },
            {
              petType: PetType.Cat
            }
          ]
        },
        {
          id: 2,
          name: ServiceStatus.ToHomeBeauty,
          price: 600,
          iconName: IconNameStatus.Beauty,
          description: "\u65BC\u8913\u6BCD\u5BB6\u4F4F\u5BBF",
          pet: [
            {
              petType: PetType.Dog,
              extraServiceList: [
                { id: 1, name: "\u5BF5\u7269\u9935\u85E5\u9700\u6C42", price: 100 },
                { id: 2, name: "\u5BF5\u7269\u9664\u86A4\u9700\u6C42", price: 380 },
                { id: 3, name: "\u5BF5\u7269\u6309\u6469\u9700\u6C42", price: 350 }
              ],
              petSizeList: [
                PetSize.MEDIUM,
                PetSize.LARGE
              ]
            }
          ]
        }
      ],
      serviceRegionCodeList: [
        { cityCode: 1, distructCodeList: [100, 108, 104] },
        { cityCode: 2, distructCodeList: [200, 204, 205] }
      ],
      unavailableTimeList: [
        {
          month: 10,
          day: [
            ...Array.from({ length: 3 }, (_, index) => index + 1),
            5,
            ...Array.from({ length: 2 }, (_, index) => index + 7),
            10,
            ...Array.from({ length: 2 }, (_, index) => index + 23),
            ...Array.from({ length: 3 }, (_, index) => index + 29)
          ]
        },
        {
          month: 11,
          day: [
            5,
            ...Array.from({ length: 2 }, (_, index) => index + 7),
            10,
            ...Array.from({ length: 3 }, (_, index) => index + 29)
          ]
        }
      ],
      petsCertificate: {
        specialPet: SpecialPetSitterCertificateStatus.Approved,
        petSitter: PetSitterCertificateStatus.Pass,
        experienceYear: 5,
        verifiedIdentity: VerifiedIdentityStatus.NicePerson
      },
      attachmentUrlList: [
        "https://i.imgur.com/TlD7mAH.mp4",
        "https://picsum.photos/id/11/600/600",
        "https://picsum.photos/id/12/600/600",
        "https://picsum.photos/id/13/600/600",
        "https://picsum.photos/id/14/600/600"
      ],
      lineUrl: "www.google.com",
      youtubeUrl: "www.youtube.com",
      facebookUrl: "www.facebook.com",
      shareLinkUrl: "",
      isLike: false
    };
  };
  const getCommentInfo = async (id) => {
    console.log(id);
    await wait(500);
    return {
      rating: 4.5,
      commentCount: 15,
      allRate: {
        1: 2,
        2: 3,
        3: 1,
        4: 4,
        5: 5
      },
      discussionList: [
        {
          id: 1,
          name: "\u9EC3\u66C9\u739F",
          avatar: img("images/frontpage/dogcard.jpg"),
          message: "\u5C0D\u5F85\u6211\u7684\u72D7\u72D7\u975E\u5E38\u6709\u8010\u5FC3\u548C\u611B\u5FC3\uFF0C\u7E3D\u662F\u6309\u6642\u6E96\u6642\u4F86\u5E6B\u5FD9\u7167\u9867\uFF0C\u8B93\u6211\u53EF\u4EE5\u5B89\u5FC3\u5DE5\u4F5C\u3002\u611F\u8B1D\u5979\u7684\u4ED8\u51FA\uFF01",
          time: "1 \u500B\u6708\u524D",
          isPetSitter: false,
          rating: 5,
          attachUrlList: [
            "https://picsum.photos/102/72?random=1",
            "https://picsum.photos/102/72?random=2",
            "https://picsum.photos/102/72?random=3",
            "https://picsum.photos/102/72?random=4",
            "https://picsum.photos/102/72?random=5",
            "https://picsum.photos/102/72?random=6"
          ],
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
          isPetSitter: false,
          attachUrlList: [
            "https://picsum.photos/102/72?random=1",
            "https://picsum.photos/102/72?random=2",
            "https://picsum.photos/102/72?random=3",
            "https://picsum.photos/102/72?random=4",
            "https://picsum.photos/102/72?random=5",
            "https://picsum.photos/102/72?random=6"
          ]
        }
      ]
    };
  };
  const getServiceQAList = async (id) => {
    console.log(id);
    await wait(500);
    return [
      {
        id: 1,
        title: "\u6211\u53EF\u4EE5\u5728\u4EC0\u9EBC\u6642\u5019\u9810\u7D04\u5BF5\u7269\u4FDD\u59C6\u7684\u670D\u52D9\u5462\uFF1F",
        content: "\u60A8\u53EF\u4EE5\u96A8\u6642\u5728\u6211\u5011\u7684\u5E73\u53F0\u4E0A\u9810\u7D04\u5BF5\u7269\u4FDD\u59C6\u7684\u670D\u52D9\u3002\u53EA\u9700\u5728\u60A8\u9700\u8981\u7684\u65E5\u671F\u548C\u6642\u9593\u63D0\u51FA\u9810\u7D04\u8ACB\u6C42\uFF0C\u6211\u5011\u7684\u7CFB\u7D71\u5C07\u6703\u70BA\u60A8\u5B89\u6392\u5408\u9069\u7684\u4FDD\u59C6\u3002"
      },
      {
        id: 2,
        title: "\u63D0\u4F9B\u54EA\u4E9B\u984D\u5916\u7684\u670D\u52D9\uFF1F",
        content: "\u60A8\u53EF\u4EE5\u96A8\u6642\u5728\u6211\u5011\u7684\u5E73\u53F0\u4E0A\u9810\u7D04\u5BF5\u7269\u4FDD\u59C6\u7684\u670D\u52D9\u3002\u53EA\u9700\u5728\u60A8\u9700\u8981\u7684\u65E5\u671F\u548C\u6642\u9593\u63D0\u51FA\u9810\u7D04\u8ACB\u6C42\uFF0C\u6211\u5011\u7684\u7CFB\u7D71\u5C07\u6703\u70BA\u60A8\u5B89\u6392\u5408\u9069\u7684\u4FDD\u59C6\u3002"
      },
      {
        id: 3,
        title: "\u5982\u679C\u6211\u5C0D\u4FDD\u59C6\u7684\u670D\u52D9\u6709\u4EFB\u4F55\u6295\u8A34\u8A72\u600E\u9EBC\u8FA6\uFF1F",
        content: "\u60A8\u53EF\u4EE5\u96A8\u6642\u5728\u6211\u5011\u7684\u5E73\u53F0\u4E0A\u9810\u7D04\u5BF5\u7269\u4FDD\u59C6\u7684\u670D\u52D9\u3002\u53EA\u9700\u5728\u60A8\u9700\u8981\u7684\u65E5\u671F\u548C\u6642\u9593\u63D0\u51FA\u9810\u7D04\u8ACB\u6C42\uFF0C\u6211\u5011\u7684\u7CFB\u7D71\u5C07\u6703\u70BA\u60A8\u5B89\u6392\u5408\u9069\u7684\u4FDD\u59C6\u3002"
      },
      {
        id: 4,
        title: "\u5982\u4F55\u78BA\u4FDD\u6211\u5011\u7684\u5BF5\u7269\u5728\u4FDD\u59C6\u7684\u7167\u9867\u4E0B\u662F\u5B89\u5168\u7684\uFF1F",
        content: "\u60A8\u53EF\u4EE5\u96A8\u6642\u5728\u6211\u5011\u7684\u5E73\u53F0\u4E0A\u9810\u7D04\u5BF5\u7269\u4FDD\u59C6\u7684\u670D\u52D9\u3002\u53EA\u9700\u5728\u60A8\u9700\u8981\u7684\u65E5\u671F\u548C\u6642\u9593\u63D0\u51FA\u9810\u7D04\u8ACB\u6C42\uFF0C\u6211\u5011\u7684\u7CFB\u7D71\u5C07\u6703\u70BA\u60A8\u5B89\u6392\u5408\u9069\u7684\u4FDD\u59C6\u3002"
      },
      {
        id: 5,
        title: "\u6211\u8A72\u5982\u4F55\u652F\u4ED8\u5BF5\u7269\u4FDD\u59C6\u7684\u8CBB\u7528\uFF1F",
        content: "\u60A8\u53EF\u4EE5\u96A8\u6642\u5728\u6211\u5011\u7684\u5E73\u53F0\u4E0A\u9810\u7D04\u5BF5\u7269\u4FDD\u59C6\u7684\u670D\u52D9\u3002\u53EA\u9700\u5728\u60A8\u9700\u8981\u7684\u65E5\u671F\u548C\u6642\u9593\u63D0\u51FA\u9810\u7D04\u8ACB\u6C42\uFF0C\u6211\u5011\u7684\u7CFB\u7D71\u5C07\u6703\u70BA\u60A8\u5B89\u6392\u5408\u9069\u7684\u4FDD\u59C6\u3002"
      }
    ];
  };
  const reservation = async (request) => {
    console.log(request);
    await wait(500);
    return true;
  };
  return {
    getPetterSitterList,
    likeThisPetSitter,
    getPetSitterBasicInfo,
    getCommentInfo,
    getServiceQAList,
    reservation
  };
};
const usePetSitterStore = definePrivateState("usePetSitterStore", () => {
  return {
    petSitterCount: 0,
    petSitterList: [],
    orderStatus: "asc",
    currentSelectedService: ServiceStatus.ToHomeCare,
    petSitterDetail: {
      info: null,
      comment: null,
      QA: null
    },
    tempReservation: null,
    currentReservationStep: 1,
    fromHome: {
      serviceType: "",
      regionCodeList: [],
      timeRange: [null, null]
    }
  };
}, (privateState) => {
  const { getPetterSitterList, likeThisPetSitter, getPetSitterBasicInfo, getCommentInfo, getServiceQAList, reservation } = usePetSitterApi();
  const { customTypeError, fatalError } = useCustomError();
  const serviceTypeOptionList = computed(() => {
    return Object.entries(serviceTypeNameList).map(([key, value]) => {
      return {
        value: key,
        title: value
      };
    });
  });
  const handleSearchPetterSitters = async (request) => {
    try {
      const currentRequest = {
        ...request,
        order: privateState.orderStatus
      };
      const response = await getPetterSitterList(currentRequest);
      privateState.petSitterCount = response.count;
      privateState.petSitterList = response.cardList;
      return true;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleLikeThisPetSitter = async (id, isLike) => {
    try {
      const isSuccess = await likeThisPetSitter("token", id, isLike);
      return isSuccess;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleGetPetSitterBasicInfo = async (id) => {
    try {
      const response = await getPetSitterBasicInfo(id);
      privateState.petSitterDetail.info = response;
      return true;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleGetCommentInfo = async (id) => {
    try {
      const response = await getCommentInfo(id);
      privateState.petSitterDetail.comment = response;
      return true;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleGetServiceQAList = async (id) => {
    try {
      const response = await getServiceQAList(id);
      privateState.petSitterDetail.QA = response;
      return true;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleSubmitReservation = async (secondForm) => {
    const firstForm = privateState.tempReservation;
    if (!firstForm) {
      return false;
    }
    const request = {
      ...firstForm,
      ...secondForm
    };
    try {
      const isSuccess = await reservation(request);
      return isSuccess;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const setTempReservation = (tempReservation) => {
    privateState.tempReservation = tempReservation;
  };
  const resetTempReservation = () => {
    privateState.tempReservation = null;
  };
  const resetPetSitterDetail = () => {
    privateState.petSitterDetail.info = null;
    privateState.petSitterDetail.comment = null;
    privateState.petSitterDetail.QA = null;
  };
  const changeIsLike = (id, isLike) => {
    const petSitter = privateState.petSitterList.find((item) => item.id === id);
    if (!petSitter)
      return;
    petSitter.isLike = isLike;
  };
  const toggleOrder = () => {
    privateState.orderStatus = privateState.orderStatus === "asc" ? "desc" : "asc";
  };
  const resetOrder = () => {
    privateState.orderStatus = "asc";
  };
  const setCurrentSelectedService = (status) => {
    privateState.currentSelectedService = status;
  };
  const getExtraServiceOptionList = (serviceType, type) => {
    const info = privateState.petSitterDetail.info;
    if (!info)
      return [];
    const serviceDetail = info.servicePrice.find((item) => item.name === serviceType);
    if (!serviceDetail)
      return [];
    const providedExtraServeList = serviceDetail.pet.find((item) => item.petType === type);
    if (!providedExtraServeList)
      return [];
    const extraServiceList = providedExtraServeList.extraServiceList;
    if (!extraServiceList)
      return [];
    return extraServiceList.map((item) => {
      return {
        value: item.id,
        title: item.name
      };
    });
  };
  const setCurrentReservationStep = (step) => {
    privateState.currentReservationStep = step;
  };
  const resetCurrentReservationStep = () => {
    privateState.currentReservationStep = 1;
  };
  const setHomeServiceType = (input) => {
    privateState.fromHome.serviceType = input;
  };
  const setHomeRegionCodeList = (input) => {
    privateState.fromHome.regionCodeList = input;
  };
  const setHomeTimeRange = (input) => {
    privateState.fromHome.timeRange = input;
  };
  const resetHomeServiceType = () => {
    privateState.fromHome.serviceType = "";
  };
  const resetHomeRegionCodeList = () => {
    privateState.fromHome.regionCodeList = [];
  };
  const resetHomeTimeRange = () => {
    privateState.fromHome.timeRange = [null, null];
  };
  return {
    serviceTypeOptionList,
    // getters::
    petSitterCount: computed(() => privateState.petSitterCount),
    petSitterList: computed(() => privateState.petSitterList),
    currentSelectedService: computed(() => privateState.currentSelectedService),
    orderStatus: computed(() => privateState.orderStatus),
    petSitterDetail: computed(() => privateState.petSitterDetail),
    currentReservationStep: computed(() => privateState.currentReservationStep),
    homeServiceType: computed(() => privateState.fromHome.serviceType),
    homeRegionCodeList: computed(() => privateState.fromHome.regionCodeList),
    homeTimeRange: computed(() => privateState.fromHome.timeRange),
    // methods::
    handleSearchPetterSitters,
    handleLikeThisPetSitter,
    handleGetPetSitterBasicInfo,
    handleGetCommentInfo,
    handleGetServiceQAList,
    handleSubmitReservation,
    resetPetSitterDetail,
    changeIsLike,
    toggleOrder,
    resetOrder,
    setCurrentSelectedService,
    getExtraServiceOptionList,
    setTempReservation,
    resetTempReservation,
    setCurrentReservationStep,
    resetCurrentReservationStep,
    setHomeServiceType,
    setHomeRegionCodeList,
    setHomeTimeRange,
    resetHomeServiceType,
    resetHomeRegionCodeList,
    resetHomeTimeRange
  };
});

export { usePetSitterStore as u };
//# sourceMappingURL=usePetSitterStore-BLaObs6U.mjs.map
