import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppbarContext from "../appbarcontext";
import CartContext from "../cartcontext"

export default function SimpleBottomNavigation() {
  let navigate = useNavigate();
  const { value, updateValue } = useContext(AppbarContext);
  const {items} =useContext(CartContext);
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
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />

          <BottomNavigationAction
            label="Cart"
            icon={
              <Badge badgeContent={items.length} color="success">
                <ShoppingCartIcon />
              </Badge>
            }
          />

          <BottomNavigationAction
            label="Account"
            icon={<AccountCircleIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
