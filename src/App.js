import "./App.css";
import Nav from "./components/shared/Nav/Nav";
import ManageSettings from "./pages/ManageSettings/ManageSettings";

function App() {
  return (
    <div className="App">
      <div className="app_wrapper">
        <div className="app_nav">
          <Nav />
        </div>
        <div className="body">
          <ManageSettings />
        </div>
      </div>
    </div>
  );
}

export default App;
