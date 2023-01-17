import { useState } from "react"
import { useLogin } from "../hooks/useLogin";

const Login = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin();
    const handleSubmit = async(e)=>{
        e.preventDefault();

        await login(email, password);
    }

    return(
        <form className="login" onSubmit={handleSubmit} style={{color: 'black'}}>
            <h1 style={{textAlign: 'center'}}>MyFitnessPal</h1>

            <p style={{textAlign: 'center'}}>Are you have account? then LogIn</p>
            
            <label>Email:</label>
            <input 
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}            
            />

            <label>Password:</label>
            <input 
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}            
            />

            <button disabled={isLoading} style={{marginLeft:"140px"}}>Login</button>
            {error && <div className="error">{error}</div>}
            <p style={{textAlign: 'center'}}>Do you not have account? click here to  <a  href="/signup">   Register</a></p>
        </form>
    );
}

export default Login