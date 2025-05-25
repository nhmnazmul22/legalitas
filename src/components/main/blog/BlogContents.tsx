const BlogContents = () => {
  return (
    <div className="max-w-[400px] block max-xl:hidden">
      <h4 className="text-lg font-semibold">Konten Tulisan</h4>
      <ul className="blog-content flex flex-col gap-1 mt-3 text-sm text-muted-foreground font-normal">
        <li>Dasar Hukum</li>
        <li>
          Penjelasan Umum
          <ol>
            <li>1. Pengertian Likuidator Dalam Pembubaran</li>
            <li>2. Pengertian Kurator Dalam Pembubaran</li>
          </ol>
        </li>
        <li>
          Tugas dan Tanggung Jawab Likuidator dan Kurator
          <ol>
            <li>1. Tugas dan Tanggung Jawab Likuidator</li>
            <li>2. Tugas dan Tanggung Jawab Kurator</li>
          </ol>
        </li>
        <li>
          Peran dan Kewenangan Likuidator dan Kurator Dalam Pembubaran
          <ol>
            <li>1. Peran dan Kewenangan Likuidator</li>
            <li>2. Peran dan Kewenangan Kurator</li>
          </ol>
        </li>
        <li>Perbedaan Likuidator dan Kurator dalam Pembubaran</li>
        <li>Kesimpulan</li>
        <li>Penutup</li>
      </ul>
    </div>
  );
};

export default BlogContents;
