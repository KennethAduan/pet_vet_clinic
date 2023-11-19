import React from "react";
import {
  Collapse,
  Typography,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import NavTab from "../Tabs/NavTab";
function ClockIcon() {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99998 14.9C9.69736 14.9 11.3252 14.2257 12.5255 13.0255C13.7257 11.8252 14.4 10.1974 14.4 8.49998C14.4 6.80259 13.7257 5.17472 12.5255 3.97449C11.3252 2.77426 9.69736 2.09998 7.99998 2.09998C6.30259 2.09998 4.67472 2.77426 3.47449 3.97449C2.27426 5.17472 1.59998 6.80259 1.59998 8.49998C1.59998 10.1974 2.27426 11.8252 3.47449 13.0255C4.67472 14.2257 6.30259 14.9 7.99998 14.9ZM8.79998 5.29998C8.79998 5.0878 8.71569 4.88432 8.56566 4.73429C8.41563 4.58426 8.21215 4.49998 7.99998 4.49998C7.7878 4.49998 7.58432 4.58426 7.43429 4.73429C7.28426 4.88432 7.19998 5.0878 7.19998 5.29998V8.49998C7.20002 8.71213 7.28434 8.91558 7.43438 9.06558L9.69678 11.3288C9.7711 11.4031 9.85934 11.4621 9.95646 11.5023C10.0536 11.5425 10.1577 11.5632 10.2628 11.5632C10.3679 11.5632 10.472 11.5425 10.5691 11.5023C10.6662 11.4621 10.7544 11.4031 10.8288 11.3288C10.9031 11.2544 10.9621 11.1662 11.0023 11.0691C11.0425 10.972 11.0632 10.8679 11.0632 10.7628C11.0632 10.6577 11.0425 10.5536 11.0023 10.4565C10.9621 10.3593 10.9031 10.2711 10.8288 10.1968L8.79998 8.16878V5.29998Z"
        fill="#90A4AE"
      />
    </svg>
  );
}

function MobileNavLink() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <ul className="flex flex-col gap-2 py-4 lg:hidden">
      <li className="cursor-pointer" onClick={() => handleNavigate("/home")}>
        <h1 className="text-black">Home</h1>
      </li>
      <li className="cursor-pointer" onClick={() => handleNavigate("/doctors")}>
        <h1 className="text-black">Doctors</h1>
      </li>
      <li className="cursor-pointer" onClick={() => handleNavigate("/about")}>
        <h1 className="text-black">About</h1>
      </li>
      <li className="cursor-pointer" onClick={() => handleNavigate("/contact")}>
        <h1 className="text-black">Contact</h1>
      </li>
      {/* Notification and Profile links */}
      <div className="space-x-4">
        <NotificationDialog />
        <ProfileNavigation />
      </div>
    </ul>
  );
}

