import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useMemo } from "react";
import sourceData from "./source-data.json";
import type { SourceDataType, TableDataType } from "./types";

/**
 * Example of how a tableData object should be structured.
 *
 * Each `row` object has the following properties:
 * @prop {string} area - The area or department related to the data.
 * @prop {string} category - The category of the cost or expense.
 * @prop {string} costType - The type of cost or expense.
 * @prop {string} total - The total sum for the respective category and cost type.
 * @prop {string} january - The value recorded for January.
 * @prop {string} february - The value recorded for February.
 */
let tableData: TableDataType[] = (
  sourceData as unknown as SourceDataType[]
).map((dataRow, index) => {
  const area = dataRow.groups?.name ?? "";

  const row: TableDataType = {
    area: `${area}`,
    category: `${dataRow.categories?.name ?? "category placeholder"}`,
    costType: `${dataRow.costTypes?.name ?? "costtype placeholder"}`,
    total: `${dataRow.invoiceinbox?.name ?? "total placeholder"}`,
    january: `${dataRow.invoiceinbox?.date ?? "january placeholder"}`,
    february: `${dataRow.invoiceinbox?.date ?? "february placeholder"}`,
  };

  return row;
});
let group = [];
let category = [];
let costType = [];
let invoiceInbox = [];
group = sourceData.filter((item) => item.groups).map((item) => item.groups);
category = sourceData
  .filter((item) => item.categories)
  .map((item) => item.categories);
costType = sourceData
  .filter((item) => item.costTypes)
  .map((item) => item.costTypes);
invoiceInbox = sourceData
  .filter((item) => item.invoiceinbox)
  .map((item) => item.invoiceinbox);

tableData = [];
group.forEach((element: any) => {
  let grupName = element.name;
  let grpId = element._id;
  const row: TableDataType = {
    area: `${grupName}`,
    category: `${"--"}`,
    costType: `${"--"}`,
    total: `${"__"}`,
    january: `${"__"}`,
    february: `${"__"}`,
  };
  tableData.push(row);
  const categories = category.filter(
    (item) => item?.incomingInvoiceGroups?._id == grpId
  );

  categories.forEach((res2: any) => {
    let catID = res2._id;
    let catName = res2.name;
    const row: TableDataType = {
      area: `${"--"}`,
      category: `${catName}`,
      costType: `${"--"}`,
      total: `${"__"}`,
      january: `${"__"}`,
      february: `${"__"}`,
    };
    tableData.push(row);
    const cosTypes = costType.filter(
      (item1) => item1?.incomingInvoiceCategories?._id == catID
    );
    cosTypes.forEach((res5) => {
      const row: TableDataType = {
        area: `${"--"}`,
        category: `${"--"}`,
        costType: `${res5?.name}`,
        total: `${"--"}`,
        january: `${"--"}`,
        february: `${"--"}`,
      };

      tableData.push(row);
    });
  });
});

const Example = () => {
  const columns = useMemo<MRT_ColumnDef<TableDataType>[]>(
    () => [
      {
        accessorKey: "area",
        header: "area",
      },
      {
        accessorKey: "category",
        header: "category",
      },
      {
        accessorKey: "costType",
        header: "costType",
      },
      {
        accessorKey: "total",
        header: "total",
      },
      {
        accessorKey: "january",
        header: "january",
      },
      {
        accessorKey: "february",
        header: "february",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: tableData,
  });

  return <MaterialReactTable table={table} />;
};

export default Example;
