import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import { useOrderSection } from "./hooks/useOrderSection";
import { Button } from "../../../../shared/components/Button";
import { ArrowDownIcon } from "../../../../assets/icons/svgIcons/ArrowDownIcon";

export function OrderSection() {
  const {
    data: { ordersData },
  } = useOrderSection();

  return (
    <div className="m-8 mb-0">
      <div className="md:flex justify-between items-start">
        <div>
          <h2 className="mb-2">Order</h2>
          <p className="text-2xl mb-2">2.568</p>
          <div className="text-gray-500 text-xs flex items-center gap-2">
            <ArrowDownIcon />
            <span className="text-[#F2383A]">2.1%</span>svs last week
          </div>
        </div>

        <Button>View Report</Button>
      </div>

      <p className="text-gray-500 my-8">Sales from 1-6 Dec, 202</p>
      <div>
        <ResponsiveContainer height={200}>
          <LineChart data={ordersData} width={48} height={40}>
            <CartesianGrid strokeDasharray="2 3" />
            <XAxis dataKey={"name"} />
            <Line dataKey={"last6"} stroke="#5A6ACF" />
            <Line dataKey={"lastWeek"} stroke="#E6E8EC" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
