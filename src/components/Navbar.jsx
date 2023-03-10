import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Cryptocurrency from "./Cryptocurrency";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  top: "7px",
  left: "-7px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = () => {
  // const buttonText = ["رمز ارزها", "صرافی ها", "اپلیکیشن ها"];
  // const menuItems = [
  //   "برترینها",
  //   "نمودار جهانی",
  //   "لیست برترین",
  //   "قرارداد هوشمند",
  // ];
  return (
    <div className="border">
      <Box sx={{ flexGrow: 1 }}>
        <Box
          component="div"
          className="flex  items-center justify-between w-full"
        >
          <Box component="div" className="flex  gap-4 items-center">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link href="/cryptoMarket">MarketCoin</Link>
            </Typography>
          </Box>
          <Box>
            <Cryptocurrency />
          </Box>
          <Search>
            <StyledInputBase
              placeholder="جستوجو.."
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
        </Box>
      </Box>
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           
          </Typography>
          <Typography variant="subtitle1" sx={{ mr: 4 }}>
          رمزارزها
          </Typography>
          <Typography variant="subtitle1" sx={{ mr: 4 }}>
            صرافی ها
          </Typography>
          <Typography variant="subtitle1">Exchanges</Typography>
        </Toolbar>
      </AppBar> */}
    </div>
  );
};

export default Navbar;
