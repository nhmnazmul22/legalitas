import Blogs from "@/components/main/Blogs";
import BankPartner from "@/components/main/layanan/BankPartner";
import BreadCrumb from "@/components/main/layanan/BreadCrumb";
import Condition2 from "@/components/main/layanan/Condition2";
import Faq from "@/components/main/layanan/Faq";
import LegalBasis from "@/components/main/layanan/LegalBasis";
import PageHeading from "@/components/main/layanan/PageHeading";
import Pricing from "@/components/main/layanan/Pricing";
import Process from "@/components/main/layanan/Process";
import Quiz from "@/components/main/layanan/Quiz";
import Review from "@/components/main/layanan/Review";
import ServiceBasicInfo from "@/components/main/layanan/ServiceBasicInfo";
import TabsSection from "@/components/main/layanan/Tabs";
import Voucher from "@/components/main/layanan/Voucher";
import MainService from "@/components/main/MainService";
import Reviews from "@/components/main/Reviews";
import { Separator } from "@/components/ui/separator";
import PageData from "@/data/service/izin-konstruksi.json";

export default async function ServiceDetailsPage() {
  const basicInfo = PageData.serviceBasicInfo;
  const introduction = PageData.introduction;
  const process = PageData.process;
  const requiredDocuments = PageData.requiredDocuments;
  const faqs = PageData.faqs;
  const pricing = PageData.pricing;
  const quiz = PageData.quiz;
  const voucherDetails = PageData.voucherDetails;

  return (
    <section className="relative">
      <div className="hero-banner">
        <div className="container py-10 md:py-20">
          <div className="max-w-3xl">
            <BreadCrumb pageName="Jasa Izin Konstruksi" />
            {basicInfo && (
              <PageHeading
                title={basicInfo.serviceName}
                subTitle="Legalitas.org memberikan layanan legalitas"
                shortDes={basicInfo.shortDes}
                reviews={100}
                isTypeWriter={true}
              />
            )}
          </div>
        </div>
      </div>
      <div className="container my-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="flex-1">
            <ServiceBasicInfo
              thumbnail={basicInfo.thumbnail}
              description={basicInfo.description}
              lotsOfBonus={basicInfo.lotsOfBonus}
            />
            <div className="mt-10">
              <TabsSection
                introduction={introduction}
                process2={process}
                requiredDocuments2={requiredDocuments}
                faqs={faqs}
                pricing2={pricing}
                quiz={quiz}
              />
              <LegalBasis />
              <Process process2={process} />
              <Condition2 requiredDocuments={requiredDocuments} />
              <Pricing pricing2={pricing} />
              <Faq faq={faqs} />
              <Quiz quiz={quiz} />
              <BankPartner />
              <Review />
            </div>
          </div>
          <div className="w-full lg:max-w-md secondary-hero-banner shadow p-[3px] rounded-md sticky top-[10%]">
            <Voucher voucherDetails={voucherDetails} />
          </div>
        </div>
      </div>
      <Separator className="my-10" />
      <MainService />
      <Reviews />
      <Blogs />
    </section>
  );
}
