import { Box, SimpleGrid } from "@chakra-ui/react";
import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable";
import DepositTable from "views/admin/dataTables/components/DepositTable";
import {
  // columnsDataDevelopment,
  columnsDataDeposit,
} from "views/admin/dataTables/variables/columnsData";
// import tableDataDevelopment from "views/admin/dataTables/variables/tableDataDevelopment.json";
import tableDataDeposit from "views/admin/dataTables/variables/tableDataDeposit.json";
import React from "react";
import AdminLayout from "layouts/admin";
import { TableData } from "views/admin/default/variables/columnsData";

export default function DataTables() {
  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid
          mb="20px"
          columns={{ sm: 1, md: 1 }}
          spacing={{ base: "20px", xl: "20px" }}
        >
          {/* <DevelopmentTable
            columnsData={columnsDataDevelopment}
            tableData={tableDataDevelopment as unknown as TableData[]}
          /> */}
          <DepositTable
            columnsData={columnsDataDeposit}
            tableData={tableDataDeposit as unknown as TableData[]}
          />
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
}
