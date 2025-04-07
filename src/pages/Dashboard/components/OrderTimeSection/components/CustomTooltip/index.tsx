// tootltip is passed the props by default
// @ts-ignore
export function CustomTooltip(props) {
  const { payload } = props;
  const endTime = payload[0]?.payload?.payload?.end;
  const startTime = payload[0]?.payload?.payload?.start;
  return (
    <div className="p-4 rounded-lg bg-[#37375C] text-xs text-white">
      <p>{payload[0]?.name}</p>
      <p className="text-gray-400 mb-2">
        {startTime} - {endTime}
      </p>
      <p className="text-base">{payload[0]?.value} orders</p>
    </div>
  );
}
