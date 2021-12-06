import { AppNavbar, AppBar } from "../components"
import { Routes, Route, Outlet } from 'react-router-dom'
import { LinkWallet, SuccessRegister, Home } from "./index"
import { Main } from "../components/lib"

import { Dashboard, AttachMoney } from "@styled-icons/material"
import { TrendingUp } from "@styled-icons/boxicons-regular"
import { Person } from "@styled-icons/bootstrap"

const navItems = [
  {
    icon: Dashboard,
    label: "Proyectos",
    id: 0,
    labelledBy: "projects",
    to: "/proyectos"
  },
  {
    icon: AttachMoney,
    label: "Inversiones",
    id: 1,
    labelledBy: "investment",
    to: "/inversiones"
  },
  {
    icon: TrendingUp,
    label: "Balance",
    id: 2,
    labelledBy: "balance",
    to: "/balance"
  },
  {
    icon: Person,
    label: "Mi cuenta",
    id: 3,
    labelledBy: "account",
    to: "/mi-cuenta"
  },
]

const Layout = () => {
  return (
    <Main>
      <AppBar>Proyectos</AppBar>
      <Outlet />
      <AppNavbar navItems={navItems} />
    </Main>
  )
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route exact path="/" element={<Home />}>
          <Route exact path="proyectos" element={"Proyectos"} />
          <Route exact path="inversiones" element={"Inversiones"} />
          <Route exact path="balance" element={"Balance"} />
          <Route exact path="mi-cuenta" element={"Mi cuenta"} />
          <Route path="*" element={"No match"} />
        </Route>
      </Route>
      <Route exact path="/welcome" element={<SuccessRegister />} />
      <Route exact path="/link-wallet" element={<LinkWallet />} />
    </Routes >
  )
}

export default AppRoutes
