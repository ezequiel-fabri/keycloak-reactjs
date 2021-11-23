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
        <div
          style={{
            margin: "1rem auto",
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2)"
          }}>
          <h1 style={{ textAlign: "center" }}>welcome {userService.getUsername()}</h1>
          <button
            onClick={userService.logout}
            style={{ ...buttonPrimary, width: "100%" }}
          >
            Logout
          </button>
        </div >
      }
    </div>
  );
}

export default App;
