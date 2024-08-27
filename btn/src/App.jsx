import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="ejemplo">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/"> About</Link>
          <Link to="/"> Cuchau</Link>
        </nav>

        <h1>Hola</h1>
      </div>
    </>
  );
}

export default App;
