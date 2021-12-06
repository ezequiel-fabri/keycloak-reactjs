import { ThemeProvider } from 'styled-components'
import { theme } from "../theme"

const ThemeContext = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export default ThemeContext