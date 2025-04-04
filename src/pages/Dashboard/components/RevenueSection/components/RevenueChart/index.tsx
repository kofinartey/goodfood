import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

export function RevenueChart() {
  const chartData = [
    { name: "01", last6: 24, lastWeek: 12 },
    { name: "02", last6: 12, lastWeek: 21 },
    { name: "03", last6: 33, lastWeek: 13 },
    { name: "04", last6: 21, lastWeek: 19 },
    { name: "05", last6: 6, lastWeek: 24 },
    { name: "06", last6: 29, lastWeek: 16 },
    { name: "07", last6: 40, lastWeek: 20 },
    { name: "08", last6: 23, lastWeek: 39 },
    { name: "09", last6: 13, lastWeek: 20 },
    { name: "10", last6: 16, lastWeek: 22 },
    { name: "11", last6: 26, lastWeek: 32 },
    { name: "12", last6: 2, lastWeek: 15 },
  ];

  return (
    <div className="">
      <ResponsiveContainer width={"100%"} height={200}>
        <BarChart data={chartData} width={48} height={48}>
          <CartesianGrid strokeDasharray="2 3" />
          <Legend margin={{ top: 10 }} />
          <XAxis dataKey="name"/>
          <Bar barSize={10} dataKey="last6" fill="#5A6ACF" />
          <Bar barSize={10} dataKey="lastWeek" fill="#E6E8EC" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
