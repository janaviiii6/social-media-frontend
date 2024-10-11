import React,{ useState } from 'react';
import axios from 'axios';

const UserForm = () => {
    const [name,setName] = useState('');
    const [userName, setUserName] = useState('');
    const [images,setImages] = useState([]);

    const handleImageChange = (event) => {
        setImages(event.target.files);
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name',name);
        formData.append('userName',userName);

        for(let i = 0; i< images.length;i++) {
            formData.append('images',images[i]);
        }
        
        console.log("Name:", name);
        console.log("Social media Handle:", userName);
        console.log("Uploaded Images:", images);

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
                            value={userName}
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