import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import GroupIcon from "@mui/icons-material/Group";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

const NavTab = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate("/home");
        break;
      case 1:
        navigate("/doctors");
        break;
      case 2:
        navigate("/about");
        break;
      case 3:
        navigate("/contact");
        break;
      default:
        break;
    }
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
      <Tooltip title="Home">
        <Tab icon={<HomeIcon />} aria-label="Home" />
      </Tooltip>

      <Tooltip title="Doctors">
        <Tab icon={<GroupIcon />} aria-label="Doctors" />
      </Tooltip>
      <Tooltip title="About">
        <Tab icon={<InfoIcon />} aria-label="About" />
      </Tooltip>
      <Tooltip title="Apply Membership">
        <Tab icon={<ContactMailIcon />} aria-label="Contact" />
      </Tooltip>
    </Tabs>
  );
};

export default NavTab;
