import "./App.css";
import Nav from "./Component/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
function App() {
  return (
    <div className="bg-gray-100">
      <div className="container ">
        <Nav />
        <Home />
        <About />
        <Service />
      </div>
    </div>
  );
}

export default App;
