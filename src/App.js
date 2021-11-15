import { userService } from "./services";
import "./index.css"

const buttonPrimary = {
  background: "#49277A",
  padding: "10px 20px",
  border: "none",
  color: "#fff",
  cursor: "pointer"
}

const buttonSecondary = {
  border: "1px solid #999",
  color: "#999",
  background: "none",
  padding: "9px 20px",
  marginRight: "1rem",
  cursor: "pointer"
}

function App() {
  return (
    <div className="App">
      {!userService.isLoggedIn() ?
        <>
          <header style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 15,
            alignItems: "center"
          }}>
            <div className="content">
              <h1>Maecenic</h1>
            </div>
            <div className="actions">
              <button onClick={userService.login} style={buttonSecondary}>Iniciar sesión</button>
              <button onClick={userService.login} style={buttonPrimary}>Registrarme</button>
            </div>
          </header>
        </> :
        <>
          <h1>welcome {userService.getUsername()}</h1>
          <button onClick={userService.logout}>Logout</button>
        </>
      }
    </div>
  );
}

export default App;
