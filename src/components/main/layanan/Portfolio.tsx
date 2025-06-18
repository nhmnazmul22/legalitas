import { Button } from "@/components/ui/button";
import Image from "next/image";

const products = [
  {
    brand: "Gripp",
    logoColor: "text-cyan-500",
    image: "/images/portofolio-img/portfolio-img-1.png",
    name: "K3L Sandal",
  },
  {
    brand: "duzzel",
    logoColor: "text-blue-300",
    image: "/images/portofolio-img/portfolio-img-2.png",
    name: "K3L Selimut",
  },
  {
    brand: "Bloom",
    logoColor: "text-pink-500",
    image: "/images/portofolio-img/portfolio-img-3.png",
    name: "K3L Electric Shaver",
  },
  {
    brand: "Bloom",
    logoColor: "text-pink-500",
    image: "/images/portofolio-img/portfolio-img-4.png",
    name: "K3L Electric Shaver",
  },
];

export default function Portfolio() {
  return (
    <div className="">
      <h2 className="text-lg font-bold mb-2">Portofolio Klien</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
        {products.map((product, index) => (
          <div key={index} className="">
            <div className="p-0">
              <figure>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full"
                />
              </figure>
              <Button className="btn-gradient w-full mt-2 py-1 text-black text-xs rounded">
                Lihat Produk
              </Button>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-600 text-left">
        Masih banyak jenis produk dan barang yang pernah kami urus. Segera
        hubungi kami via{" "}
        <span className="theme-gradient font-semibold">Whatsapp</span>
      </p>
    </div>
  );
}
