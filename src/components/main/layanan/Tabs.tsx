"use client";

import Condition from "@/components/main/layanan/Condition";
import Faq from "@/components/main/layanan/Faq";
import Introduction from "@/components/main/layanan/Introduction";
import LegalBasis from "@/components/main/layanan/LegalBasis";
import Pricing from "@/components/main/layanan/Pricing";
import Process from "@/components/main/layanan/Process";
import Quiz from "@/components/main/layanan/Quiz";
import Review from "@/components/main/layanan/Review";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Condition3Props,
  FAQ,
  IntroductionType,
  PricingType,
  PricingType2,
  ProcessStep,
  ProcessStep2,
  QuizItem,
} from "@/types";
import Condition2 from "./Condition2";
import Condition3 from "./Condition3";

type TabsSectionProps = {
  introduction: IntroductionType;
  process?: ProcessStep[];
  process2?: ProcessStep2;
  requiredDocuments?: string[];
  requiredDocuments2?: string[][];
  condition?: Condition3Props;
  choosingBusinessField?: string[];
  faqs: FAQ[];
  pricing?: PricingType;
  pricing2?: PricingType2[];
  quiz: QuizItem[];
};

const TabsSection: React.FC<TabsSectionProps> = ({
  introduction,
  requiredDocuments,
  choosingBusinessField,
  faqs,
  pricing,
  pricing2,
  quiz,
  process,
  requiredDocuments2,
  condition,
}) => {
  return (
    <Tabs defaultValue="pengantar" className="w-full">
      <TabsList className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-3 w-full bg-slate-100 shadow p-2 h-auto">
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
        {introduction ? (
          <Introduction
            content={introduction.content}
            isBoxStyle={introduction.isBoxStyle}
          />
        ) : (
          <p className="my-5 text-center italic">No introduction Found</p>
        )}
      </TabsContent>
      <TabsContent value="dasar-hukum">
        <LegalBasis />
      </TabsContent>
      <TabsContent value="proses">
        {process ? (
          <Process process={process} />
        ) : (
          <p className="my-5 text-center italic">No Process Found</p>
        )}
      </TabsContent>
      <TabsContent value="syarat">
        {requiredDocuments?.length! > 0 &&
          choosingBusinessField?.length! > 0 && (
            <Condition
              requireDocuments={requiredDocuments!}
              choosingBusinessField={choosingBusinessField!}
            />
          )}
        {requiredDocuments2?.length! > 0 && (
          <Condition2 requiredDocuments={requiredDocuments2!} />
        )}
        {condition && (
          <Condition3 title={condition.title} content={condition.content} />
        )}
      </TabsContent>
      <TabsContent value="pricing">
        {pricing && <Pricing pricing={pricing} />}
        {pricing2 && <Pricing pricing2={pricing2} />}
      </TabsContent>
      <TabsContent value="faq">
        {faqs ? (
          <Faq faq={faqs} />
        ) : (
          <p className="my-5 text-center italic">No introduction Found</p>
        )}
      </TabsContent>
      <TabsContent value="quiz">
        {quiz ? (
          <Quiz quiz={quiz} />
        ) : (
          <p className="my-5 text-center italic">No Quiz Found</p>
        )}
      </TabsContent>
      <TabsContent value="review">
        <Review />
      </TabsContent>
    </Tabs>
  );
};

export default TabsSection;
