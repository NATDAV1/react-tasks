import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './login.scss';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
    });
    // .post .path .put .delete -> axios.method('url',(...body), (...headers))
    // .get -> axios.get('url', { headers, ( authorization: localStorage.getItem('authorization') )})
    const send = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/users/auth', { email, password }).then(res => {
            localStorage.setItem('authorization', res.headers.authorization);

            setError('');
        }).catch(err => {
            console.log(err);
            setError('Incorrect credentials.');
        })
    }

    return (
        <form onSubmit={send}>
            <div className="borderBox">
                <div>
                    <label className="email" htmlFor="email">Email:  </label>
                    <input
                        type="email"
                        value={email}
                        name="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password:  </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} />
                <div>
                    <button type="submit" value="login">Login</button>
                </div>
                </div>
                
                <span style={{ color: 'red' }} />
                </div>
                
           
        </form>
    )
}
export default Login;