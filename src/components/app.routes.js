import WalletProvider from '../contexts/rlogin.context'
import { Routes, Route } from 'react-router-dom'
import { LinkWallet, SuccessRegister, MainLayout, Balance } from "../pages"
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
      <Route element={<WalletProvider />}>
        <Route path="/" element={<MainLayout />}>
          <Route exact path="mi-cuenta" element={<Logout />} />
          <Route exact path="balance" element={<Balance />} />
          <Route path="*" element={null} />
        </Route>
        <Route exact path="/welcome" element={<SuccessRegister />} />
        <Route exact path="/link-wallet" element={<LinkWallet />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes