import React,{ useState } from 'react';
import axios from 'axios';

const UserForm = () => {
    const [name,setName] = useState('');
    const [username, setUserName] = useState('');
    const [images,setImages] = useState([]);
    const [message, setMessage] = useState('');

    const specialCharRegex = /^[a-zA-Z0-9!@#$%^&*)(+=._-]*$/;


    const handleImageChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setImages((prevImages) => [...prevImages, ...selectedFiles]);
    };

    const handleSubmit = async(event) => {
        event.preventDefault();

        
        if (!name || !username) {
            setMessage('Name and Username are required.');
            alert('Name and Username are required.');
            return;
        }

        if (username.length < 1) {
            setMessage('Username should have at least one character.');
            alert('Username should have at least one character.');
            return;
        }

        if (!specialCharRegex.test(username)) {
            setMessage('Username must include at least one special character');
            alert('Username must include at least one special character');
            return;
        }
        const formData = new FormData();
        formData.append('name',name);
        formData.append('username',username);

        for(let i = 0; i< images.length;i++) {
            formData.append(`images[]`,images[i]);
        }
        for (let pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }

        console.log("Name:", name);
        console.log("Social media Handle:", username);
        console.log("Uploaded Images:", images);

        try{
            const response = await axios.post('http://localhost:5000/submit',formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log("Server Response:", response);

            if(response.status === 200) {
                setMessage('User submitted successfully!');
            } else {
                setMessage('Submission failed, please try again.')
            }
        } catch (error) {
            console.error('Submission Error:', error); // Log the error
            if (error.response && error.response.data.message) {
                setMessage(error.response.data.message); // Backend error message
            } else {
                setMessage('Error submitting form, please try again later.');
            }
        }

    };

    return(
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h5>User Submission Form</h5>
                </div>
                <div className="card-body">
                <form onSubmit={handleSubmit}> 
                    <div className="mb-3">
                        <label className="form-label">Name: </label>
                        <input
                            className="form-control"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Socail Media Handle: </label>
                        <input
                            className="form-control"
                            type="text"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Upload Images: </label>
                        <input
                            className="form-control"
                            type="file"
                            multiple 
                            onChange={handleImageChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default UserForm;