import Blogs from "@/components/main/Blogs";
import Reviews from "@/components/main/Reviews";
import Link from "next/link";
import React from "react";

export default function SyaratKetentuan() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10 text-center">
        <div className="bg-white w-[210px] text-center text-sm font-medium shadow-lg py-4 rounded-md">
          🏆 Layanan legalitas terbaik
        </div>
        <h1 className="text-5xl font-bold text-center mb-6 mt-3">
          Syarat & Ketentuan
        </h1>
        <div className="bg-white shadow-lg rounded-xl p-10 max-w-4xl w-full">
          <div className="space-y-6 text-gray-800 text-justify leading-relaxed text-sm sm:text-base">
            <p className="text-sm text-muted-foreground">
              Halaman ini mengatur mengatur mengenai Syarat dan Ketentuan
              ("Syarat dan Ketentuan") dimana anda (“Anda”) menggunakan layanan
              Legalitas.org (“Legalitas.org”). Jika Anda tidak setuju atas
              Syarat dan Ketentuan ini, silahkan tidak menggunakan layanan
              Legalitas.org.
            </p>

            <h2 className="font-semibold text-xl mt-6">1. Umum</h2>
            <p className="text-sm text-muted-foreground">
              Syarat dan Ketentuan ini mengatur penggunaan seluruh layanan dan
              fitur-fitur yang tersedia di website Legalitas.org berikut segala
              informasi, tulisan, gambar atau material lainnya yang di upload,
              di download atau ditampilkan dalam website Legalitas.org (secara
              bersama-sama disebut sebagai “Layanan”).
            </p>
            <p className="text-sm text-muted-foreground">
              Layanan ini dimiliki, dioperasikan dan diselenggarakan oleh PT
              Infiniti Global Ventura, perseroan terbatas yang didirikan
              berdasarkan hukum Republik Indonesia yang telah memperoleh ijin
              dalam melakukan kegiatan usaha dan Layanan Legalitas.org tersedia
              secara online melalui website Legalitas.org atau berbagai akses,
              media, perangkat dan platform lainnya, baik yang sudah atau akan
              tersedia dikemudian hari.
            </p>
            <p className="text-sm text-muted-foreground">
              Dengan telah melakukan menggunakan Layanan Legalitas.org, Anda
              dianggap:
            </p>
            <ul className="list-disc ml-6">
              <li className="text-sm text-muted-foreground">
                memberikan persetujuan kepada Legalitas.org untuk menggunakan
                informasi yang diberikan untuk tujuan sebagaimana diatur dalam
                Syarat dan Ketentuan ini.
              </li>
              <li className="text-sm text-muted-foreground">
                melepaskan hak untuk menggugat maupun menuntut atas segala
                pernyataan, kekeliruan, ketidaktepatan atau kekurangan dalam
                setiap konten yang dicantumkan dan disampaikan dalam situs
                Legalitas.org
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Pemberian layanan dari Legalitas.org atas hal-hal yang diatur
              dalam bagian Services, akan diatur lebih lanjut di dalam
              Perjanjian lebih rinci.
            </p>
            <p className="text-sm text-muted-foreground">
              Apabila Anda memiliki pertanyaan sehubungan dengan Syarat
              Ketentuan ini, Anda dapat menghubungi kami pada bagian Kontak Kami
              di bagian bawah Syarat Ketentuan ini.
            </p>
            <p className="text-sm text-muted-foreground">
              Syarat dan Ketentuan ini dapat diubah, modifikasi, tambah, hapus
              atau koreksi (“Perubahan”) setiap saat dan setiap perubahan itu
              berlaku sejak saat Legalitas.org nyatakan berlaku atau pada waktu
              lain yang ditetapkan oleh Legalitas.org. Legalitas.org tidak
              memberikan pemberitahuan apabila terjadi Perubahan Syarat dan
              Ketentuan dan karenanya, Legalitas.org menganjurkan untuk
              mengunjungi Layanan Legalitas.org secara berkala agar dapat
              mengetahui adanya perubahan tersebut.
            </p>

            <h2 className="font-semibold text-xl mt-6">2. Berlangganan Blog</h2>
            <p className="text-sm text-muted-foreground">
              Ketika Anda mengisikan email untuk berlangganan blog
              Legalitas.org, Anda bersedia untuk menerima email dari
              Legalitas.org berupa informasi hukum terbaru, promosi-promosi,
              serta hal-hal lain yang dapat membantu Legalitas.org agar dapat
              memberikan layanan terbaik.
            </p>

            <h2 className="font-semibold text-xl mt-6">
              3. Pemberian Layanan Oleh Legalitas.org
            </h2>
            <p className="text-sm text-muted-foreground">
              Seluruh informasi dan data yang disediakan pada Legalitas.org
              adalah bersifat umum dan disediakan untuk tujuan pendidikan dan
              pengenalan hukum terhadap masyarakat. Dengan demikian tidak
              dianggap sebagai suatu kebenaran mutlak.
            </p>
            <p className="text-sm text-muted-foreground">
              Pada dasarnya Legalitas.org tidak menyediakan informasi yang
              bersifat rahasia.
            </p>
            <p className="text-sm text-muted-foreground">
              Legalitas.org dengan ini menjamin kerahasiaan untuk menjaga
              informasi yang telah yang telah anda berikan, kecuali apa yang
              akan akan digunakan dalam Layanan Legalitas.org.
            </p>
            <p className="text-sm text-muted-foreground">
              Akses Anda terhadap Layanan Legalitas.org tidak selalu tersedia
              sewaktu-waktu, karena terhadap Layanan dapat dilakukan perbaikan,
              perawatan, penambahan konten baru, fasilitas atau layanan lainnya.
              Legalitas.org akan memberikan pemberitahuan apabila sewaktu-waktu
              terjadi pembatasan akses.
            </p>
            <p className="text-sm text-muted-foreground">
              Legalitas.org tidak dapat menjamin bahwa Layanan Legalitas.org
              akan bebas dari gangguan, kerusakan atau memiliki masalah server,
              bebas dari virus dan masalah lainnya. Apabila terjadi gangguan
              dalam Layanan Legalitas.org, Anda harus memberi tahu kepada
              Legalitas.org dan Legalitas.org akan melakukan perbaikan secepat
              mungkin.
            </p>

            <h2 className="font-semibold text-xl mt-6">
              4. Penyangkalan / Disclaimer
            </h2>
            <p className="text-sm text-muted-foreground">
              Legalitas.org tidak dapat digugat maupun dituntut atas segala
              pernyataan, kekeliruan, ketidaktepatan atau kekurangan dalam
              setiap konten yang dicantumkan dan disampaikan dalam situs
              Legalitas.org.
            </p>
            <p className="text-sm text-muted-foreground">
              Legalitas.org berhak sepenuhnya mengubah judul dan/atau isi
              pertanyaan tanpa mengubah substansi dari hal-hal yang ditanyakan
              kepada Legalitas.org.
            </p>
            <p className="text-sm text-muted-foreground">
              Artikel- Artikel tertentu pada Legalitas.org mungkin sudah tidak
              sesuai / tidak relevan dengan peraturan perundang-undangan yang
              berlaku saat ini.
            </p>
            <p className="text-sm text-muted-foreground">
              Disarankan untuk mengecek kembali dasar hukum yang digunakan dalam
              artikel-artikel Legalitas.org untuk memastikan keberlakuan
              peraturan perundang-undangan.
            </p>
            <p className="text-sm text-muted-foreground">
              Untuk memastikan suatu kebenaran atas artikel, anda dapat
              menghubungi seorang penasehat hukum yang ahli di bidangnya.
            </p>

            <h2 className="font-semibold text-xl mt-6">5. Iklan</h2>
            <p className="text-sm text-muted-foreground">
              Dalam Layanan Legalitas.org terdapat iklan yang dilakukan oleh
              pengguna sponsor pihak ketiga (“Pengiklan”).
            </p>
            <p className="text-sm text-muted-foreground">
              Legalitas.org berhak menghapus atau mengubah atau mengganti atau
              menolak pemasangan materi iklan oleh Pengiklan tanpa memberikan
              alasan.
            </p>
            <p className="text-sm text-muted-foreground">
              Pengiklan bertanggung jawab atas materi iklan dalam Layanan
              Legalitas.org, dan karenanya Pengiklan melepaskan Legalitas.org
              dari tanggung jawab atas materi iklan yang dilakukan oleh
              Pengiklan.
            </p>

            <h2 className="font-semibold text-xl mt-6">6. Pembayaran Fee</h2>
            <p className="text-sm text-muted-foreground">
              Pemberian Layanan pada dasarnya adalah gratis.
            </p>
            <p className="text-sm text-muted-foreground">
              Khusus untuk pemberian Layanan Services, akan didasarkan pada
              perjanjian terpisah diluar dari Syarat dan Ketentuan ini.
            </p>

            <h2 className="font-semibold text-xl mt-6">7. Pelepasan Hak</h2>
            <p className="text-sm text-muted-foreground">
              Anda setuju bahwa pada dasarnya Layanan Legalitas.org adalah
              bertujuan untuk pendidikan dan pengenalan hukum kepada masyarakat,
              dan karenanya Anda dengan ini melepaskan Legalitas.org, karyawan
              Legalitas.org, penulis artikel serta pihak manapun yang
              bekerjasama dengan Legalitas.org atas segala tanggung jawab
              sehubungan dengan pemberian Layanan dalam Legalitas.org.
            </p>
            <p className="text-sm text-muted-foreground">
              Anda setuju bahwa Anda tidak akan melakukan klaim, gugatan, maupun
              tuntutan kepada Legalitas.org, karyawan Legalitas.org, penulis
              artikel serta pihak manapun yang bekerjasama dengan Legalitas.org,
              baik untuk sekarang maupun di kemudian hari.
            </p>
            <p className="text-sm text-muted-foreground">
              Apabila terdapat artikel yang setidak-tidaknya terdapat
              ketidaktepatan atas fakta dan/atau penggunaan peraturan dan/atau
              penggunaan sumber tulisan dan kejadian lainnya yang dapat
              mengakibatkan pemberian Layanan menjadi merugikan pihak lain, maka
              Anda dapat meminta kepada Legalitas.org untuk tidak menampilkan
              artikel dalam Layanan dengan mengirimkan email keberatan yang
              ditujukan kepada alamat email sebagaimana dimaksud dalam Kontak
              Kami di bagian paling bawah Syarat dan Ketentuan ini.
            </p>

            <h2 className="font-semibold text-xl mt-6">
              8. Layanan Tersedia “As Is”
            </h2>
            <p className="text-sm text-muted-foreground">
              Seluruh informasi, atau konten dalam bentuk apapun yang tersedia
              pada website layanan ini disediakan sebagaimana adanya dan
              sebagaimana tersedia tanpa adanya jaminan apapun baik tersirat
              maupun tersurat.
            </p>

            <h2 className="font-semibold text-xl mt-6">9. Keamanan</h2>
            <p className="text-sm text-muted-foreground">
              Dalam mengakses informasi Akun Anda dalam Layanan Legalitas.org,
              Anda akan menggunakan akses Secure Server Layer (SSL) yang akan
              mengenkripsi informasi yang ditampilkan dalam Layanan
              Legalitas.org.
            </p>
            <p className="text-sm text-muted-foreground">
              Legalitas.org tidak bisa menjamin seberapa kuat atau efektifnya
              enkripsi ini dan Legalitas.org tidak akan bertanggung jawab atas
              masalah yang terjadi akibat pengaksesan tanpa ijin dari informasi
              yang Anda sediakan.
            </p>

            <h2 className="font-semibold text-xl mt-6">
              10. Hukum Yang Berlaku
            </h2>
            <p className="text-sm text-muted-foreground">
              Hukum yang berlaku dalam Syarat dan Ketentuan ini adalah Hukum
              Negara Republik Indonesia
            </p>

            <h2 className="font-semibold text-xl mt-6">11. Lain-lain</h2>
            <p className="text-sm text-muted-foreground">
              Versi asli dari Syarat dan Ketentuan ini adalah dalam Bahasa
              Indonesia, dan dapat diterjemahkan ke dalam bahasa lain. Versi
              terjemahan dibuat untuk memberi kemudahan bagi pengguna asing, dan
              tidak bisa dianggap sebagai terjemahan resmi. Jika ditemukan
              adanya perbedaan antara versi Bahasa Indonesia dan versi bahasa
              lainnya dari syarat dan ketentuan ini, maka yang berlaku dan
              mengikat adalah versi Bahasa Indonesia.
            </p>
            <p className="text-sm text-muted-foreground">
              Setiap perselisihan dalam Layanan Legalitas.org akan diselesaikan
              secara musyawarah mufakat dan apabila tidak tercapai musyawarah
              mufakat, maka akan diselesaikan di badan arbitrase.
            </p>

            <h2 className="font-semibold text-xl mt-6">12. Kontak Kami</h2>
            <p className="text-sm text-muted-foreground">
              Apabila Anda memiliki pertanyaan terkait dengan Syarat dan
              Ketentuan ini, hubungi kami di:
            </p>
            <p className="text-md theme-gradient">
              <Link href="mailto:mitrajasalegalitas@email.com">
                <strong>mitrajasalegalitas@email.com</strong>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Reviews />
      <Blogs />
    </>
  );
}
