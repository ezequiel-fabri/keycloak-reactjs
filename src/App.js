import { App as Main } from "./components/lib";
import AppRoutes from "./app.routes";
import "./index.css"

function App() {
  return (
    <Main>
      <AppRoutes />
    </Main>
  );
}

export default App;
