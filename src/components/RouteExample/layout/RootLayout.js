import React from "react";
import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <MainNavigation />;{/* RootLayout의 children들이 outlet으로 렌더링됨 */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
