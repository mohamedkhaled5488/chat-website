import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from "./pages/Home";
import './style.scss'
import { authcontext } from "./context/Authcontext";
import { useContext } from "react";

function App() {
  const {currentUser} = useContext(authcontext)
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" /> ;
    }

    return children
  };
  console.log(currentUser)
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
