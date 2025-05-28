import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="mt-5">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-base">
            Berapa minimal Modal Dasar PT?
          </AccordionTrigger>

          <AccordionContent className="text-muted-foreground text-sm leading-[24px]">
            Sesuai dengan UU Cipta Kerja (dengan semangat mempermudah investasi
            dan membuka lapangan kerja), saat ini sudah tidak ada lagi ketentuan
            minimal Modal Dasar dalam mendirikan PT. Jadi para pendiri PT bisa
            saja mendirikan PT dengan Modal Dasar Rp 2 juta saja. Akan tetapi
            saat masih tetap berlaku ketentuan 25% (dua puluh lima persen) dari
            Modal Dasar itu harus disetorkan sebagai Modal Disetor
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-base">
            Kenapa harus memilih PT?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-sm leading-[24px]">
            PT memiliki pemisahan harta kekayaan pribadi dengan harta PT. Dengan
            demikian terdapat perlindungan kepada pemegang saham atas kerugian
            yang dialami PT. Bahwa pemegang saham hanya bertanggung jawab
            sebatas modalnya saja. <br /> Contoh: Pemegang saham A menyetor 20,
            PT nya rugi 50. Maka atas kerugian tersebut, maka setoran A sudah
            habis dan PT-nya lah yang harus menanggung kerugian 30.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-base">
            Bolehkah mendirikan PT hanya 1 orang?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-sm leading-[24px]">
            PT yang dimaksud adalah PT persekutuan modal atau PT biasa atau PT
            yang dimaksud UU 40/2007, maka minimal didirikan oleh 2 (dua) orang.
            <br />
            Akan tetapi sejak berlaku UU Cipta Kerja, dimungkinkan didirikan PT
            oleh 1 (satu) orang saja, yaitu disebut Perseroan Perseroan atau
            yang kami sebut PT Perorangan.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-base">
            Bonus apa saja yang saya dapatkan?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-sm leading-[24px]">
            Legalitas.org memberikan bonus sebagai berikut: (1) Dapat 20 KBLI;
            (2) Buka 5 (lima) rekening Bank; (3) Stempel perusahaan; (4) Kartu
            nama 1 (satu) Direktur; (5) EFIN Badan; dan (6) Akun OSS, Izin Impor
            & Akses Kepabeanan.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
