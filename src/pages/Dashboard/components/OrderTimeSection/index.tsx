import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

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
        <div>
          <button className=" bg-[#FBFCFE] px-4 py-2 mb-10 border-1 rounded-lg border-[#DDE4F0] text-[#5A6ACF] shadow-md l">
            View Report
          </button>
        </div>
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
