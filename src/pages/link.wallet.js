import {
  Title,
  Text,
  Container,
  ButtonPrimary,
  ButtonSecondary,
} from "../components/lib"
import { connect } from "../rlogin"
import { userService } from "../services"
import { useNavigate } from "react-router-dom"
import 'styled-components/macro'

const LinkWallet = () => {

  const navigate = useNavigate()

  const doFirstLogin = () => {
    const id = userService.getUid()
    if (!userService.getLocalStorage(id)) userService.setLocalStorage(id, "true")
    navigate("/balance")
  }

  return (
    <Container>
      <Title textCenter>
        Vinculá tu wallet
      </Title>
      <Text textCenter css={`width: 298px`}>
        Podés integrar tu wallet con Maecenic para poder visualizar tus fondos directamente en la app.
      </Text>
      <div className="logo" css={`width: 100%; height: 100%; margin: 2rem 0`}>
        <img
          src="/astro-gears-mae.svg"
          alt="logo-mae"
          css={`width: 100%; height: 100%`}
        />
      </div>
      <ButtonPrimary variant="white" css={`margin: 10px 0`} onClick={connect}>
        Vincular mi wallet
      </ButtonPrimary>
      <ButtonSecondary variant="white" onClick={doFirstLogin}>
        Omitir por ahora
      </ButtonSecondary>
    </Container>
  )
}

export default LinkWallet