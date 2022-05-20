import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BasicTabs from "../TabsCoustum/TabsCustoum";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{bgcolor:"black"}} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
          UNIGUIDE
          </Typography>
          <Button color="inherit"> <BasicTabs/> </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
