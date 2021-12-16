import { useContext } from "react"
import { WalletContext } from "../contexts"

export const useWalletContext = () => useContext(WalletContext)