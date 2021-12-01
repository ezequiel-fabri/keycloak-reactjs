import { useState, useEffect } from "react"

const useRlogin = () => {
  useEffect(() => {
    const rLogin = new RLogin({
      cachedProvider: false, // change to true to cache user's wallet choice
      providerOptions: { // read more about providers setup in https://github.com/web3Modal/web3modal/
        walletconnect: {
          package: WalletConnectProvider, // setup wallet connect for mobile wallet support
          options: {
            rpc: {
              31: 'https://public-node.testnet.rsk.co' // use RSK public nodes to connect to the testnet
            }
          }
        }
      },
      supportedChains: [31] // enable rsk testnet network
    })
  }, [])
}
