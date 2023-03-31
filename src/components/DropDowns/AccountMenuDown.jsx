import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import { AuthState } from "@/src/context/AuthProvider";
import { Typography } from "@mui/material";
const AccountMenuDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const authUser = React.useContext(AuthState);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const name = authUser.state.data.name;
  const capitalized = name.charAt(0).toUpperCase();
  console.log(capitalized);
  return (
    <div className="flex  items-center justify-center">
      {/* menu dropdown first mobile */}
      <div className="w-full mx-4 md2:hidden">
        <div
          className={`${
            isOpen && "text-blue-600"
          } font-bold py-4 text-xl flex justify-between items-center`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {" "}
          <h1>مدیریت حساب</h1>{" "}
          {/* {!isOpen ? <BiChevronDown size={38} /> : <BiChevronUp size={38} />}{" "} */}
          {isOpen ? (
            <BiChevronDown className="transition-all rotate-180" size={38} />
          ) : (
            <BiChevronDown className="transition-all" size={38} />
          )}
        </div>
        <hr />
        {isOpen && (
          <Box display="flex" flexDirection={"column"} gap={2}>
            <Box
              sx={{
                cursor: "pointer",
                ":hover": { backgroundColor: "#f9fafb" },
              }}
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              gap={1}
              paddingY={1}
              onClick={handleClose}
            >
              <Avatar />
              <Typography fontWeight={600}>حساب کابری</Typography>
            </Box>
            {/* <Divider /> */}
            <Box
              sx={{
                cursor: "pointer",
                ":hover": { backgroundColor: "#f9fafb" },
              }}
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              gap={1}
              paddingY={1}
              onClick={handleClose}
              paddingRight={1}
            >
              <PersonAdd fontSize="medium" />

              <Typography fontWeight={600}> ایجاد حساب دیگر</Typography>
            </Box>
          </Box>
        )}
      </div>
    </div>
  );
};

export default AccountMenuDown;
