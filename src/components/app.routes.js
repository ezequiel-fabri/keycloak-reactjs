import { Routes, Route } from 'react-router-dom'
import { LinkWallet, SuccessRegister, MainLayout } from "../pages"
import { userService } from '../services'
import { ButtonPrimary } from "./lib"

const Logout = () => {
  return (
    <ButtonPrimary
      onClick={userService.logout}
      variant="white"
      style={{ marginTop: "1rem" }}
    >
      Logout
    </ButtonPrimary>
  )
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route exact path="proyectos" element={"Proyectos"} />
        <Route exact path="inversiones" element={"Inversiones"} />
        <Route exact path="balance" element={"Balance"} />
      <Route exact path="mi-cuenta" element={"Mi cuenta"} /> */}
        <Route exact path="mi-cuenta" element={<Logout />} />
        <Route path="*" element={null} />
      </Route>
      <Route exact path="/welcome" element={<SuccessRegister />} />
      <Route exact path="/link-wallet" element={<LinkWallet />} />
    </Routes>
  )
}

export default AppRoutes
