
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const navigate=useNavigate();
    const { authToken } = useContext(AuthContext);

    if (!authToken) {
        // If not authenticated, redirect to login page
        return navigate("/login")
    }

    // If authenticated, allow access to the page
    return children;
};

export default ProtectedRoute;
