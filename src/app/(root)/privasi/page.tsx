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
          Kebijakan Privasi
        </h1>
        <div className="p-10 max-w-4xl w-full">
          <div className="space-y-6 text-gray-800 text-justify leading-relaxed text-sm sm:text-base">
            <p className="text-sm text-muted-foreground">
              Halaman ini mengatur mengenai kebijakan privasi (“Kebijakan
              Privasi”) dimana anda (“Anda”) menggunakan layanan Legalitas.org
              (“Legalitas.org”). Jika Anda tidak setuju atas Kebijakan Privasi
              ini, silakan tidak melakukan registrasi atau tidak menggunakan
              layanan Legalitas.org.
            </p>

            <h2 className="font-semibold text-xl mt-6">1. Umum</h2>
            <p className="text-sm text-muted-foreground">
              Kebijakan Privasi ini menjelaskan tentang bagaimana kami
              mengumpulkan, menggunakan, menampilkan serta memproses informasi
              milik Anda terkait dengan layanan yang tersedia di Legalitas.org
              (“Layanan”).
            </p>
            <p className="text-sm text-muted-foreground">
              Apabila Anda memiliki pertanyaan sehubungan dengan Kebijakan
              Privasi ini, Anda dapat menghubungi kami pada bagian Kontak Kami
              di bagian bawah Kebijakan Privasi ini.
            </p>
            <p className="text-sm text-muted-foreground">
              Kebijakan Privasi ini dapat diubah, modifikasi, tambah, hapus atau
              koreksi (“Perubahan”) setiap saat dan berlaku sejak dinyatakan
              oleh Legalitas.org.
            </p>

            <h2 className="font-semibold text-xl mt-6">
              2. Pengumpulan Informasi
            </h2>
            <p className="text-sm text-muted-foreground">
              Informasi yang kami kumpulkan:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="text-sm text-muted-foreground">
                Email saat Anda berlangganan blog.
              </li>
              <li className="text-sm text-muted-foreground">
                Informasi kunjungan seperti IP address, log, waktu, durasi.
              </li>
              <li className="text-sm text-muted-foreground">
                Cookie untuk mempersonalisasi pengalaman pengguna.
              </li>
              <li className="text-sm text-muted-foreground">
                Informasi tambahan melalui survei, kontes, dll.
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-6">
              3. Penggunaan Informasi
            </h2>
            <p className="text-sm text-muted-foreground">
              Untuk informasi hukum terbaru, peningkatan layanan, dan promosi.
            </p>

            <h2 className="font-semibold text-xl mt-6">
              4. Pengungkapan Informasi
            </h2>
            <p className="text-sm text-muted-foreground">
              Informasi Anda tidak akan dijual atau disewakan kepada pihak
              ketiga.
            </p>

            <h2 className="font-semibold text-xl mt-6">
              5. Penyimpanan dan Keamanan Informasi
            </h2>
            <p className="text-sm text-muted-foreground">
              Informasi disimpan di server Legalitas.org dan digunakan sesuai
              kebutuhan.
            </p>
            <p className="text-sm text-muted-foreground">
              Kami menggunakan SSL dan protokol keamanan lainnya, namun tidak
              bisa menjamin keamanan 100%.
            </p>

            <h2 className="font-semibold text-xl mt-6">
              6. Perubahan/Penghapusan Informasi
            </h2>
            <p className="text-sm text-muted-foreground">
              Anda dapat melakukan perubahan dan/atau penghapusan informasi Anda
              kapan saja.
            </p>

            <h2 className="font-semibold text-xl mt-6">7. Tautan Lain</h2>
            <p className="text-sm text-muted-foreground">
              Layanan ini mungkin mengandung tautan ke situs lain yang tidak
              dioperasikan oleh Legalitas.org.
            </p>

            <h2 className="font-semibold text-xl mt-6">8. Lain-lain</h2>
            <p className="text-sm text-muted-foreground">
              Versi asli dalam Bahasa Indonesia adalah yang berlaku secara
              hukum.
            </p>

            <h2 className="font-semibold text-xl mt-6">9. Kontak Kami</h2>
            <p className="text-sm text-muted-foreground">
              Apabila Anda memiliki pertanyaan terkait dengan Kebijakan Privasi
              ini, hubungi kami di:
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
