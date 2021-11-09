import { userService } from "./services";

function App() {
  return (
    <div className="App">
      {!userService.isLoggedIn() ?
        <>
          <header className="App-header">
            auth test with keycloak
          </header>
          <button onClick={userService.login}>Login with keycloak</button>
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
