import { HeroServiceItemsType, MainServiceItemsType, MenuItem } from "@/types";

const menuItems: MenuItem[] = [
  { title: "Peraturan", link: "/peraturan" },
  {
    title: "Layanan",
    link: "/layanan",
    children: [
      {
        title: "Badan Usaha",
        link: "/layanan/badan-usaha",
        children: [
          { title: "PT / Perseroan Terbatas", link: "/layanan/badan-usaha/pt" },
          {
            title: "CV / Commanditaire Venootschap",
            link: "/layanan/badan-usaha/cv",
          },
          {
            title: "PT Perorangan",
            link: "/layanan/badan-usaha/pt-perorangan",
          },
          { title: "New", link: "/layanan/badan-usaha/new" },
          { title: "PT PMA", link: "/layanan/badan-usaha/pt-pma" },
          { title: "Firma", link: "/layanan/badan-usaha/firma" },
          {
            title: "Persekutuan Perdata",
            link: "/layanan/badan-usaha/persekutuan-perdata",
          },
          { title: "Perkumpulan", link: "/layanan/badan-usaha/perkumpulan" },
          { title: "Yayasan", link: "/layanan/badan-usaha/yayasan" },
        ],
      },
      {
        title: "Perizinan",
        link: "/layanan/perizinan",
        children: [
          { title: "NIB & OSS", link: "/layanan/perizinan/nib-oss" },
          { title: "Izin PKP", link: "/layanan/perizinan/izin-pkp" },
          { title: "Izin Restoran", link: "/layanan/perizinan/izin-restoran" },
          {
            title: "Izin Konstruksi",
            link: "/layanan/perizinan/izin-konstruksi",
          },
          { title: "Izin PSE", link: "/layanan/perizinan/izin-pse" },
          { title: "Izin K3L", link: "/layanan/perizinan/izin-k3l" },
          { title: "Izin Yayasan", link: "/layanan/perizinan/izin-yayasan" },
          { title: "33++ Izin Lainnya", link: "/layanan/perizinan/lainnya" },
        ],
      },
      {
        title: "Lainnya",
        link: "/layanan/lainnya",
        children: [
          { title: "Virtual Office", link: "/layanan/lainnya/virtual-office" },
          {
            title: "Perubahan Anggaran Dasar",
            link: "/layanan/lainnya/perubahan-anggaran-dasar",
          },
          {
            title: "Penutupan Perusahaan",
            link: "/layanan/lainnya/penutupan-perusahaan",
          },
          {
            title: "Perjanjian Pisah Harta",
            link: "/layanan/lainnya/perjanjian-pisah-harta",
          },
          {
            title: "Pendaftaran Merek",
            link: "/layanan/lainnya/pendaftaran-merek",
          },
          { title: "KITAS Pekerja", link: "/layanan/lainnya/kitas-pekerja" },
          { title: "KITAS Investor", link: "/layanan/lainnya/kitas-investor" },
          { title: "17++ Layanan Lainnya", link: "/layanan/lainnya/lainnya" },
        ],
      },
    ],
  },
  { title: "KBLI", link: "/kbli" },
  { title: "Tentang", link: "/tentang" },
  { title: "Review", link: "/review" },
  { title: "Tulisan", link: "/tulisan" },
  { title: "Kontak", link: "/kontak" },
  { title: "Proposal", link: "/proposal" },
];

const heroServiceItems: HeroServiceItemsType[] = [
  {
    id: 1,
    thumbnail: "/hero-service-banner-01.png",
    title: "Pendirian PT",
    description:
      "Bentuk badan usaha yang paling banyak digunakan di Indonesia.",
    rating: "5",
    startingPrice: "3",
    link: "/",
  },
  {
    id: 2,
    thumbnail: "/hero-service-banner-02.png",
    title: "Pendirian PT Perorangan",
    description: "PT yang didirikan oleh 1 (satu) orang.",
    rating: "5",
    startingPrice: "2",
    link: "/",
  },
  {
    id: 3,
    thumbnail: "/hero-service-banner-03.png",
    title: "Pendirian PT PMA",
    description: "PT dengan unsur kepemilikan saham asing.",
    rating: "5",
    startingPrice: "5.25",
    link: "/",
  },
];

const mainServiceItems: MainServiceItemsType[] = [
  {
    id: 1,
    title: "22 Tahun Melayani",
    description: "Sejak tahun 2002 kami telah memberikan layanan legalitas.",
    icon: "/main-service-icon-01.png",
  },
  {
    id: 2,
    title: "Pendekatan Hukum",
    description: "Kami bekerja berdasarkan dasar hukum dan aspek legalitas.",
    icon: "/main-service-icon-02.png",
  },
  {
    id: 3,
    title: "Seluruh Indonesia",
    description: "Jangkauan layanan legalitas paling luas - seluruh Indonesia.",
    icon: "/main-service-icon-03.png",
  },
  {
    id: 4,
    title: "Rekanan & Partnership",
    description: "Kami bekerjasama dengan penyedia virtual office terbaik.",
    icon: "/main-service-icon-04.png",
  },
];

export { heroServiceItems, mainServiceItems, menuItems };
