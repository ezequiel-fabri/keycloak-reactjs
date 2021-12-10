import { SectionTitle } from "./lib"
import { SwapVert } from "@styled-icons/material"
import 'styled-components/macro'

const PageTitle = ({ children }) => {

  return (
    <div css={`display: flex; align-items: center; justify-content: flex-start;`}>
      <SwapVert width="30" height="30" css={`color: ${({ theme }) => theme.palette.lightGray};`} />
      <SectionTitle>
        {children}
      </SectionTitle>
    </div>
  )

}

export default PageTitle