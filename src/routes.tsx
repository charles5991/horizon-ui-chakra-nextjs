import { Icon } from "@chakra-ui/react";
import {
  MdAttachMoney,
  MdPerson,
  MdHome,
  MdAutoGraph,
  MdSupportAgent,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "pages/admin/default";
import NFTMarketplace from "pages/admin/nft-marketplace";
import Profile from "pages/admin/profile";
import DataTables from "pages/admin/data-tables";

// Auth Imports
import { IRoute } from "types/navigation";

const routes: IRoute[] = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Trader Evolution ",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: <Icon as={MdAutoGraph} width="20px" height="20px" color="inherit" />,
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Withdraw and Deposit",
    layout: "/admin",
    icon: (
      <Icon as={MdAttachMoney} width="20px" height="20px" color="inherit" />
    ),
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Trading History",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
  {
    name: "Support Ticket",
    layout: "/admin",
    path: "/default",
    icon: (
      <Icon as={MdSupportAgent} width="20px" height="20px" color="inherit" />
    ),
    component: MainDashboard,
  },
];

export default routes;
