export function RatingSection() {
  return (
    <section className="m-8 pb-10 lg:pb-0 lg:m-8 ml-0 border-b border-b-gray-300 lg:border-none">
      <h2 className="mb-2">Your Rating</h2>
      <p className="text-xs text-gray-500">
        Lorem ipsum dolor sit amet, consectetur
      </p>

      <div className="relative text-white mt-8 max-w-100 min-h-70">
        <div className="absolute left-14 w-30 h-30 bg-[#6463D680] rounded-full flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl">85%</p>
            <p>Hygiene</p>
          </div>
        </div>
        <div className="absolute right-10  top-8 w-55 h-55 bg-[#F99C3080] rounded-full flex items-center justify-center">
          <div className="text-center">
            <p className="text-4xl">85%</p>
            <p>Food Taste</p>
          </div>
        </div>

        <div className="absolute top-36 w-36 h-36 bg-[#2FBFDE90] rounded-full flex items-center justify-center">
          <div className="text-center">
            <p className="text-4xl">92%</p>
            <p>Packaging</p>
          </div>
        </div>
      </div>
    </section>
  );
}
