export function useOrderSection() {
  const ordersData = [
    { name: "01", last6: 24, lastWeek: 12 },
    { name: "02", last6: 12, lastWeek: 21 },
    { name: "03", last6: 33, lastWeek: 13 },
    { name: "04", last6: 21, lastWeek: 19 },
    { name: "05", last6: 6, lastWeek: 24 },
    { name: "06", last6: 6, lastWeek: 24 },
  ];
  return {
    data: { ordersData },
  };
}
