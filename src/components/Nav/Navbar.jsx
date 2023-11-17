import React from "react";
import {
  Collapse,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Tooltip from "@mui/material/Tooltip";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavTab from "../Tabs/NavTab";

const MobileNavLink = () => {
  return <h1>hello</h1>;
};

const ProfileNavigation = () => {
  return (
    <>
      <Tooltip title="Profile">
        <IconButton variant="text">
          <AccountCircleIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};

function NotificationDialog() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Tooltip title="Notification">
        <IconButton onClick={handleOpen} variant="text">
          <CircleNotificationsIcon />
        </IconButton>
      </Tooltip>

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            Your Attention is Required!
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid gap-4 place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-16 h-16 text-red-500"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clipRule="evenodd"
            />
          </svg>
          <Typography color="red" variant="h4">
            You should read this!
          </Typography>
          <Typography className="font-normal text-center">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            close
          </Button>
          <Button variant="gradient" onClick={handleOpen}>
            Ok, Got it
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

function NavList() {
  return (
    <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
      {/* Notification */}
      <NotificationDialog />
      {/* Profile */}
      <ProfileNavigation />
    </ul>
  );
}

export default function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-10 w-full p-2 pb-4 mx-auto bg-PrimaryBg">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
          color="black"
        >
          PetVews
        </Typography>

        <div className="hidden lg:block">
          <NavTab />
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="w-6 h-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="w-6 h-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <MobileNavLink />
        {/* <NotificationDialog /> */}
      </Collapse>
    </nav>
  );
}
