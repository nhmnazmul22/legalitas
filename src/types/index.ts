interface MenuItem {
  title: string;
  link: string;
  children?: MenuItem[];
}

export type { MenuItem };
