interface IColumnHeader {
  Header: string;
  accessor: string;
}

type Columns = IColumnHeader[];

export const columnsDataDevelopment: Columns = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "TECH",
    accessor: "tech",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
];

export const columnsDataCheck: Columns = [
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

export const columnsDataColumns: Columns = [
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

export const columnsDataDeposit: Columns = [
  {
    Header: "TICKETID",
    accessor: "ticketId",
  },
  {
    Header: "DATE CREATED",
    accessor: "date",
  },
  {
    Header: "PAYMENT",
    accessor: "payment",
  },
  {
    Header: "CURRENCY",
    accessor: "currency",
  },
  {
    Header: "TYPE",
    accessor: "type",
  },
  {
    Header: "STATUS",
    accessor: "status",
  },
];

export const columnsDataTradingHistory: Columns = [
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
