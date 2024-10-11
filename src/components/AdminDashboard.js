import React,{ useState, useEffect} from 'react';

const AdminDashboard = () => {
    const [userDetails,setUserDetails] = useState([
        {
            i: 1,
            name: "John Doe",
            userName: "john123",
            images: ["https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", "https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649"]
        },
        {
            id: 2,
            name: "Jane Doe",
            userName: "jane89",
            images: [ "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"]
        }
    ]);

    return(
        <div className="container mt-5">
            <h2>Admin Dashboard</h2>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Social Media Handle</th>
                            <th>Images</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userDetails.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.userName}</td>
                                <td>
                                    {user.images.map((image,index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`User Image ${index + 1}`}
                                            className="img-thumbnail"
                                            style={{width:"100px",height:"100px",marginRight:"10px"}}
                                        />
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default AdminDashboard;