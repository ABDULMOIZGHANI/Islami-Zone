import BankList from "../components/BankList";
import FeeStructure from "../components/FeeStructure";

const Fee = () => {
  return (
    <div className="space-y-12">
      {/* Course 1 - Basic Quran Course */}
      <FeeStructure
        title="All Courses"
        plans={{
          A: {
            name: "Plan A",
            days: "2 days per week",
            duration: "30 min",
            perWeek: 2,
            perMonth: 8,
            fee: { USD: "$40", CAD: "CAD 57", GBP: "£32", EUR: "€38" },
          },
          B: {
            name: "Plan B",
            days: "3 days per week",
            duration: "30 min",
            perWeek: 3,
            perMonth: 12,
            fee: { USD: "$55", CAD: "CAD 78", GBP: "£43", EUR: "€52" },
          },
          C: {
            name: "Plan C",
            days: "4 days per week",
            duration: "30 min",
            perWeek: 4,
            perMonth: 16,
            fee: { USD: "$66", CAD: "CAD 94", GBP: "£53", EUR: "€63" },
          },
          D: {
            name: "Plan D",
            days: "5 days per week",
            duration: "30 min",
            perWeek: 5,
            perMonth: 20,
            fee: { USD: "$82", CAD: "CAD 116", GBP: "£66", EUR: "€78" },
          },
          E: {
            name: "Plan E",
            days: "6 days per week",
            duration: "30 min",
            perWeek: 6,
            perMonth: 24,
            fee: { USD: "$98", CAD: "CAD 139", GBP: "£78", EUR: "€93" },
          },
          F: {
            name: "Plan F",
            days: "Weekend",
            duration: "30 min",
            perWeek: "Weekend",
            perMonth: 8,
            fee: { USD: "$50", CAD: "CAD 71", GBP: "£40", EUR: "€48" },
          },
        }}
      />

      {/* Course 2 - Quran Memorization & Tafseer */}
      <FeeStructure
        title="Quran Memorization & Tafseer"
        plans={{
          A: {
            name: "Plan A",
            days: "2 days per week",
            duration: "1 hour",
            perWeek: 2,
            perMonth: 8,
            fee: { USD: "$75", CAD: "CAD 94", GBP: "£55", EUR: "€66" },
          },
          B: {
            name: "Plan B",
            days: "3 days per week",
            duration: "1 hour",
            perWeek: 3,
            perMonth: 12,
            fee: { USD: "$110", CAD: "CAD 137", GBP: "£80", EUR: "€97" },
          },
          C: {
            name: "Plan C",
            days: "4 days per week",
            duration: "1 hour",
            perWeek: 4,
            perMonth: 16,
            fee: { USD: "$151", CAD: "CAD 187", GBP: "£110", EUR: "€132" },
          },
          D: {
            name: "Plan D",
            days: "5 days per week",
            duration: "1 hour",
            perWeek: 5,
            perMonth: 20,
            fee: { USD: "$189", CAD: "CAD 234", GBP: "£138", EUR: "€165" },
          },
          E: {
            name: "Plan E",
            days: "6 days per week",
            duration: "1 hour",
            perWeek: 6,
            perMonth: 24,
            fee: { USD: "$228", CAD: "CAD 281", GBP: "£165", EUR: "€198" },
          },
          F: {
            name: "Plan F",
            days: "Weekend",
            duration: "1 hour",
            perWeek: "Weekend",
            perMonth: 8,
            fee: { USD: "$93", CAD: "CAD 116", GBP: "£68", EUR: "€83" },
          },
        }}
      />

      <BankList />
    </div>
  );
};

export default Fee;
