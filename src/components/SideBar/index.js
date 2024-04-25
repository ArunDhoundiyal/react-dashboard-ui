import { AiFillEuroCircle } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { FiMonitor } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { BiBuildings } from "react-icons/bi";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { BsHeadphones } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import "./index.css";
const SideBar = (props) => {
  const { condition } = props;
  console.log(condition);
  const display = condition ? "hideSideBar" : " ";
  return (
    <div className={`sideBarContainer ${display}`}>
      <div className="logo-container">
        <AiFillEuroCircle className="top-logo" />
        <IoMdSearch className="logo" />
        <FiMonitor className="logo" />
        <FaRegQuestionCircle className="logo" />
        <IoMdCalendar className="logo" />
        <BiBuildings className="logo" />
        <HiMiniCurrencyDollar className="logo" />
        <BsHeadphones className="logo" />
      </div>
      <div className="setting-container">
        <IoSettingsSharp className="setting-logo" />
      </div>
    </div>
  );
};

export default SideBar;
