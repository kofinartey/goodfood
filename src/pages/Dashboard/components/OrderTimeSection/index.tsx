import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Button } from "../../../../shared/components/Button";

export function OrderTimeSection() {
  const data = [
    {
      name: "Morning",
      value: 400,
    },
    {
      name: "Afternoon",
      value: 300,
    },
    {
      name: "Evening",
      value: 300,
    },
  ];

  return (
    <div className=" pl-8 pb-8 border-[#C8CBD9]  border-b-1 lg:h-90 ">
      <div className="lg:flex justify-between">
        <div>
          <p>OrderTime</p>
          <p className="text-gray-500">From 1-6 Dec, 2020</p>
        </div>
        <Button>View Report</Button>
      </div>
      <div className="">
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
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex w-full justify-between  text-sm">
        {data.map((d) => (
          <div key={d.name} className="flex items-start">
            <div className="w-3 h-3 mr-2 mt-1 bg-red-200 rounded-full"></div>
            <div>
              <p>{d.name}</p>
              <p>{d.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
