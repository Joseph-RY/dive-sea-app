import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout, Home, Discover, Sell, Stats, Creators, Info, User } from "./providers/lazy/lazy";
import Loading from "@shared/ui/loading";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Layout />
            </Suspense>
          }
        >
          <Route index element={<Home />} />
          <Route path="discover" element={<Discover />} />
          <Route path="creators" element={<Creators />} />
          <Route path="sell" element={<Sell />} />
          <Route path="stats" element={<Stats />} />
          <Route path="info/:id" element={<Info />} />
          <Route path="user" element={<User />} />
          <Route path="user/:id" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
