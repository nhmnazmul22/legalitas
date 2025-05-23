interface MenuItem {
  title: string;
  link: string;
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

export type {
  CompanyLogoType,
  HeroServiceItemsType,
  MainServiceItemsType,
  MenuItem,
  RegulationTextType,
  ServiceType,
};
