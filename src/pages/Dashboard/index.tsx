import React from "react";

import { RevenueSection } from "./components/RevenueSection";
import { OrderTimeSection } from "./components/OrderTimeSection";
import { RatingSection } from "./components/RatingSection";
import { MostOrderedSection } from "./components/MostOrderedSection";
import { OrderSection } from "./components/OrderSection/inkdex";

export function Dashboard(): React.JSX.Element {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-10">Dashboard</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2  ">
          <RevenueSection />
        </div>
        <div>
          <OrderTimeSection />
        </div>
        <div>
          <RatingSection />
        </div>
        <div>
          <MostOrderedSection />
        </div>
        <div>
          <OrderSection />
        </div>
      </div>
    </div>
  );
}
