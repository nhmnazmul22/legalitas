interface MenuItem {
  id?: string | number;
  title: string;
  link?: string;
  children?: MenuItem[];
}

interface MenuItemsWithBanner {
  id?: string | number;
  menuName: string;
  bannerImg: string;
  link: string;
}

interface HeroServiceItemsType {
  id?: number | string;
  thumbnail: string;
  title: string;
  description: string;
  link: string;
  rating: string;
  startingPrice: string;
}

interface MainServiceItemsType {
  id?: number | string;
  icon: string;
  title: string;
  description: string;
  link: string;
}

interface ServiceType {
  _id?: string;
  id?: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  rating?: number;
  reviws?: string;
  link: string;
  thumbnail?: string;
}

interface RegulationTextType {
  id?: number | string;
  title: string;
}

interface CompanyLogoType {
  id?: number | string;
  link: string;
}

interface RiskTagsType {
  id?: number | string;
  code: string;
}

interface RiskTableContentsType {
  id?: number | string;
  risk_Code: string;
  risk_Title: string;
  Description: string;
}

interface RuleTableContentsType {
  _id?: string;
  no: string;
  ruleCode: string;
  rule: string;
  description: string;
}

interface BlogType {
  id?: string | number;
  thumbnail: string;
  title: string;
  shortDes: string;
  link: string;
}

interface RegulationType {
  id?: string | number;
  name: string;
}

interface RegulationRulesListType {
  id?: number | string;
  type: string;
  count: number;
}

interface RegulationTableListType {
  id?: number | string;
  type: string;
  number: number | string;
  year: number | string;
  about: string;
}

interface ServicesListType {
  id?: number | string;
  name: string;
}

type BonusItem = {
  bonusTitle: string;
  bonusSubTitle: string;
  icon: string;
};
type ServiceBasicInfo = {
  serviceName: string;
  shortDes: string;
  isBestSeller: boolean;
  thumbnail: string;
  description: string;
  lotsOfBonus: BonusItem[];
};

type IntroductionType = {
  content: string[];
  isBoxStyle: boolean;
};

type ProcessStep = {
  subsection: string;
  content: string[];
};

type ProcessStep2 = {
  content: string[];
};

type PricingFeature = {
  name: string;
  plans: {
    "plans-1": boolean;
    "plans-2": boolean;
    "plans-3"?: boolean;
  };
};
type PricingType = {
  plans: string[];
  features: PricingFeature[];
  prices: {
    "plans-1": string;
    "plans-2": string;
    "plans-3"?: string;
  };
  footerImg?: string;
};
type PricingType2 = {
  priceTitle: string;
  price: string;
  subTitle: string;
  isJobCompletion: boolean;
};
type FAQ = {
  question: string;
  ans: string;
};
type QuizItem = {
  id: number;
  question: string;
  options: string[];
};

type VoucherDetailsType = {
  thumbnail: string;
  services: string[];
  price: string;
  isLimitedTime: boolean;
  voucherImg: string;
  features_Price: {
    category: string;
    name: string;
    price: string;
    features: string[];
  }[];
  isJobCompletion: boolean;
};
type Condition3Props = {
  title: string;
  content: {
    title: string;
    item: string[];
  }[];
};

type ServiceData = {
  serviceBasicInfo: ServiceBasicInfo;
  introduction: IntroductionType;
  process: ProcessStep[];
  requiredDocuments: string[];
  choosingBusinessField: string[];
  pricing: PricingType;
  virtualOffice: boolean;
  faqs: FAQ[];
  quiz: QuizItem[];
  voucherDetails: VoucherDetailsType;
};

interface ProposalType {
  _id?: string | number;
  id?: string | number;
  category: string;
  name: string;
  price: string;
  features: string[];
}

interface UserType {
  _id?: string | number;
  fullName: string;
  email: string;
  whatsappNumber: string;
  service: string;
  username: string;
  notes?: string;
  status: string;
  address?: string;
}
export interface ServiceType2 {
  id: string;
  name: string;
}

export type {
  BlogType,
  BonusItem,
  CompanyLogoType,
  Condition3Props,
  FAQ,
  HeroServiceItemsType,
  IntroductionType,
  MainServiceItemsType,
  MenuItem,
  MenuItemsWithBanner,
  PricingFeature,
  PricingType,
  PricingType2,
  ProcessStep,
  ProcessStep2,
  ProposalType,
  QuizItem,
  RegulationRulesListType,
  RegulationTableListType,
  RegulationTextType,
  RegulationType,
  RiskTableContentsType,
  RiskTagsType,
  ServiceBasicInfo,
  ServiceData,
  ServicesListType,
  ServiceType,
  VoucherDetailsType,
  UserType,
  RuleTableContentsType,
};
