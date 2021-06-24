import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <About /> */}
        <Home />
      </Router>
    </div>
  );
}

export default App;
