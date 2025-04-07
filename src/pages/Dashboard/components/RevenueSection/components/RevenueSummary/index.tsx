import { ArrowUpIcon } from "../../../../../../assets/icons/svgIcons/ArrowUpIcon";
import { Button } from "../../../../../../shared/components/Button";

export function RevenueSummary() {
  return (
    <div
      data-testid="revenue-summary"
      className="flex flex-col md:flex-row md:justify-between lg:items-start "
    >
      <div className="mb-8">
        <h2 className="mb-1">Revenue</h2>
        <p className="text-2xl mb-1">IDR 7.852.000</p>
        <div className="flex items-center">
          <ArrowUpIcon className="mr-2" />
          <p className="text-xs">
            <span className="text-[#149D52]">2.1%</span>
            <span className="text-gray-500">vs last week</span>
          </p>
        </div>
      </div>

      <div>
        <Button>View Report</Button>
      </div>
    </div>
  );
}
