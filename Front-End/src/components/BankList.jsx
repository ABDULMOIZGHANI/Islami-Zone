const banks = [
  {
    logo: "/sectionImages/UBL.jpeg",
    title: "RIZWAN FAREED",
    accountNo: "0150233883371",
    iban: "PK72UNIL0109000233883371",
    branch: "AMEEN CHANDNI CHOWK KARACHI",
    branchNo: "0150",
    swiftCode: "UNILPKKA",
  },
  {
    logo: "/sectionImages/MCB.jpeg",
    title: "ISLAMI ZONE",
    accountNo: "1445134071004339",
    iban: " PK90MUCB1445134071004339",
    branch: " KARACHI JAMSHED ROAD KARACHI SINDH PAKISTAN",
    branchNo: "1247",
    swiftCode: "MUCBPKKA",
  },
  {
    logo: "/sectionImages/DUBAI_ISLAMIC.jpeg",
    title: "RIZWAN FAREED",
    accountNo: "0505664001",
    iban: " PK91DUIB0000000505664001",
    branch: " ISLAMIA COLLEGE ROAD BRANCH KARACHI",
    branchNo: "101",
    swiftCode: "DUIB PKKA",
  },
];

const BankCard = ({ bank }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border mb-4 w-[320px] m-auto">
      <div className="flex justify-center mb-3">
        <img
          src={bank.logo}
          alt="Bank Logo"
          className="h-20 w-20 object-contain"
        />
      </div>
      <div className="border-t pt-2 text-sm">
        <p className="font-bold text-gray-800 pb-1">
          TITLE: <span className="font-normal">{bank.title}</span>
        </p>
        <p className="font-bold text-gray-800 pb-1">
          ACCOUNT NO: <span className="font-normal">{bank.accountNo}</span>
        </p>
        <p className="font-bold text-gray-800 pb-1">
          IBAN NO: <span className="font-normal">{bank.iban}</span>
        </p>
        <p className="font-bold text-gray-800 pb-1">
          BRANCH: <span className="font-normal">{bank.branch}</span>
        </p>
        <p className="font-bold text-gray-800 pb-1">
          BRANCH NO: <span className="font-normal">{bank.branchNo}</span>
        </p>
        <p className="font-bold text-gray-800 pb-1">
          SWIFT CODE: <span className="font-normal">{bank.swiftCode}</span>
        </p>
      </div>
    </div>
  );
};

const BankList = () => {
  return (
    <>
      <h1 className="text-[26px] cinzel text-center font-bold">
        Our Banking Accounts
      </h1>
      <div className="flex md:flex-row flex-col flex-wrap items-center py-6 h-auto w-[90%] md:w-[85%] max-w-[1400px] m-auto">
        {banks.map((bank, index) => (
          <BankCard key={index} bank={bank} />
        ))}
      </div>
    </>
  );
};

export default BankList;
