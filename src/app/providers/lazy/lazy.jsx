import { lazy } from "react";

export const Layout = lazy(() => import("../layout/layout"))
export const Creators = lazy(() => import("@/pages/creators/creators"))
export const Discover = lazy(() => import("@/pages/discover/discover"))
export const Home = lazy(() => import("@/pages/home/home"))
export const Info = lazy(() => import("@/pages/info/info"))
export const Sell = lazy(() => import("@/pages/sell/sell"))
export const Stats = lazy(() => import("@/pages/stats/stats"))
export const User = lazy(() => import("@/pages/user/user"))
