import Heading from "./Heading";
import SubHeading from "./SubHeading";

const Process = () => {
  return (
    <div className="mt-5">
      <Heading text="Proses" />
      <div className="mt-2">
        <SubHeading text="Pendiri PT" />
        <p className="service-paragraph">
          {`Sesuai dengan ketentuan Pasal 7 ayat (1) UU 40/2007 tentang Perseroan
          Terbatas bahwa PT didirikan oleh 2 orang atau lebih. Dimana pengertian
          "orang" sesuai dengan Penjelasan UUPT adalah orang perseorangan, baik
          warga negara Indonesia maupun asing atau badan hukum Indonesia atau
          asing.`}
        </p>
        <p className="service-paragraph">
          Pendiri PT ketika proses jasa pembuatan PT telah menyepakati tentang
          nama, tempat kedudukan, bidang usaha, permodalan dan pengurus serta
          hal lainnya yang akan dituangkan di dalam akta notaris.
        </p>
      </div>
      <div className="mt-2">
        <SubHeading text="Notaris" />
        <p className="service-paragraph">
          Sesuai dengan UU No. 2/2014 tentang Jabatan Notaris bahwa Notaris
          adalah pejabat umum yang membuat akta autentik. Dan sesuai dengan
          Pasal 7 ayat (1) UUPT bahwa Akta Pendirian PT dibuat dengan akta
          notaris dalam Bahasa Indonesia.
        </p>
        <p className="service-paragraph">
          Sesuai dengan Permenkumham No. 21/2021, terhadap Akta Pendirian
          dimohonkan pengesahan badan hukum kepada Menteri melalui sistem SABH.
        </p>
      </div>
    </div>
  );
};

export default Process;
