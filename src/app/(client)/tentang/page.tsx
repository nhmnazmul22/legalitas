import Blogs from "@/components/main/Blogs";
import Reviews from "@/components/main/Reviews";

export default function AboutPage() {
  return (
    <section>
      <div className="w-full bg-secondary/10 py-20">
        <div className="container flex flex-col gap-5">
          <div>
            <h3 className="text-xl font-semibold">Legalitas.org</h3>
            <p className="mt-3 text-sm md:text-base leading-[24px] md:leading-[28px]">
              Legalitas.org adalah platform solusi untuk Anda yang ingin mencari
              peraturan dan regulasi di Indonesia. Selain cepat dan mudah,
              Legalitas.org juga memiliki fitur sorting hierarki peraturan
              perundang-undangan yang memudahkan Anda untuk menelusuri dasar
              hukum suatu peraturan. Urutan hierarki peraturan
              perundang-undangan sesuai dengan ketentuan UU No. 12/2011 yang
              diubah dengan UU No. 15/2019 adalah (a) Undang-Undang Dasar Negara
              Republik Indonesia Tahun 1945; (b) Ketetapan Majelis
              Permusyawaratan Rakyat; (c) UU / PERPPU; (d) Peraturan Pemerintah;
              (e) Peraturan Presiden; (f) Peraturan Daerah Provinsi; dan (g)
              Peraturan Daerah Kabupaten/Kota.
            </p>
            <p className="mt-3 text-sm md:text-base leading-[24px] md:leading-[28px]">
              Cari peraturan di platform Legalitas.org yang terdapat lebih dari
              puluhan ribu peraturan yang dikumpulkan mulai dari tahun 1945
              sampai dengan sekarang. Anda bisa cari peraturan dan bisa langsung
              download dalam bentuk PDF. Pastikan kamu memiliki program Adobe
              minimal 4.0 atau program untuk membuka PDF untuk bisa mengakses
              dokumen yang telah kamu download.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">KBLI 2020</h3>
            <p className="mt-3 text-sm md:text-base leading-[24px] md:leading-[28px]">
              KBLI yang paling terbaru adalah KBLI 2020 yang dikeluarkan
              berdasarkan Perban BPS tahun 2020. Platform Legalitas.org
              memudahkan Anda untuk melakukan pencarian KBLI. Kami telah
              menyusun daftar KBLI 2020 dalam bentuk tabel yang memudahkan Anda
              untuk melakukan penelusuran. Ada penambahan 216 bidang usaha baru
              yang ditambahkan di KBLI 2020, diantaranya adalah 66131, 66132,
              66139, 66411, 66412, 66413, 66420 yang diusulkan ditambahkan oleh
              Bank Indonesia untuk mengakomodir perkembangan usaha baru di jasa
              keuangan.
            </p>
            <p className="mt-3 text-sm md:text-base leading-[24px] md:leading-[28px]">
              Begitu juga dengan instansi lainnya yang mengusulkan untuk
              ditambahkan bidang usaha baru sesuai dengan perkembangan dan
              transformasi bisnis di era digital. Ringkasan perbandingan
              perubahan KBLI 2017 dibanding dengan KBLI 2020 adalah (i) KBLI 3
              digit bertambah 5, (ii) KBLI 4 digit bertambah 47 dan (iii) KBLI 5
              digit bertambah 216.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Berlangganan Tulisan</h3>
            <p className="mt-3 text-sm md:text-base leading-[24px] md:leading-[28px]">
              Anda juga bisa berlangganan Tulisan untuk mendapatkan informasi
              dan update tulisan dan peraturan-peraturan terbaru dari platform
              Legalitas.org. Anda bisa berlangganan dengan mengisi alamat email
              Anda di website www.legalitas.org untuk bisa berlangganan Tulisan
              ini. Selain informasi terkait update peraturan dan tulisan
              terbaru, Anda juga akan mendapatkan informasi dan promo terbaru
              atas jasa dan layanan bisnis yang diberikan yaitu pendirian
              perseroan terbatas, pendirian cv, pendirian firma, pendirian
              persekutuan perdata, jasa pembuatan pt pendirian pt pma, virtual
              office, virtual office, virtual office Jakarta Barat, virtual
              office Jakarta Selatan, virtual office Jakarta Timur, virtual
              office Jakarta Utara, virtual office Jakarta Pusatpengurusan
              perizinan dan jasa lainnya. Jadikan kebutuhan bisnis Anda menjadi
              mudah dengan menggunakan layanan Legalitas.org.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Berkontribusi</h3>
            <p className="mt-3 text-sm md:text-base leading-[24px] md:leading-[28px]">
              Anda dapat berkontribusi dalam platform Legalitas.org dengan
              menambahkan peraturan yang belum ada di dalam database atau
              menambahkan tulisan dan artikel terbaru. Anda bisa submit melalui
              formulir kirim peraturan dan kirim tulisan yang terdapat di footer
              website ini.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Kebijakan COVID-19</h3>
            <p className="mt-3 text-sm md:text-base leading-[24px] md:leading-[28px]">
              Legalitas.org tunduk kepada protokol COVID-19 yang telah diatur
              dan ditetapkan oleh pemerintah pusat maupun pemerintah daerah.
              Kantor Legalitas.org yang berada di gedung bisa saja tutup
              sewaktu-waktu sesuai dengan ketentuan protokol. Untuk konsultasi
              offline disarankan untuk menghubungi kami terlebih dahulu.
            </p>
          </div>
        </div>
      </div>
      <Reviews />
      <Blogs />
    </section>
  );
}
