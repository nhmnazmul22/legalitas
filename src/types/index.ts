interface MenuItem {
  id?: string | number;
  title: string;
  link?: string;
  children?: MenuItem[];
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
}

interface ServiceType {
  id?: string;
  title: string;
  price: string;
  description: string;
  includes: string[];
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

export type {
  BlogType,
  CompanyLogoType,
  HeroServiceItemsType,
  MainServiceItemsType,
  MenuItem,
  RegulationRulesListType,
  RegulationTableListType,
  RegulationTextType,
  RegulationType,
  RiskTableContentsType,
  RiskTagsType,
  ServicesListType,
  ServiceType,
};
