






import React, { useState } from 'react';
import { Card, Button, Avatar, Modal, Form, Input } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import './a.css'; // Make sure to import the CSS file
// import Navbar from './Navbar';
import Sidebar from './Navbar';

const AdminProfile = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: 'K',
    email: 'kk@example.com',
    // Add more profile information as needed
  });

  const handleEditMore = () => {
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleModalOk = () => {
    // You can add your logic here to submit the edited profile data
    setIsModalVisible(false);
    console.log('Saving profile changes:', formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="main-container">
    <Sidebar/>
    <div className="table-container"> 
    <Card
      className="ca"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg/v1/fill/w_1642,h_650,al_c,q_85,enc_auto/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        padding: '20px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Add the avatar image here */}
        <Avatar
          src="https://static.wixstatic.com/media/c837a6_315534a972aa4595923fab16bc937c57~mv2.jpg/v1/crop/x_440,y_610,w_1448,h_1446/fill/w_119,h_119,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1015612369.jpg"
          alt="Admin Profile"
          style={{ marginRight: '8px' }}
          className="img"
        />
        {/* Add your admin name here */}
        <h2 className="ca1" style={{ color: 'GrayText' }}>
          K
        </h2>
      </div>
      <p className="profile-info">kk@example.com</p>
      {/* Add more profile information as needed */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
        <Button className="edit-profile-button" icon={<MoreOutlined />} onClick={handleEditMore}>
          Edit Profile
        </Button>
      </div>

      {/* Modal for editing profile */}
      <Modal title="Edit Profile" visible={isModalVisible} onCancel={handleModalCancel} onOk={handleModalOk}>
        <Form>
          <Form.Item label="Name">
            <Input name="name" value={formData.name} onChange={handleInputChange} />
          </Form.Item>
          <Form.Item label="Email">
            <Input name="email" value={formData.email} onChange={handleInputChange} />
          </Form.Item>
          {/* Add more Form.Item components for additional profile information */}
        </Form>
      </Modal>
    </Card>
    </div>
    </div>
  );
};

export default AdminProfile;


