import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Layout/Navbar';
import Login from './Pages/Login';
import ClientHome from './Pages/Client/ClientHome';
import AdminHome from './Pages/Admin/AdminHome';

import { Route , Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
            {/* NavBar */}
              <Route exact path="/" element={<NavBar><Login /></NavBar>}/>
              <Route path="/client" element={<NavBar><ClientHome /></NavBar>} />
              <Route path="/admin" element={<NavBar><AdminHome /></NavBar>} />
        </Routes>
    </div>
  );
}

export default App;
