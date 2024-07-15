import "./App.css";
import LandingPage from "./LandingPage";
import Navbar from "./NavBar";
import Resume from "./Resume";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Resume />
    </div>
  );
}

export default App;
