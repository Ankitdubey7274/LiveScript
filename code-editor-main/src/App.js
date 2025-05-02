import './App.css';
import Home from './components/Home';
import Login from './components/Login'; // import your login page
import Code from './components/Code'; // import your login page
import Signup from './components/Signup'; // import your login page

import DataProvide from './context/DataProvide';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // import router components

function App() {
  return (
    <div className="App">
      <DataProvide>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/editor" element={<Code />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            {/* Add other routes as needed */}
          </Routes>
        </Router>
      </DataProvide>
    </div>
  );
}

export default App;
