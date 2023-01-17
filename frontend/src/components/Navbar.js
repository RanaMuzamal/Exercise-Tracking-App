import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
const Navbar = ()=>{
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    }
    return(
      
            <header>
            <div className="container">
                <Link to="/">
                    <h1>MyFitnessPal</h1>
                </Link>
                <nav>
                    {user &&(<div>
                        <span>{user.email}</span>
                        <button onClick={handleClick}>Logout</button>
                    </div>
                    )}
                    {!user &&(<div>
                        <Link to="/login">Log In</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>)}
                </nav>
            </div>
        </header>


       
    );
}

export default Navbar;