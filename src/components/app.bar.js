import { Header } from "./lib"
import 'styled-components/macro'

const AppBar = ({ icon: Icon, children }) => {

  // the icon isn't going to be fixed, it will depend
  return (
    <Header>
      <div css={`display: flex; align-items: center`}>
        <Icon width="30" height="30" />
        <h2 css={`font-size: 26px; margin: 0; margin-left: 0.5rem`}>{children}</h2>
      </div>
    </Header>
  )

}

export default AppBar