import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginWithEmail, loginWithGoogle } from '../redux/slices/authSlice';
 // Updated path

function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailLogin = () => dispatch(loginWithEmail({ email, password }));
    const handleGoogleLogin = () => dispatch(loginWithGoogle());

    return (
        <div>
            <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleEmailLogin}>Login with Email</button>
            <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
    );
}

export default Login;
