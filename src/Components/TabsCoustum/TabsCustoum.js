import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs value={value} onChange={handleChange}>
        <Link to={"/"} style={{textDecoration:"none"}}>
          <Tab sx={{ color: "white" }} label="Home" />
          </Link>
          <Link to={"/search"} style={{textDecoration:"none"}}>
          <Tab sx={{ color: "white" }} label="Search" />
          </Link>
        </Tabs>
      </Box>
    </Box>
  );
}
export default BasicTabs;
