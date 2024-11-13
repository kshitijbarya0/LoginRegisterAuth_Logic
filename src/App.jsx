import Register from "./Components/Register"
import Login from "./Components/Login"
import Dashboard from "./Components/Dashboard";
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
