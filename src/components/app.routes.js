import { Routes, Route } from 'react-router-dom'
import { LinkWallet, SuccessRegister, MainLayout } from "../pages"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route exact path="proyectos" element={"Proyectos"} />
        <Route exact path="inversiones" element={"Inversiones"} />
        <Route exact path="balance" element={"Balance"} />
        <Route exact path="mi-cuenta" element={"Mi cuenta"} /> */}
        <Route path="*" element={null} />
      </Route>
      <Route exact path="/welcome" element={<SuccessRegister />} />
      <Route exact path="/link-wallet" element={<LinkWallet />} />
    </Routes>
  )
}

export default AppRoutes
