import { useNavigate } from "react-router-dom";
import { logout } from "../Auth";
import { getcurrentuser } from "../Auth";

function Dashboard() {
    const navigate = useNavigate();
    const user = getcurrentuser()
    const handleChange = () =>{
        logout()
        navigate('/login')
    }
  return (
       <div>
           <h1>Welcome back! {user.username}</h1>
           <button onClick={handleChange}>Logout</button>
       </div>
  )
}

export default Dashboard