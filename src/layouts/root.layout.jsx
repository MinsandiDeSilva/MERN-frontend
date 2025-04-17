import Navigation from "@/components/shared/Navigation";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <main className="container px-4">
      <Navigation />
      <Outlet />
    </main>
  );
}

export default RootLayout;
