import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
// pages & components
import "./App.scss";
import { useAuthContext } from "./hooks/useAuthContext";
import DragAndDrop from "./pages/DragAndDrop.js";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar.js";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/SignUp";

// https://react-dnd.github.io/react-dnd/about

function App() {
  const { user } = useAuthContext();
  // const { user } = useAuthContext();

  return (
    <div className="App">
      <Navbar></Navbar>

      <div className={"pages"}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* this the main page of the app */}
          <Route
            index
            path="/drag-drop"
            element={user ? <DragAndDrop /> : <Navigate to="/login" />}
          />

          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/drag-drop" />}
          />

          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/drag-drop" />}
          />

          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
