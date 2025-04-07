import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Button } from "../../../../shared/components/Button";
import { CustomTooltip } from "./components/CustomTooltip";

export function OrderTimeSection() {
  const data = [
    {
      name: "Afternoon",
      value: 40,
      start: "1pm",
      end: "4pm",
      color: "#5A6ACF",
    },
    {
      name: "Evening",
      value: 32,
      start: "4pm",
      end: "12am",
      color: "#8593ED",
    },
    {
      name: "Morning",
      value: 28,
      start: "12am",
      end: "12pm",
      color: "#C7CEFF",
    },
  ];

  return (
    <div className="py-8 lg:pl-8 lg:pt-0 border-[#C8CBD9]  border-b-1 lg:h-90 ">
      <div className="md:flex justify-between">
        <div>
          <h2>OrderTime</h2>
          <p className="text-xs text-gray-500 mb-8 ">From 1-6 Dec, 2020</p>
        </div>
        <Button>View Report</Button>
      </div>

      <div className="flex flex-col items-center">
        <ResponsiveContainer width={"100%"} height={200}>
          <PieChart width={140} height={140}>
            <Pie
              dataKey="value"
              data={data}
              outerRadius={80}
              innerRadius={60}
              fill="#8884d8"
              //   label
            />
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        <div className="flex gap-4 justify-between  text-xs">
          {data.map((d) => (
            <div key={d.name} className="flex items-start">
              <div className="w-2 h-2 mr-2 mt-1 bg-[#8593ED] rounded-full"></div>
              <div>
                <p>{d.name}</p>
                <p className="text-gray-500">{d.value}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
