import Image from "next/image";
import Heading from "./Heading";

const BankPartner = () => {
  return (
    <div className="mt-5">
      <Heading text="Bank Partner" />
      <div className="grid grid-cols-2 md:grid-cols-6 gap-5 md:gap-10 items-center">
        <Image
          src="/images/bank-logo-01.png"
          alt="Bank Logo"
          width={300}
          height={300}
        />
        <Image
          src="/images/bank-logo-02.png"
          alt="Bank Logo"
          width={300}
          height={300}
        />
        <Image
          src="/images/bank-logo-03.png"
          alt="Bank Logo"
          width={300}
          height={300}
        />
        <Image
          src="/images/bank-logo-04.png"
          alt="Bank Logo"
          width={300}
          height={300}
        />
        <Image
          src="/images/bank-logo-05.png"
          alt="Bank Logo"
          width={300}
          height={300}
        />
        <Image
          src="/images/bank-logo-06.png"
          alt="Bank Logo"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default BankPartner;
