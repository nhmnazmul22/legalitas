import { Badge } from "@/components/ui/badge";
import { regulationRulesList } from "@/constant";

const RegulationTypes = () => {
  return (
    <div className="flex-1 max-md:-order-1">
      <h3 className="text-2xl font-semibold mb-5">Daftar Peraturan</h3>
      <div className="mt-5 flex flex-wrap gap-2 text-center justify-center md:justify-start items-center overflow-hidden">
        {regulationRulesList.map((rule) => (
          <Badge
            key={rule.id}
            className="bg-primary/10 text-primary text-xs sm:text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer truncate"
          >
            {rule.type} {`(${rule.count})`}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default RegulationTypes;
