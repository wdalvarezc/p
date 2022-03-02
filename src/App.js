import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Menu from './components/Menu';
import Formulario from './components/form';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/p' element={<Menu />} />
          <Route path='/p/:name' element={<Formulario />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
