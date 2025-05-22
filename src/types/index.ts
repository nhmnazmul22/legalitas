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

export type { HeroServiceItemsType, MainServiceItemsType, MenuItem };
