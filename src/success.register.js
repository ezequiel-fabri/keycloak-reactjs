import styled from "styled-components"
import { CheckCircle } from "@styled-icons/bootstrap/"
import {
  Title,
  Text,
  Container,
  Badge,
  ButtonPrimary,
  ButtonSecondary,
} from "./components/lib"
import { useNavigate } from "react-router-dom"
import 'styled-components/macro'

export const CheckContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PrimaryCheckIcon = styled(CheckCircle)`
  color: ${props => props.theme.palette.secondary[100]};
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const SuccessRegister = () => {

  const navigate = useNavigate()

  return (
    <Container>
      <Title textCenter>
        ¡Registro exitoso!
      </Title>
      <Text textCenter>
        Te damos la bienvenida a tu mejor inversión.
      </Text>
      <Badge>
        Ahora tenés nivel 1
      </Badge>
      <Text textCenter>
        Para aumentar tu cuenta de nivel necesitamos verificar algunos datos personales.
      </Text>
      <CheckContainer>
        <PrimaryCheckIcon />
        <Text css={`width: 250px;`}>
          <span css={`font-weight: bold`}>Podés visualizar proyectos</span> de inversión y sus estados actuales.
        </Text>
      </CheckContainer>
      <CheckContainer>
        <PrimaryCheckIcon />
        <Text css={`width: 250px;`}>
          <span css={`font-weight: bold`}>Podés vincular tu wallet</span> con la plataforma para ver tus movimientos.
        </Text>
      </CheckContainer>
      <CheckContainer>
        <PrimaryCheckIcon css={`color: ${props => props.theme.palette.lightGray};`} />
        <Text css={`width: 250px; color: ${props => props.theme.palette.lightGray};`}>
          Ya podés invertir en proyectos y ver sus estados actuales de financiamiento.
        </Text>
      </CheckContainer>
      <CheckContainer>
        <PrimaryCheckIcon css={`color: ${props => props.theme.palette.lightGray};`} />
        <Text css={`width: 250px; color: ${props => props.theme.palette.lightGray};`}>
          Podés realizar transacciones dentro de la plataforma.
        </Text>
      </CheckContainer>
      <ButtonPrimary variant="white" css={`margin: 10px 0`}>
        Verificar ahora
      </ButtonPrimary>
      <ButtonSecondary variant="white" onClick={() => navigate("/link-wallet")}>
        Verificar más tarde
      </ButtonSecondary>
    </Container>
  )
}

export default SuccessRegister