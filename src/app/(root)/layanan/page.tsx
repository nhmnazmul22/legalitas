import TypeWriterText from "@/components/common/TypeWritedText";
import LayananFilter from "@/components/main/layanan/LayananFilter";
import Service from "@/components/main/layanan/Service";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function ServicePage() {
  return (
    <section className="py-10 hero-banner">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbList className="font-semibold">
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="theme-gradient hover:theme-gradient"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-primary" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-primary">layanan</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="my-10">
          <h2 className="text-xl md:text-4xl font-semibold">Semua Layanan</h2>
          <p className="text-sm font-medium mt-2">
            Memberikan Layanan Legalitas <TypeWriterText />
          </p>
        </div>
        <div className="flex max-lg:flex-col gap-10">
          <LayananFilter />
          <Service />
        </div>
      </div>
    </section>
  );
}
