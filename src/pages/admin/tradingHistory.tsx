import { Box, SimpleGrid } from "@chakra-ui/react";
import TradingHistory from "views/admin/dataTables/components/TradingHistory";
import { columnsDataTradingHistory } from "views/admin/dataTables/variables/columnsData";
import tradingHistory from "views/admin/dataTables/variables/tradingHistory.json";
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
          <TradingHistory
            columnsData={columnsDataTradingHistory}
            tableData={tradingHistory as unknown as TableData[]}
          />
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
}
