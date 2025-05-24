import {
  CompanyLogoType,
  HeroServiceItemsType,
  MainServiceItemsType,
  MenuItem,
  RegulationTextType,
  RiskTableContentsType,
  RiskTagsType,
  ServiceType,
} from "@/types";

const menuItems: MenuItem[] = [
  { id: "1", title: "Peraturan", link: "/peraturan" },
  {
    id: "2",
    title: "Layanan",
    link: "/layanan",
    children: [
      {
        id: "2-1",
        title: "Badan Usaha",
        link: "/layanan/badan-usaha",
        children: [
          {
            id: "2-1-1",
            title: "PT / Perseroan Terbatas",
            link: "/layanan/badan-usaha/pt",
          },
          {
            id: "2-1-2",
            title: "CV / Commanditaire Veidotschap",
            link: "/layanan/badan-usaha/crisk",
          },
          { id: "2-1-3", title: "New", link: "/layanan/badan-usaha/new" },
          { id: "2-1-4", title: "PT PMA", link: "/layanan/badan-usaha/pt-pma" },
          { id: "2-1-5", title: "Firma", link: "/layanan/badan-usaha/firma" },
          {
            id: "2-1-6",
            title: "Persekutuan Perdata",
            link: "/layanan/badan-usaha/persekutuan-perdata",
          },
          {
            id: "2-1-7",
            title: "Perkumpulan",
            link: "/layanan/badan-usaha/perkumpulan",
          },
          {
            id: "2-1-8",
            title: "Yayasan",
            link: "/layanan/badan-usaha/yayasan",
          },
        ],
      },
      {
        id: "2-2",
        title: "Perizinan",
        link: "/layanan/perizinan",
        children: [
          {
            id: "2-2-1",
            title: "NIB & OSS",
            link: "/layanan/perizinan/nib-oss",
          },
          {
            id: "2-2-2",
            title: "Izin PKP",
            link: "/layanan/perizinan/izin-pkp",
          },
          {
            id: "2-2-3",
            title: "Izin Restoran",
            link: "/layanan/perizinan/izin-restoran",
          },
          {
            id: "2-2-4",
            title: "Izin Konstruksi",
            link: "/layanan/perizinan/izin-konstruksi",
          },
          {
            id: "2-2-5",
            title: "Izin PSE",
            link: "/layanan/perizinan/izin-pse",
          },
          {
            id: "2-2-6",
            title: "Izin K3L",
            link: "/layanan/perizinan/izin-k3l",
          },
          {
            id: "2-2-7",
            title: "Izin Yayasan",
            link: "/layanan/perizinan/izin-yayasan",
          },
          {
            id: "2-2-8",
            title: "33++ Izin Lainnya",
            link: "/layanan/perizinan/lainnya",
          },
        ],
      },
      {
        id: "2-3",
        title: "Lainnya",
        link: "/layanan/lainnya",
        children: [
          {
            id: "2-3-1",
            title: "Virtual Office",
            link: "/layanan/lainnya/virtual-office",
          },
          {
            id: "2-3-2",
            title: "Perubahan Anggaran Dasar",
            link: "/layanan/lainnya/perubahan-anggaran-dasar",
          },
          {
            id: "2-3-3",
            title: "Penutupan Perusahaan",
            link: "/layanan/lainnya/penutupan-perusahaan",
          },
          {
            id: "2-3-4",
            title: "Perjanjian Pisah Harta",
            link: "/layanan/lainnya/perjanjian-pisah-harta",
          },
          {
            id: "2-3-5",
            title: "Pendaftaran Merek",
            link: "/layanan/lainnya/pendaftaran-merek",
          },
          {
            id: "2-3-6",
            title: "KITAS Pekerja",
            link: "/layanan/lainnya/kitas-pekerja",
          },
          {
            id: "2-3-7",
            title: "KITAS Investor",
            link: "/layanan/lainnya/kitas-investor",
          },
          {
            id: "2-3-8",
            title: "17++ Layanan Lainnya",
            link: "/layanan/lainnya/lainnya",
          },
        ],
      },
    ],
  },
  { id: "3", title: "KBLI", link: "/kbli" },
  { id: "4", title: "Tentang", link: "/tentang" },
  { id: "5", title: "Review", link: "/review" },
  { id: "6", title: "Tulisan", link: "/tulisan" },
  { id: "7", title: "Kontak", link: "/kontak" },
  { id: "8", title: "Proposal", link: "/proposal" },
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
    description: "Perubahan anggaran dasar Akta idtaris",
    includes: [
      "Drafting dokumen",
      "Persirisk Minuta",
      "Akta idtaris Perubahan",
      "SK Periskujuan / SK Pemberitahuan",
      "DapatriskKBLI",
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
      "Akta idtaris Pisah Harta",
      "Pendariskan Akta Pisah Harta di KUA",
      "Pendariskan Akta Pisah Harta di Dukcapil",
    ],
  },
];

