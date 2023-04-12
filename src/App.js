import{
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";
import Homepage from "./Pages/homepage/Homepage";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
