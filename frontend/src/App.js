import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PublicPage from "./components/PublicPage/PublicPage";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
          <BrowserRouter>
          <Navbar />
            < div className="pages">
              <Routes>
                <Route 
                  path="/"
                  element={user ? <Home/> : <PublicPage/>}
                />
                <Route 
                  path="/login"
                  element={!user ? <Login /> : <Navigate to="/" />}
                />
                <Route 
                  path="/signup"
                  element={!user ? <Signup /> : <Navigate to="/" />}
                />
              </Routes>
            </div>
          </BrowserRouter>
    </div>
  );
}

export default App;
