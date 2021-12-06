import { Header } from "./lib"
import { Dashboard } from "@styled-icons/material"
import 'styled-components/macro'

const AppBar = ({ children }) => {

  // the icon isn't going to be fixed, it will depend
  return (
    <Header>
      <div css={`display: flex; align-items: center`}>
        <Dashboard width="30" height="30" css={`margin-right: 10px;`} />
        {children}
      </div>
    </Header>
  )

}

export default AppBar