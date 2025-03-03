import React, { useState } from "react";
import TableRow from "./TableRow";

const FeeStructure = ({ title, plans }) => {
  const [selectedPlan, setSelectedPlan] = useState("A");

  return (
    <div className="flex flex-col items-center p-2">
      {/* Course Title */}
      <h2 className="text-xl font-bold text-[26px] mb-4 cinzel">{title}</h2>

      {/* Plan Selection Buttons */}
      <div className="flex space-x-0 md:space-x-4 mb-6 flex-col md:flex-row w-[100%] justify-center">
        {Object.keys(plans).map((planKey) => (
          <button
            key={planKey}
            className={`px-6 py-3 rounded-md shadow mb-[10px] md:mb-0  ${
              selectedPlan === planKey
                ? "bg-yellow-500 text-black"
                : "bg-[#246545] text-white"
            }`}
            onClick={() => setSelectedPlan(planKey)}
          >
            {plans[planKey].name} <br />
            <span className="text-sm">({plans[planKey].days})</span>
          </button>
        ))}
      </div>

      {/* Pricing Table */}
      <div className="w-full max-w-3xl">
        <table className="w-full border border-gray-300 rounded-md shadow-md">
          <thead>
            <tr className="bg-[#246545] text-[#fff]">
              <th className="p-3 text-left">Feature</th>
              <th className="p-3">USD</th>
              <th className="p-3">CAD</th>
              <th className="p-3">GBP</th>
              <th className="p-3">EUR</th>
            </tr>
          </thead>
          <tbody>
            <TableRow label="Duration" value={plans[selectedPlan].duration} />
            <TableRow
              label="Sessions Per Week"
              value={plans[selectedPlan].perWeek}
            />
            <TableRow
              label="Sessions Per Month"
              value={plans[selectedPlan].perMonth}
            />
            <TableRow label="Fee per Month" value={plans[selectedPlan].fee} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeeStructure;
