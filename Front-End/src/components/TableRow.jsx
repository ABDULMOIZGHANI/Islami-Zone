const TableRow = ({ label, value }) => {
  return (
    <tr className="border-b border-gray-300">
      <td className="p-3 font-semibold">{label}</td>
      {typeof value === "object" ? (
        // Render fees separately in each currency column
        <>
          <td className="p-3 text-center">{value.USD || "-"}</td>
          <td className="p-3 text-center">{value.CAD || "-"}</td>
          <td className="p-3 text-center">{value.GBP || "-"}</td>
          <td className="p-3 text-center">{value.EUR || "-"}</td>
        </>
      ) : (
        // Render normal values repeatedly in each currency column
        <>
          <td className="p-3 text-center">{value}</td>
          <td className="p-3 text-center">{value}</td>
          <td className="p-3 text-center">{value}</td>
          <td className="p-3 text-center">{value}</td>
        </>
      )}
    </tr>
  );
};

export default TableRow;
