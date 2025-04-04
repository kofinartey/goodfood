import { Button } from "../../../../../../shared/components/Button";

export function RevenueSummary() {
  return (
    <div className="flex flex-col  md:flex-row md:justify-between lg:items-start ">
      <div className="mb-8">
        <h3 className="mb-1">Revenue</h3>
        <p className="text-2xl mb-1">IDR 7.852.000</p>
        <p>
          <span className="text-[#149D52]">2.1%</span> vs last week
        </p>
      </div>

      <div>
        <Button>View Report</Button>
      </div>
    </div>
  );
}
