import { useEffect, useState } from "react"
import { userService } from "../services"
import { ButtonPrimary } from "../components/lib"
import { Navigate, Outlet } from 'react-router-dom'
import 'styled-components/macro'

const Home = () => {

  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    // get authenticated user id
    const id = userService.getUid()
    // redirect to welcome page if user has not logged in before in current machine
    setRedirect(!userService.getLocalStorage(id))
  }, [])

  if (redirect) return <Navigate to="/welcome" />

  return (
    <>
      <ButtonPrimary onClick={userService.logout} variant="white" css={`margin-top: 1rem;`}>
        Logout
      </ButtonPrimary>
      <Outlet />
    </>
  )
}

export default Home