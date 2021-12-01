import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import SuccessRegister from './success.register'
import LinkWallet from "./link.wallet"
/* const Register = () => {
  useEffect(() => {
    userService.register({ redirectUri: "http://localhost:3000/welcome" })
  }, [])

  return null
}

const Login = () => {
  useEffect(() => {
    userService.login({ redirectUri: "http://localhost:3000/home" })
  }, [])

  return null0
} */

const AppRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<SuccessRegister />} />
        <Route exact path="/link-wallet" element={<LinkWallet />} />
      </Routes>
    </ThemeProvider>
  )
}

export default AppRoutes
