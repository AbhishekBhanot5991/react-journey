import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./auth/pages/Login";
import Register from "./auth/pages/Register";
import Dashboard from "./dashboard/pages/Dashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
