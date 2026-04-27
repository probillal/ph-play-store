import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <Outlet></Outlet>
      <h2>footer</h2>
    </div>
  );
};

export default RootLayout;
