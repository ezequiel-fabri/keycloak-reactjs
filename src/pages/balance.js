import { useWalletContext } from "../hooks"
import { PageTitle } from "../components"
import { ButtonPrimary } from "../components/lib"
import { WalletConnected } from "./index"
import "styled-components/macro"

const Balance = () => {

  const { connect, isConnected } = useWalletContext()
  if (isConnected) return <WalletConnected />

  return (
    <>
      <PageTitle>
        Tus wallets
      </PageTitle>
      <div css={`
        width: 100%; 
        display: flex; 
        align-items: center; 
        flex-direction: column; 
        position: relative;
      `}>
        <img css={`width: 90%;`} src="/empty-wallet.svg" alt="empty-wallet-logo" />
        <p css={`
          color: ${({ theme }) => theme.palette.gray};
          line-height: 100%;
          font-size: 14px;
          max-width: 228px;
          text-align: center;
          margin: 0;
          position: absolute;
          bottom: -5px;
        `}>
          Parece que todavía no vinculaste ninguna wallet!
        </p>
      </div>
      <ButtonPrimary
        variant="standard"
        css={`margin-top: 2rem;`}
        onClick={connect}
      >
        Vincular
      </ButtonPrimary>
    </>
  )
}

export default Balance