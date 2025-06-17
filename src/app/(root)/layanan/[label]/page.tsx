import BottomServiceSection from "@/components/main/BottomServiceSection";
import BankPartner from "@/components/main/layanan/BankPartner";
import BreadCrumb from "@/components/main/layanan/BreadCrumb";
import Condition from "@/components/main/layanan/Condition";
import Condition2 from "@/components/main/layanan/Condition2";
import Condition3 from "@/components/main/layanan/Condition3";
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

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ label: string }>;
}) {
  const pageLabel = (await params).label;

  let servicePageData: any = {};
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/service-pages/${pageLabel}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    servicePageData = data.data;
  } catch (error) {
    console.error("Error fetching service page data:", error);
  }

  const basicInfo = servicePageData.serviceBasicInfo || {};
  const introduction = servicePageData.introduction || {};
  const processData = servicePageData.process || [];
  const requiredDocuments = servicePageData.requiredDocuments || [];
  const choosingBusinessField = servicePageData.choosingBusinessField || [];
  const faqs = servicePageData.faqs || [];
  const pricing = servicePageData.pricing || {};
  const pricing2 = servicePageData.pricing2 || [];
  const conditions = servicePageData.conditions || {};
  const quiz = servicePageData.quiz || [];
  const voucherDetails = servicePageData.voucherDetails || {};

  if (!servicePageData || !basicInfo.serviceName) {
    return <div className="container py-20">Service not found.</div>;
  }

  return (
    <>
      <div className="hero-banner">
        <div className="container py-10 md:py-20">
          <div className="max-w-3xl">
            <BreadCrumb pageName={basicInfo.serviceName} />
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
            {basicInfo && (
              <ServiceBasicInfo
                thumbnail={basicInfo.thumbnail}
                description={basicInfo.description}
                lotsOfBonus={basicInfo.lotsOfBonus}
              />
            )}
            <div className="mt-10">
              <TabsSection
                introduction={introduction}
                process={processData}
                requiredDocuments={requiredDocuments}
                requiredDocuments2={requiredDocuments}
                choosingBusinessField={choosingBusinessField}
                faqs={faqs}
                pricing={pricing}
                pricing2={pricing2}
                quiz={quiz}
                condition={conditions}
              />
              <LegalBasis />
              {processData && <Process process={processData} />}
              {requiredDocuments.length > 0 &&
                choosingBusinessField.length > 0 && (
                  <Condition
                    requireDocuments={requiredDocuments}
                    choosingBusinessField={choosingBusinessField}
                  />
                )}
              {requiredDocuments.length > 0 &&
                choosingBusinessField.length === 0 && (
                  <Condition2 requiredDocuments={requiredDocuments} />
                )}

              {conditions && (
                <Condition3
                  title={conditions.title}
                  content={conditions.content}
                />
              )}

              {pricing && !Array.isArray(pricing2) && (
                <Pricing pricing={pricing} />
              )}
              {pricing2 && <Pricing pricing2={pricing2} />}
              <VirtualOfficeGallery />
              {faqs && <Faq faq={faqs} />}
              {quiz && <Quiz quiz={quiz} />}
              <BankPartner />
              <Review />
            </div>
            <BottomServiceSection />
          </div>
          <Voucher voucherDetails={voucherDetails} />
        </div>
      </div>
    </>
  );
}
