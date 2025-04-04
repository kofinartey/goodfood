import { RevenueSummary } from "./components/ChartSummary";
import { RevenueChart } from "./components/RevenueChart";

export function RevenueSection() {
  return (
    <div className="pr-8 pb-8 border-[#C8CBD9] lg:border-r-1 lg:border-b-1 lg:h-90">
      <RevenueSummary />
      <RevenueChart />
    </div>
  );
}
