import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = {
            userName: 'admin8',
            password: 'adminWorld',
        };

        console.log(userName);
        console.log(password);

        if(userName === loginData.userName && password === loginData.password) {
            setIsLoggedIn(true);
            console.log("Login Successfully");
        } else {
            console.log("Invalid username or password");
        }
    };

    return(
        <div className="container mt-5">
            {isLoggedIn ? (
                <div className="alert alert-success">
                    Login successful! Welcome Admin
                </div>
            ) : (
                <div className="card">
                    <div className="card-header">
                        <h5>Admin Login</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Username: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            {errorMessage && (
                                <div className="alert alert-danger">
                                    {errorMessage}
                                </div>
                            )}
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
export default AdminLogin;