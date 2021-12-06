import { AppRoutes } from "./pages";
import ThemeContext from "./contexts/theme.context"
import "./index.css"

function App() {
  return (
    <ThemeContext>
      <AppRoutes />
    </ThemeContext>
  );
}

export default App;
