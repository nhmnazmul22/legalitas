import Blogs from "@/components/main/Blogs";
import BankPartner from "@/components/main/layanan/BankPartner";
import BreadCrumb from "@/components/main/layanan/BreadCrumb";
import Condition from "@/components/main/layanan/Condition";
import Faq from "@/components/main/layanan/Faq";
import LegalBasis from "@/components/main/layanan/LegalBasis";
import PageHeading from "@/components/main/layanan/PageHeading";
import Pricing from "@/components/main/layanan/Pricing";
import Process from "@/components/main/layanan/Process";
import Quiz from "@/components/main/layanan/Quiz";
import Review from "@/components/main/layanan/Review";
import ServiceBasicInfo from "@/components/main/layanan/ServiceBasicInfo";
import TabsSection from "@/components/main/layanan/Tabs";
import VirtualOfficeGallery from "@/components/main/layanan/VirtualOfficeGallery";
import Voucher from "@/components/main/layanan/Voucher";
import MainService from "@/components/main/MainService";
import Reviews from "@/components/main/Reviews";
import { Separator } from "@/components/ui/separator";
import PageData from "@/data/service/pma-penanaman.json";

export default async function ServiceDetailsPage() {
  const basicInfo = PageData.serviceBasicInfo;
  const introduction = PageData.introduction;
  const process = PageData.process;
  const requiredDocuments = PageData.requiredDocuments;
  const choosingBusinessField = PageData.choosingBusinessField;
  const faqs = PageData.faqs;
  const pricing = PageData.pricing;
  const quiz = PageData.quiz;
  const voucherDetails = PageData.voucherDetails;

  return (
    <section className="relative">
      <div className="hero-banner">
        <div className="container py-10 md:py-20">
          <div className="max-w-3xl">
            <BreadCrumb pageName="Penanaman Modal Asing" />
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
                process={process}
                requiredDocuments={requiredDocuments}
                choosingBusinessField={choosingBusinessField}
                faqs={faqs}
                pricing={pricing}
                quiz={quiz}
              />
              <LegalBasis />
              <Process process={process} />
              <Condition
                requireDocuments={requiredDocuments}
                choosingBusinessField={choosingBusinessField}
              />
              <Pricing pricing={pricing} />
              <VirtualOfficeGallery />
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
