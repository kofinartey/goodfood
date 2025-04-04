export function RatingSection() {
  return (
    <div className="m-8 ml-0">
      <h3>Your Rating</h3>

      <p>Lorem ipsum dolor sit amet, consectetur</p>
      <div className="relative text-white mt-8">
        <div className="absolute left-14 w-30 h-30 bg-[#6463D680] rounded-full flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl">85%</p>
            <p>Hygiene</p>
          </div>
        </div>
        <div className="absolute right-6 top-8 w-55 h-55 bg-[#F99C3080] rounded-full flex items-center justify-center">
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
    </div>
  );
}
