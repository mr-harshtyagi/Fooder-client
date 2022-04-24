import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AppbarContext from "../appbarcontext";

export default function SimpleBottomNavigation() {
  let navigate = useNavigate();
  const { value, updateValue } = useContext(AppbarContext);
  return (
    <Box style={{ marginTop: "80px" }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            updateValue(newValue);
            if (newValue === 0) navigate("/");
            if (newValue === 1) navigate("/cart");
            if (newValue === 2) navigate("/account");
          }}
        >
          <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Cart" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Account" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
