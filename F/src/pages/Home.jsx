
  
import React from 'react';
import { Button, Menu, Avatar } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import './h.css'; // Assuming you saved the above CSS in a file named homePage.css
import Navbar from '../component/Navbar';


const HomePage = () => {
    const navigate = useNavigate(); // Use the useNavigate hook to get the navigate function
  
    const handleCRUDButtonClick = () => {
      // When the "CRUD" button is clicked, navigate to the "/crud" page
      navigate('/crud');
    };
  
    const handleAdmin = () => {
      navigate('/');
    };
  
    const handleSettingsClick = () => {
      // Handle settings click logic here
      console.log('Settings clicked!');
    };
  
    return (
      <>
        <div className="navbar">
           
          <Menu mode="horizontal" theme="light" className="light">
          <Navbar/>
            <Menu.Item key="admin" onClick={handleAdmin}>
              <Avatar
                src="https://static.wixstatic.com/media/c837a6_315534a972aa4595923fab16bc937c57~mv2.jpg/v1/crop/x_440,y_610,w_1448,h_1446/fill/w_119,h_119,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1015612369.jpg"
                alt="Admin Profile"
                style={{ marginRight: '8px' }}
                className="img"
              />
              ADMIN
            </Menu.Item>
           
            {/* <Menu.Item key="crud" onClick={handleCRUDButtonClick}>
              CRUD
            </Menu.Item> */}
            {/* <Menu.Item key="settings" onClick={handleSettingsClick} icon={<UserOutlined />}>
              Settings
            </Menu.Item> */}
              <Menu.Item key="settings" onClick={handleSettingsClick} icon={<UserOutlined />} >
            <Link to="/admin-profile">Settings</Link>
           
          </Menu.Item>
          {/* <Menu.Item key="logout" className="logout-menu-item" >
              LogOut
            </Menu.Item> */}
          </Menu>
        </div>
  
        <div className="button-container">
          <Button className="crud-button" onClick={handleCRUDButtonClick} >
            CRUD
          </Button>
        </div>

  
      </>
    );
  };
  
  export default HomePage;
  
