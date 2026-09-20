import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <div>
      <TableOperations>
        <Filter
          filterField="discount"
          options={[
            { value: "all", label: "All" },
            { value: "no-discount", label: "No discount" },
            { value: "with-discount", label: "With discount" },
          ]}
        ></Filter>
        <SortBy
          filterFiled="sort"
          options={[
            { value: "name-asc", label: "Sort by name (A-Z)" },
            { value: "name-desc", label: "Sort by name (Z-A)" },
            { value: "regularPrice-asc", label: "Sort by Price (Low - High)" },
            { value: "regularPrice-desc", label: "Sort by Price (High - Low)" },
            {
              value: "maxCapacity-asc",
              label: "Sort by Capacity (Low - High)",
            },
            {
              value: "maxCapacity-desc",
              label: "Sort by Capacity (High - Low)",
            },
          ]}
        ></SortBy>
      </TableOperations>
    </div>
  );
}

export default CabinTableOperations;
