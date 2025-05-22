import {
  HeroServiceItemsType,
  MainServiceItemsType,
  MenuItem,
  ServiceType,
} from "@/types";

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
    thumbnail: "/images/hero-service-banner-01.png",
    title: "Pendirian PT",
    description:
      "Bentuk badan usaha yang paling banyak digunakan di Indonesia.",
    rating: "5",
    startingPrice: "3",
    link: "/",
  },
  {
    id: 2,
    thumbnail: "/images/hero-service-banner-02.png",
    title: "Pendirian PT Perorangan",
    description: "PT yang didirikan oleh 1 (satu) orang.",
    rating: "5",
    startingPrice: "2",
    link: "/",
  },
  {
    id: 3,
    thumbnail: "/images/hero-service-banner-03.png",
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
    icon: "/images/main-service-icon-01.png",
  },
  {
    id: 2,
    title: "Pendekatan Hukum",
    description: "Kami bekerja berdasarkan dasar hukum dan aspek legalitas.",
    icon: "/images/main-service-icon-02.png",
  },
  {
    id: 3,
    title: "Seluruh Indonesia",
    description: "Jangkauan layanan legalitas paling luas - seluruh Indonesia.",
    icon: "/images/main-service-icon-03.png",
  },
  {
    id: 4,
    title: "Rekanan & Partnership",
    description: "Kami bekerjasama dengan penyedia virtual office terbaik.",
    icon: "/images/main-service-icon-04.png",
  },
];

const services: ServiceType[] = [
  {
    id: "srv-1",
    title: "Pendirian PT",
    price: "Rp 3juta",
    description: "Bentuk badan usaha yang banyak digunakan",
    includes: [
      "Pengecekan Nama PT",
      "Pemesanan Nama PT",
      "Persiapan Minuta",
      "Akta Pendirian PT",
      "SK Menteri",
      "Dapat 20 KBLI",
    ],
  },
  {
    id: "srv-2",
    title: "PT Perorangan",
    price: "Rp 2.25juta",
    description: "PT yang didirikan oleh 1 (satu) orang",
    includes: [
      "Pengecekan Nama PT Perorangan",
      "Pemesanan Nama PT Perorangan",
      "Pernyataan Pendaftaran",
      "SK Menteri",
      "Dapat 20 KBLI",
    ],
  },
  {
    id: "srv-3",
    title: "Pendirian CV",
    price: "Rp 2.25juta",
    description: "Bentuk badan usaha yang paling tua dan sederhana",
    includes: [
      "Pengecekan Nama CV",
      "Pemesanan Nama CV",
      "Persiapan Minuta",
      "Akta Pendirian CV",
      "SK Menteri",
      "Dapat 20 KBLI",
    ],
  },
  {
    id: "srv-4",
    title: "Pendirian PT PMA",
    price: "Rp 5.25juta",
    description: "PT dengan unsur kepemilikan saham asing",
    includes: [
      "Pengecekan Nama PT PMA",
      "Pemesanan Nama PT PMA",
      "Persiapan Minuta",
      "Akta Pendirian PT PMA",
      "SK Menteri",
      "Dapat 20 KBLI",
    ],
  },
  {
    id: "srv-5",
    title: "Perubahan Akta",
    price: "Rp 5juta",
    description: "Perubahan anggaran dasar / Akta Notaris",
    includes: [
      "Drafting dokumen",
      "Persiapan Minuta",
      "Akta Notaris Perubahan",
      "SK Persetujuan / SK Pemberitahuan",
      "Dapat 20 KBLI",
      "Update di OSS",
    ],
  },
  {
    id: "srv-6",
    title: "SBUJK Konstruksi",
    price: "Rp 31.5juta",
    description: "Sertifikat standar ter-verifikasi di bidang konstruksi",
    includes: [
      "Termasuk pengurusan 2 (dua) SKT/SKTK Tenaga Ahli",
      "Pengurusan SBU di LSBU",
      "Pengurusan KTA di Asosiasi (Gapensi atau sejenisnya)",
    ],
  },
  {
    id: "srv-7",
    title: "Registrasi K3L",
    price: "Rp 5juta",
    description: "Pendaftaran produk wajib K3L di Kemendag",
    includes: [
      "Konsultasi terkait produk",
      "Uji lab dan label tersertifikasi",
      "Izin K3L dari OSS",
      "Konsultasi pelabelan",
    ],
  },
  {
    id: "srv-8",
    title: "Pisah Harta",
    price: "Rp 5juta",
    description:
      "Pembuatan dan register Perjanjian Pisah Harta / Prenuptial Agreement",
    includes: [
      "Konsultasi hukum keluarga",
      "Akta Notaris Pisah Harta",
      "Pendaftaran Akta Pisah Harta di KUA",
      "Pendaftaran Akta Pisah Harta di Dukcapil",
    ],
  },
];

export { heroServiceItems, mainServiceItems, menuItems, services };
