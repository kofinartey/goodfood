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
  const labels: Record<string, { label: string; color: string }> = {
    last6: { label: "Last 6 days", color: "bg-[#5A6ACF]" },
    lastWeek: { label: "Last Week", color: "bg-[#D8D9DB]" },
  };
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
    <div data-testid="revenue-chart">
      <ResponsiveContainer width={"100%"} height={200}>
        <BarChart data={chartData} width={48} height={48}>
          <CartesianGrid strokeDasharray="2 3" />
          {/* <Legend  verticalAlign="bottom" align="left" height={36} iconType="circle" iconSize={10} /> */}
          <Legend
            content={({ payload }) => (
              <div className="flex text-xs text-gray-700">
                {payload?.map((p) => (
                  <div className="flex items-center mr-4">
                    <div className={`${labels[p.value].color} w-2 h-2 rounded-full mr-2`}/>
                    <div>{labels[`${p.value}`].label}</div>
                  </div>
                ))}
              </div>
            )}
          />
          <XAxis dataKey="name"  />
          <Bar barSize={10} dataKey="last6" fill="#5A6ACF" />
          <Bar barSize={10} dataKey="lastWeek" fill="#E6E8EC" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
