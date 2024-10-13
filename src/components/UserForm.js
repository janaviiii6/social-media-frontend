import React,{ useState } from 'react';
import axios from 'axios';

const UserForm = () => {
    const [name,setName] = useState('');
    const [username, setUserName] = useState('');
    const [images,setImages] = useState([]);

    const handleImageChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setImages((prevImages) => [...prevImages, ...selectedFiles]);
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name',name);
        formData.append('userName',username);

        for(let i = 0; i< images.length;i++) {
            formData.append(`images[$i]`,images[i]);
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

            console.log(response.data);
            alert('Submitted successfully!');
        } catch(error) {
            console.error("Error uploading images:",error);
            alert('Error submitting the form, please try again');
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