import { Configuration } from "./Configuration";
import { DocNavigation } from "./DocNavigation";
import { Introduction } from "./Introduction";
import LocalActs from "./LocalActs";
import { PackageStructure } from "./PackageStructure";
import { QuickStart } from "./QuickStart";

export const Documentation = () => {
  return (
    <div className="dark:bg-darkmode">
      <div className="container p-6 lg:mt-16 mt-16 !pt-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-white mb-4">
            Документации
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
             У нас имеются все разрешительные документы
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-3 col-span-12 lg:block hidden">
            <DocNavigation />
          </div>
          <div className="lg:col-span-9 col-span-12">
            <LocalActs />
          </div>
        </div>
      </div>
    </div>
  );
};
