import { useMostOrderedSection } from "./hooks/useMostOrderedSection";

export function MostOrderedSection() {
  const {
    data: { orders },
  } = useMostOrderedSection();

  return (
    <div className="lg:border-x-1 border-[#C8CBD9] p-8">
      <h2 className="mb-2">Most Ordered Food</h2>
      <p className="text-xs text-gray-500">
        Adipiscing elit, sed do eiusmod tempor
      </p>

      <div className="mt-16 text-xs">
        {orders.map((order, index) => (
          <>
            <div key={order.id} className="flex justify-between m-4 ">
              <div className="flex items-center">
                <img src={order.imgSrc} className="mr-8" alt="" />
                <p>{order.name}</p>
              </div>
              <p className="text-gray-500">{`IDR ${order.price.toFixed(3)}`}</p>
            </div>
            {index + 1 < orders.length ? (
              <div className="bg-[#DBE5EB] w-full h-[1px]" />
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
}
