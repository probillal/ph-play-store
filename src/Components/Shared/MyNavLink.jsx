import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-semibold mr-2 ${isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-b-2 border-b-purple-500" : ""}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
