import { useState } from "react"
import { useSignup } from "../hooks/useSignup";

const Signup = ()=>{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, isLoading, error } = useSignup();

    const handleSubmit = async(e)=>{
        e.preventDefault();

        await signup(firstName, lastName, email, password)
    }

    return(
        <form className="signup" onSubmit={handleSubmit} style={{color: 'black'}}>
             <h1 style={{textAlign: 'center'}}>MyFitnessPal</h1>

            <p style={{textAlign: 'center'}}>Enter details to Sign Up</p>
            
            <label>First Name:</label>
            <input 
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}            
            />

            <label>Last Name:</label>
            <input 
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}            
            />
            
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

            <button disabled={isLoading} style={{marginLeft:"140px"}}>Sign Up</button>
            {error && <div className="error">{error}</div>}
            <p style={{textAlign: 'center'}}>Are you have account? <a href="/login">Login</a></p>
        </form>
    );
}

export default Signup