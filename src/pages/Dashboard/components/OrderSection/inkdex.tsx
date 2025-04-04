import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import { useOrderSection } from "./hooks/useOrderSection";

export function OrderSection() {
  const {
    data: { ordersData },
  } = useOrderSection();

  return (
    <div className="m-8 mb-0">
      <div className="md:flex justify-between">
        <div>
          <p className="mb-2">Order</p>
          <p className="text-2xl mb-2">2.568</p>
          <p>
            <span className="text-[#F2383A]">2.1%</span> vs last week
          </p>
        </div>
        {/* TODO: Button component */}
        <div>
          <button className=" bg-[#FBFCFE] px-4 py-2 mb-10 border-1 rounded-lg border-[#DDE4F0] text-[#5A6ACF] shadow-md l">
            View Report
          </button>
        </div>
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
