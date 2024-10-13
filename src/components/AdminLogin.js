import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrorMessage('');

        try{
            const response = await axios.post('http://localhost:5000/admin-login', { username, password});

            if(response.status === 200) {
                setIsLoggedIn(true);
                console.log("Login successfully");
            } else {
                setIsLoggedIn(false);
                setErrorMessage('Invalid username or password');
            }
        } catch(error) {
            console.error("Error logging in:",error);
            
            if(error.response) {
                if(error.response.status === 401) {
                    setErrorMessage('Invalid username or password'); 
                } else {
                    setErrorMessage('An error occurred, please try again later')
                }
            } else {
                setErrorMessage('Network error');
            }
            setIsLoggedIn(false);
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
                                    value={username}
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