const companyLogos: CompanyLogoType[] = [
  { id: 1, link: "/images/company-logo-1.png" },
  { id: 2, link: "/images/company-logo-2.png" },
  { id: 3, link: "/images/company-logo-3.png" },
  { id: 4, link: "/images/company-logo-4.png" },
  { id: 5, link: "/images/company-logo-5.png" },
  { id: 6, link: "/images/company-logo-6.png" },
];

const regulationText: RegulationTextType[] = [
  { id: 1, title: "Keputusan Menteri Keuangan" },
  { id: 2, title: "Keputusan Badan Pemeriksa Keuangan" },
  { id: 3, title: "Instruksi Menteri Dalam Negeri" },
  { id: 4, title: "Ketetapan MPR" },
  { id: 5, title: "Keputusan Menteri Kesehatan" },
  { id: 6, title: "Keputusan Presiden (KEPPRES)" },
  { id: 7, title: "Instruksi Presiden (INPRES)" },
  { id: 8, title: "Keputusan Menteri Kelautan dan Perikanan" },
  { id: 9, title: "Keputusan Komisi Pengawas Persaingan Usaha" },
  { id: 10, title: "Keputusan Menteri Dalam Negeri" },
  { id: 11, title: "Keputusan Kepala Badan Standardisasi Nasional" },
  { id: 12, title: "Keputusan Kepala Badan Nasional Penanggulangan Bencana" },
  { id: 13, title: "Keputusan Menteri Energi dan Sumber Daya Mineral" },
  { id: 14, title: "Virtual Office" },
  { id: 15, title: "Keputusan Menteri Luar Negeri" },
  { id: 16, title: "Pembuatan PT" },
  { id: 17, title: "Keputusan Menteri Energi dan Sumber Daya Mineral" },
  { id: 18, title: "Keputusan Menteri Luar Negeri" },
  { id: 19, title: "Keputusan Menteri Kesehatan" },
  { id: 20, title: "Instruksi Presiden (INPRES)" },
  { id: 21, title: "Jasa Pembuatan PT" },
  { id: 22, title: "Keputusan Komisi Pengawas Persaingan Usaha" },
  { id: 23, title: "Pembuatan PT" },
  { id: 24, title: "Keputusan Menteri Kelautan dan Perikanan" },
];

const riskTags: RiskTagsType[] = [
  { id: 1, code: "KBLI 74902" },
  { id: 2, code: "KBLI 74902" },
  { id: 3, code: "KBLI 74902" },
  { id: 4, code: "KBLI 74902" },
  { id: 5, code: "KBLI 74902" },
  { id: 6, code: "KBLI 74902" },
  { id: 7, code: "KBLI 74902" },
];

