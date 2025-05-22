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

export type { HeroServiceItemsType, MenuItem };
