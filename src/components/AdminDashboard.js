import React,{ useState, useEffect} from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [userDetails,setUserDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    // fetching users from backend
    useEffect(() => {
        const fetchUserDetails = async() => {
            try{
                const response = await axios.get('http://localhost:5000/user-details');
                setUserDetails(response.data);
                console.log(response.data);
                setLoading(false);
            } catch(error) {
                setError('Failed to fetch user data');
                setLoading(false);
            }
        };
        fetchUserDetails();
    }, []);

    if(loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>{error}</div>;
    }

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
                                <td>{user.username}</td>
                                <td>
                                    {user.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={`http://localhost:5000/images/${image}`}
                                        alt={`User Image ${index + 1}`}
                                        className="img-thumbnail"
                                        style={{ width: '100px', height: '100px', marginRight: '10px' }}
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