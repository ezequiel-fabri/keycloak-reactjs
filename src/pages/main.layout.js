import { useEffect, useState } from "react"
import { userService } from "../services"
import { AppNavbar, AppBar } from "../components"
import { Outlet, useLocation, Navigate } from 'react-router-dom'
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

const MainLayout = () => {
  const location = useLocation()
  const navItem = navItems.find(item => item.to === location.pathname)
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    // get authenticated user id
    const id = userService.getUid()
    // redirect to welcome page if user has not logged in before in current machine
    setRedirect(!userService.getLocalStorage(id))
  }, [])

  if (redirect) return <Navigate to="/welcome" />
  if (!navItem) return <Navigate to="/proyectos" />

  return (
    <Main>
      <AppBar icon={navItem.icon}>
        {navItem.label}
      </AppBar>
      <Outlet />
      <AppNavbar navItems={navItems} />
    </Main>
  )
}

export default MainLayout