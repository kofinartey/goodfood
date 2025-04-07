import { RevenueSummary } from "./components/RevenueSummary";
import { RevenueChart } from "./components/RevenueChart";

export function RevenueSection() {
  return (
    <section className=" lg:pr-8 pb-8 border-[#C8CBD9] lg:border-r-1 border-b-1 lg:h-90">
      <RevenueSummary />
      <RevenueChart />
    </section>
  );
}
