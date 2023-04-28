import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/homepage/Homepage";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Aboutus from "./aboutus/Aboutus";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<Aboutus/>}/>
      </Routes>
    </Router>
  );
}

export default App;
