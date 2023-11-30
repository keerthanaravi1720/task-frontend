import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, message } from 'antd';
import axios from 'axios';


const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3004/logout');
      message.success('Logged out successfully.'); // Display a success message
      navigate('/'); // Navigate back to the home page after logout
    } catch (error) {
      console.error(error);
      message.error('Error occurred during logout.'); // Display an error message if logout fails
    }
  };

  return (
    <div>
      <h1>Logout Page</h1>
      <Button type="primary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Logout;
