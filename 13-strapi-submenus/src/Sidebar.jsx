import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSibebar } = useGlobalContext();
  return <div>Sidebar</div>;
};
export default Sidebar;
