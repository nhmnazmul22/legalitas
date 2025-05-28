import RatingGen from "@/components/common/RatingGen";
import Condition from "@/components/main/layanan/Condition";
import Faq from "@/components/main/layanan/Faq";
import Introduction from "@/components/main/layanan/Introduction";
import LegalBasis from "@/components/main/layanan/LegalBasis";
import Pricing from "@/components/main/layanan/Pricing";
import Process from "@/components/main/layanan/Process";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

export default function ServiceDetailsPage() {
  return (
    <section className="">
      <div className="hero-banner">
        <div className="container py-10 md:py-20">
          <div className="max-w-3xl">
            <Breadcrumb>
              <BreadcrumbList className="font-semibold">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">layanan</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dynamic Page</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className=" mt-10 ">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold theme-gradient">
                Perseroan Terbatas
              </h2>
              <p className="text-base md:text-lg my-2 leading-[30px] md:leading-[36px]">
                Legalitas.org memberikan layanan legalitas sejak
                2002.terbaik.profesional. Jasa Pendirian PT dengan bonus{" "}
                <span className="secondary-hero-banner px-2 py-1 rounded-full text-white text-sm inline-block">
                  VOUCHER DISKON 10%
                </span>{" "}
                untuk pemesanan berikutnya!
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="bg-primary/20 rounded-full px-3 py-2 flex items-center gap-2 w-fit ring-1 ring-primary">
                  <Image
                    src="/images/main-service-icon-01.png"
                    alt="Best selling"
                    width={300}
                    height={300}
                    className="w-[30px]"
                  />
                  <span className="text-xs inline-block font-semibold">
                    Best Seller
                  </span>
                </div>
                <RatingGen rating={5} size={20} />
                <Link
                  href="/"
                  className="text-xs underline hover:text-secondary-blue duration-300 font-semibold"
                >
                  Lihat 100 Review
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-10">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="max-w-4xl">
            <div className="flex flex-col md:flex-row gap-5 items-start">
              <figure>
                <Image
                  src="/images/hero-service-banner-01.png"
                  alt="Service Banner"
                  width={1024}
                  height={1024}
                  className="rounded-md w-full h-auto object-cover"
                />
              </figure>
              <div className="">
                <p className="text-base md:text-lg leading-[26px] md:leading-[36px]">
                  Jasa legalitas di Indonesia sejak tahun 2002 | Legalitas.org
                  menyediakan layanan pendirian PT + Virtual Office di Jakarta
                  dan bisa PKP | Call Now
                </p>
                <div className="hero-banner p-5 rounded-md border border-primary/20 shadow mt-5">
                  <h3 className="text-lg font-semibold theme-gradient">
                    Banyak bonus:
                  </h3>
                  <ul className="mt-3 grid grid-cols-2 gap-5">
                    <li className="flex items-center gap-2">
                      <Image
                        src="/images/main-service-icon-02.png"
                        alt="Main Service"
                        width={300}
                        height={300}
                        className="w-10"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">
                          5 Rekening
                        </span>
                        <span className="text-sm">Bank</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image
                        src="/images/main-service-icon-01.png"
                        alt="Main Service"
                        width={300}
                        height={300}
                        className="w-10"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">
                          5 Rekening
                        </span>
                        <span className="text-sm">Bank</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image
                        src="/images/main-service-icon-03.png"
                        alt="Main Service"
                        width={300}
                        height={300}
                        className="w-10"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">
                          5 Rekening
                        </span>
                        <span className="text-sm">Bank</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image
                        src="/images/main-service-icon-04.png"
                        alt="Main Service"
                        width={300}
                        height={300}
                        className="w-10"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">
                          5 Rekening
                        </span>
                        <span className="text-sm">Bank</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image
                        src="/images/main-service-icon-01.png"
                        alt="Main Service"
                        width={300}
                        height={300}
                        className="w-10"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">
                          5 Rekening
                        </span>
                        <span className="text-sm">Bank</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image
                        src="/images/main-service-icon-02.png"
                        alt="Main Service"
                        width={300}
                        height={300}
                        className="w-10"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">
                          5 Rekening
                        </span>
                        <span className="text-sm">Bank</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Tabs defaultValue="pengantar" className="w-full">
                <TabsList className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 w-full bg-slate-100 shadow p-2 h-auto">
                  <TabsTrigger value="pengantar">Pengantar</TabsTrigger>
                  <TabsTrigger value="dasar-hukum">Dasar Hukum</TabsTrigger>
                  <TabsTrigger value="proses">Proses</TabsTrigger>
                  <TabsTrigger value="syarat">Syarat</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                  <TabsTrigger value="quiz">Quiz</TabsTrigger>
                  <TabsTrigger value="review">Review</TabsTrigger>
                </TabsList>
                <TabsContent value="pengantar">
                  <Introduction />
                </TabsContent>
                <TabsContent value="dasar-hukum">
                  <LegalBasis />
                </TabsContent>
                <TabsContent value="proses">
                  <Process />
                </TabsContent>
                <TabsContent value="syarat">
                  <Condition />
                </TabsContent>
                <TabsContent value="pricing">
                  <Pricing />
                </TabsContent>
                <TabsContent value="faq">
                  <Faq />
                </TabsContent>
                <TabsContent value="quiz">
                  Make changes to your account here.
                </TabsContent>
                <TabsContent value="review">
                  Make changes to your account here.
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <div className="flex-1 bg-white shadow"></div>
        </div>
      </div>
    </section>
  );
}