const ProfileNavigation = () => {
  const navigate = useNavigate();

  const hanldeNavigateEditProfile = () => {
    navigate("/editprofile");
  };

  const hanldeNavigateSignOut = () => {
    navigate("/");
  };

  return (
    <Menu>
      <Tooltip title="Profile">
        <MenuHandler>
          <Avatar
            variant="circular"
            alt="tania andrew"
            className="cursor-pointer"
            size="xs"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
        </MenuHandler>
      </Tooltip>
      <MenuList>
        <MenuItem
          className="flex items-center gap-2"
          onClick={hanldeNavigateEditProfile}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.48999 1.17C9.10999 -0.39 6.88999 -0.39 6.50999 1.17C6.45326 1.40442 6.34198 1.62213 6.18522 1.80541C6.02845 1.9887 5.83063 2.13238 5.60784 2.22477C5.38505 2.31716 5.1436 2.35564 4.90313 2.33709C4.66266 2.31854 4.42997 2.24347 4.22399 2.118C2.85199 1.282 1.28199 2.852 2.11799 4.224C2.65799 5.11 2.17899 6.266 1.17099 6.511C-0.390006 6.89 -0.390006 9.111 1.17099 9.489C1.40547 9.54581 1.62322 9.65719 1.80651 9.81407C1.98979 9.97096 2.13343 10.1689 2.22573 10.3918C2.31803 10.6147 2.35639 10.8563 2.33766 11.0968C2.31894 11.3373 2.24367 11.5701 2.11799 11.776C1.28199 13.148 2.85199 14.718 4.22399 13.882C4.42993 13.7563 4.66265 13.6811 4.90318 13.6623C5.14371 13.6436 5.38527 13.682 5.60817 13.7743C5.83108 13.8666 6.02904 14.0102 6.18592 14.1935C6.34281 14.3768 6.45419 14.5945 6.51099 14.829C6.88999 16.39 9.11099 16.39 9.48899 14.829C9.54599 14.5946 9.65748 14.377 9.8144 14.1939C9.97132 14.0107 10.1692 13.8672 10.3921 13.7749C10.6149 13.6826 10.8564 13.6442 11.0969 13.6628C11.3373 13.6815 11.57 13.7565 11.776 13.882C13.148 14.718 14.718 13.148 13.882 11.776C13.7565 11.57 13.6815 11.3373 13.6628 11.0969C13.6442 10.8564 13.6826 10.6149 13.7749 10.3921C13.8672 10.1692 14.0107 9.97133 14.1939 9.81441C14.377 9.65749 14.5946 9.546 14.829 9.489C16.39 9.11 16.39 6.889 14.829 6.511C14.5945 6.45419 14.3768 6.34281 14.1935 6.18593C14.0102 6.02904 13.8666 5.83109 13.7743 5.60818C13.682 5.38527 13.6436 5.14372 13.6623 4.90318C13.681 4.66265 13.7563 4.42994 13.882 4.224C14.718 2.852 13.148 1.282 11.776 2.118C11.5701 2.24368 11.3373 2.31895 11.0968 2.33767C10.8563 2.35639 10.6147 2.31804 10.3918 2.22574C10.1689 2.13344 9.97095 1.9898 9.81407 1.80651C9.65718 1.62323 9.5458 1.40548 9.48899 1.171L9.48999 1.17ZM7.99999 11C8.79564 11 9.55871 10.6839 10.1213 10.1213C10.6839 9.55871 11 8.79565 11 8C11 7.20435 10.6839 6.44129 10.1213 5.87868C9.55871 5.31607 8.79564 5 7.99999 5C7.20434 5 6.44128 5.31607 5.87867 5.87868C5.31606 6.44129 4.99999 7.20435 4.99999 8C4.99999 8.79565 5.31606 9.55871 5.87867 10.1213C6.44128 10.6839 7.20434 11 7.99999 11Z"
              fill="#90A4AE"
            />
          </svg>

          <Typography variant="small" className="font-medium">
            Edit Profile
          </Typography>
        </MenuItem>

        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2 ">
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
              fill="#90A4AE"
            />
          </svg>
          <Typography variant="small" className="font-medium" onClick={hanldeNavigateSignOut}>
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

function NotificationDialog() {
  return (
    <Menu>
      <MenuHandler>
        <Tooltip title="Notifications">
          <IconButton variant="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                clipRule="evenodd"
              />
            </svg>
          </IconButton>
        </Tooltip>
      </MenuHandler>
      <MenuList className="flex flex-col gap-2">
        <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
          <Avatar
            variant="circular"
            alt="tania andrew"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <div className="flex flex-col gap-1">
            <Typography variant="small" color="gray" className="font-semibold">
              Tania send you a message
            </Typography>
            <Typography className="flex items-center gap-1 text-sm font-medium text-blue-gray-500">
              <ClockIcon />
              13 minutes ago
            </Typography>
          </div>
        </MenuItem>
        <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
          <Avatar
            variant="circular"
            alt="natali craig"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
          />
          <div className="flex flex-col gap-1">
            <Typography variant="small" color="gray" className="font-semibold">
              Natali replied to your email.
            </Typography>
            <Typography className="flex items-center gap-1 text-sm font-medium text-blue-gray-500">
              <ClockIcon />1 hour ago
            </Typography>
          </div>
        </MenuItem>
        <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
          <Avatar
            variant="circular"
            alt="paypal"
            src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png"
          />
          <div className="flex flex-col gap-1">
            <Typography variant="small" color="gray" className="font-semibold">
              You&apos;ve received a payment.
            </Typography>
            <Typography className="flex items-center gap-1 text-sm font-medium text-blue-gray-500">
              <ClockIcon />5 hours ago
            </Typography>
          </div>
        </MenuItem>
      </MenuList>
    </Menu>
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
    <nav className="fixed top-0 z-10 w-full p-2 px-10 pb-4 mx-auto bg-PrimaryBg">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex justify-center space-x-4">
          {/* App Icon */}
          <svg
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="w-8 iconify iconify--noto"
            preserveAspectRatio="xMidYMid meet"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <ellipse
                transform="rotate(-6.212 96.651 75.058)"
                cx="96.65"
                cy="75.06"
                rx="7.46"
                ry="10.19"
                fill="#176bc6"
              />
              <ellipse
                transform="rotate(-3.438 45.482 24.473)"
                cx="45.49"
                cy="24.46"
                rx="7.7"
                ry="10.06"
                fill="#176bc6"
              />
              <ellipse
                transform="rotate(-83.131 62.972 30.562)"
                cx="62.97"
                cy="30.56"
                rx="9.6"
                ry="7.7"
                fill="#176bc6"
              />
              <ellipse
                transform="rotate(-13.239 27.21 27.8)"
                cx="27.21"
                cy="27.8"
                rx="7.83"
                ry="10.74"
                fill="#176bc6"
              />
              <path
                d="M89.66 94.36c15.11-8.45 32.4 3.47 30.13 12.58c-2.44 9.76-11.73 4.5-18.68 7.04c-4.27 1.56-10.79 10.32-18.3 4.97c-6.55-4.67-3.01-19.08 6.85-24.59z"
                fill="#176bc6"
              />
              <path
                d="M38.16 40.41c10.8-2.83 25.86 5.56 24.14 15.13c-1.62 9.01-14.14 5.08-19.22 6.97c-6.62 2.46-14.92 9.71-19.64 2.46c-5.32-8.19 5.24-22.07 14.72-24.56z"
                fill="#176bc6"
              />
              <ellipse
                transform="rotate(-30 12.909 40.928)"
                cx="12.91"
                cy="40.93"
                rx="7.71"
                ry="9.95"
                fill="#176bc6"
              />
              <ellipse
                transform="rotate(-30 79.075 82.363)"
                cx="79.08"
                cy="82.36"
                rx="8.01"
                ry="10.19"
                fill="#176bc6"
              />
              <ellipse
                transform="rotate(-35.353 67.223 97.302)"
                cx="67.22"
                cy="97.3"
                rx="7.46"
                ry="10.19"
                fill="#176bc6"
              />
              <ellipse
                transform="rotate(-3.533 115.05 78.335)"
                cx="115.06"
                cy="78.32"
                rx="7.43"
                ry="9.46"
                fill="#176bc6"
              />
            </g>
          </svg>
          <h1 className="mr-4 cursor-pointer py-1.5 font-JetBrains text-lg">
            PetVews
          </h1>
        </div>

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