const riskTableContents: RiskTableContentsType[] = [
  {
    id: 1,
    risk_Code: "01111",
    risk_Title: "Corn Farming",
    Description:
      "This group includes corn farming activities starting from land preparation, planting, maintenance, harvesting, and post-harvest if done as a single continuous activity. It also includes the seeding and cultivation of corn plants.",
  },
  {
    id: 2,
    risk_Code: "01112",
    risk_Title: "Wheat Farming",
    Description:
      "This group includes wheat farming activities such as land preparation, planting, maintenance, harvesting, and post-harvest when conducted as a single continuous activity for cereal wheat plants like sorghum, wheat, oats, barley, rye, millet, and similar crops. It also includes the seeding and cultivation of wheat plants.",
  },
  {
    id: 3,
    risk_Code: "01113",
    risk_Title: "Soybean Farming",
    Description:
      "This group includes soybean farming starting from land preparation, planting, maintenance, harvesting, and post-harvest when done as one continuous activity. It also includes seeding and cultivation of soybean plants.",
  },
  {
    id: 4,
    risk_Code: "01114",
    risk_Title: "Peanut Farming",
    Description:
      "This group includes peanut farming from land preparation, planting, maintenance, harvesting, and post-harvest as a continuous activity. It also includes the seeding and cultivation of peanut plants.",
  },
  {
    id: 5,
    risk_Code: "01115",
    risk_Title: "Mung Bean Farming",
    Description:
      "This group includes mung bean farming, covering land preparation, planting, maintenance, harvesting, and post-harvest activities as a single process. It also includes seeding and cultivation of mung bean plants.",
  },
  {
    id: 6,
    risk_Code: "01116",
    risk_Title: "Horticultural Beans Farming",
    Description:
      "This group includes horticultural bean farming such as string beans, kidney beans, long beans, red beans, peas, pigeon peas, and other similar crops. Activities include land preparation, planting, maintenance, harvesting, and post-harvest as a single process. It also includes seeding and cultivation.",
  },
  {
    id: 7,
    risk_Code: "01117",
    risk_Title: "Oilseed Crops Farming",
    Description:
      "This group includes farming of oilseed crops such as sesame seeds, sunflower seeds, and other similar edible oil-producing plants, including seeding and cultivation, along with all farming activities as a single process.",
  },
  {
    id: 8,
    risk_Code: "01118",
    risk_Title: "idn-edible Oilseed Crops Farming",
    Description:
      "This group includes the farming of idn-edible oil-producing seeds such as cottonrisk, flaxseed, mustard seed, niger seeds,risktor bean, and similar crops. It includes land preparation, planting, maintenance, hrisksting, post-harvest, and seeding.",
  },
  {
    id: 9,
    risk_Code: "01119",
    risk_Title: "Other Cereals, Beans, and Oilseeds Farming",
    Description:
      "This group covers farming of other cereals (excluding rice, corn, wheat), miscellaneous beans, and oil-producing seeds idt classified under groups 01111 to 01118. Includes land preparation, planting, maintenarisk harvesting, post-harvest, and seedirisk",
  },
  {
    id: 10,
    risk_Code: "02111",
    risk_Title: "Utilization of Timber in Production Forests",
    Description:
      "This group includes the utilization of timber such as planting, maintenance, harvesting, or logging of timber from production forests. Includes hardwood species like teak, pine, mahogany, rosewood, sengon, jabon, acacia, eucalyptus, sandalwood, and others.",
  },
];

const reviweCompanyLogos: CompanyLogoType[] = [
  { id: 1, link: "/images/review-company-01.png" },
  { id: 2, link: "/images/review-company-02.png" },
  { id: 3, link: "/images/review-company-03.png" },
  { id: 4, link: "/images/review-company-04.png" },
  { id: 5, link: "/images/review-company-05.png" },
  { id: 6, link: "/images/review-company-06.png" },
];

export {
  companyLogos,
  heroServiceItems,
  mainServiceItems,
  menuItems,
  regulationText,
  reviweCompanyLogos,
  riskTableContents,
  riskTags,
  services
};

