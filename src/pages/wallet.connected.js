import { useState, useEffect } from "react"
import { useWalletContext } from "../hooks"
import { Tabs, TabHeader, TabItem, TabPanel } from "../components/tabs"
import "styled-components/macro"

const WalletConnected = () => {
  const [balance, setBalance] = useState(null)
  const { provider, account } = useWalletContext()

  useEffect(() => {
    const getBalance = () => provider.request({
      method: 'eth_getBalance',
      params: [account]
    }).then(res => {
      setBalance(res)
    })
    getBalance()
  }, [account, provider])

  return (
    <Tabs css={`margin-top: 1rem;`}>
      <TabHeader>
        <TabItem className="custom">Balance</TabItem>
        <TabItem className="custom">Movimientos</TabItem>
      </TabHeader>
      <TabPanel>
        <h2>Balance</h2>
        <p>Tu balance es</p>
        <span>{balance}</span>
        <p>Tu address es</p>
        <span style={{ wordBreak: "break-word" }}>{account}</span>
      </TabPanel>
      <TabPanel>
        <h2>Movimienos</h2>
      </TabPanel>
      {/* <button onClick={}>get balance</button> */}
    </Tabs>
  )
}

export default WalletConnected