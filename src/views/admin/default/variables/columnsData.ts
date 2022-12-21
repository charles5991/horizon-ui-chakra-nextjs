import { Column } from "react-table";

export const columnsDataCheck = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
  {
    Header: "QUANTITY",
    accessor: "quantity",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
];
export const columnsDataDeposit = [
  {
    Header: "TICKETID",
    accessor: "ticketId",
  },
  {
    Header: "TYPE",
    accessor: "type",
  },
  {
    Header: "STATUS",
    accessor: "status",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
];

export type ColumnData = Column[];

export type TableData = Column<{
  name: (string | boolean)[];
  date: string;
  progress: number;
  quantity?: number;
  status?: string;
  artworks?: string;
  rating?: number;
}>;

export type TableProps = {
  columnsData: ColumnData;
  tableData: TableData[];
};
