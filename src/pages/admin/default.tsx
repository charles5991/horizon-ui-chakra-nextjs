import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
// Custom components
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import DepositTable from "views/admin/default/components/DepositTable";
import TradingHistory from "views/admin/dataTables/components/TradingHistory";
import {
  columnsDataDeposit,
  TableData,
} from "views/admin/default/variables/columnsData";
import tableDataDeposit from "views/admin/default/variables/tableDataDeposit.json";
import AdminLayout from "layouts/admin";
import { Image } from "components/image/Image";
import Usa from "img/dashboards/usa.png";

export default function UserReports() {
  // Chakra Color Mode

  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
            gap="20px"
            mb="20px"
          >
            <MiniStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdBarChart}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Profit"
              value="$5000.4"
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdAttachMoney}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Spend this month"
              value="$642.39"
            />
            <MiniStatistics growth="+23%" name="Sales" value="$574.34" />
            <MiniStatistics
              endContent={
                <Flex me="-16px" mt="10px">
                  <FormLabel htmlFor="balance">
                    <Box boxSize={"12"}>
                      <Image src={Usa} alt="" w={"100%"} h={"100%"} />
                    </Box>
                  </FormLabel>
                  <Select
                    id="balance"
                    variant="mini"
                    mt="5px"
                    me="0px"
                    defaultValue="usd"
                  >
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="gba">GBA</option>
                  </Select>
                </Flex>
              }
              name="Your balance"
              value="$1,000"
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg="linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)"
                  icon={<Icon w="28px" h="28px" as={MdAddTask} color="white" />}
                />
              }
              name="New Tasks"
              value="154"
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdFileCopy}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Total Projects"
              value="2935"
            />
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
            <DepositTable
              columnsData={columnsDataDeposit}
              tableData={tableDataDeposit as unknown as TableData[]}
            />
          </SimpleGrid>
        </>
      </Box>
    </AdminLayout>
  );
}
