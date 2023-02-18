import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <Router>

        <Header />
        <Routes>

            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
         
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
