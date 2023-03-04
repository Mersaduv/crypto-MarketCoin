import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" className="bg-blue-500 ">
        <Toolbar>
          <Typography
            variant="h6"
            className="text-white w-full flex justify-between"
          >
            <Link href="/">CoinMarketCap</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
