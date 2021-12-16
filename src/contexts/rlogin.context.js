import { createContext, useMemo, useState } from "react"
import { rLogin } from "../rlogin"
import { Outlet } from "react-router-dom"

export const WalletContext = createContext(null)

const WalletProvider = () => {

  const [account, setAccount] = useState(null)
  const [disconnect, setDisconnect] = useState(null)
  const [provider, setProvider] = useState(null)
  const [isConnected, setIsConnected] = useState(false)


  const connect = () => rLogin.connect()
    .then(({ provider, disconnect }) => { // the provider is used to operate with user's wallet
      setProvider(provider)
      setDisconnect(() => disconnect())
      // request user's account
      provider.request({ method: 'eth_accounts' }).then(([account]) => {
        setAccount(account)
        setIsConnected(true)
      })
    })

  const values = useMemo(() => ({
    connect,
    disconnect,
    account,
    provider,
    isConnected,
  }), [account, disconnect, provider, isConnected])

  return (
    <WalletContext.Provider value={values}>
      <Outlet />
    </WalletContext.Provider>
  )

}

export default WalletProvider