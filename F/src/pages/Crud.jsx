
import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, Space,message,Menu, Dropdown,  DatePicker, 
  Select} from 'antd';
import {  PlusOutlined, SearchOutlined ,MoreOutlined } from '@ant-design/icons';

import axios from 'axios';
import './t.css';
import debounce from 'lodash.debounce';


// import Navbar from '../component/Navbar';
import { useNavigate , useLocation} from 'react-router-dom';
// import Si from '../component/Navbar';
import Sidebar from '../component/Navbar';
// import moment from 'moment';


const Crud = ({isLoggedIn}) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchText, setSearchText] = useState('');
  const [searchError, setSearchError] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState({});
  
  
  // const [selectedStatus, setSelectedStatus] = useState({});
  
  const moment = require('moment');


  
  const handleSearch = async (text) => {
    try {
      if (!text) {
        setSearchError();
      fetchData();
      // setUsers([]);
        return;
      }

      setSearchError(null);
      const response = await axios.get(`http://localhost:3004/users/search/${text}`, {
        headers: {
          username: 'K', // Replace with the actual admin username
          password: '17', // Replace with the actual admin password
        },
      });

      if (response.data && response.data.length > 0) {
        setUsers(response.data); // Update the 'users' state with the search results
        // message.success('Users found.'); // Show success message for search results
      } else {
        setUsers([]); // Clear the 'users' state when no users found
        message.warning('No users found.'); // Show warning message for no results
      }
    } catch (error) {
      console.error(error);
      setSearchError('Error occurred while searching for users.');
      // message.error('Error occurred while searching.'); // Show error message for search error
    }
  };
 


 
  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate('/');
  //     // Redirect to the home page if the user is not logged in
  //   }
  //  
  // }, [isLoggedIn, navigate]);
 

    // Define the debounced search function
   

    // useEffect(() => {
    //   if (!isLoggedIn) {
    //     navigate('/');
    //     // Redirect to the home page if the user is not logged in
    //   }
  
    //   // Clean up the debounced function on unmount
    //   return () => {
    //     debouncedHandleSearch.cancel();
    //   };
    // }, [isLoggedIn, navigate]);
  
    // // Call the debounced search function whenever searchText changes
    const debouncedHandleSearch = debounce(handleSearch, 500);
  
    // useEffect(() => {
    //   if (!isLoggedIn) {
    //     navigate('/');
     

    //     // Redirect to the home page if the user is not logged in
    //   }
    useEffect(() => {
      // if (!isLoggedIn && location.pathname === '/crud') {
      // navigate('/');
      // Clean up the debounced function on unmount
            // }     
             return () => {
        debouncedHandleSearch.cancel();
      };
    }, [  navigate, location.pathname, debouncedHandleSearch]);
   
    // Call the debounced search function whenever searchText changes
    useEffect(() => {
      debouncedHandleSearch(searchText);
    }, [searchText, debouncedHandleSearch]);
   
    // New useEffect hook for cleanup
    useEffect(() => {
      // Clean up the debounced function on unmount
      return () => {
        debouncedHandleSearch.cancel();
      };
    }, [debouncedHandleSearch]);
    
    
    

  // ... Rest of the component code














  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
     
     
    },

   
    // {
    //   title: 'Date',
    //   dataIndex: 'date',
    //   key: 'date',
    // },

    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date) => moment(date).format('YYYY-MM-DD'), // Format the date to display only the date part
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      
    },
    // {
    //   title: 'End Date',
    //   dataIndex: 'endDate',
    //   key: 'endDate',
    // },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      render: (endDate) => moment(endDate).format('YYYY-MM-DD'), // Format the endDate to display only the date part
    },
    // {
    //   title: 'Contact',
    //   dataIndex: 'contact',
    //   key: 'contact',
    // },
    {
      title: 'Contact',
      dataIndex: 'contact',
      key: 'contact',
      render: (contact) => {
        // Custom validation to check if contact has exactly 10 characters
        if (contact.length !== 10) {
          return 
        }
        return contact;
      },
    },



   

    // {
    //   title: 'Status',
    //   dataIndex: 'status',
    //   key: 'status',
    //   render: (status) => (
    //     <span style={{ color: status.trim().toLowerCase() === 'complete' ? 'green' : 'red' }}>{status}</span>
    //   ),
    // },



    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status, record) => (
        <Select
          value={selectedStatus[record.id] || status}
          onChange={(value) => {
            setSelectedStatus({
              ...selectedStatus,
              [record.id]: value,
            });
            handleStatusChange(record.id, value); // Call handleStatusChange to update the status
          }}
        >
          <Select.Option value="pending">Pending</Select.Option>
          <Select.Option value="complete">Complete</Select.Option>
        </Select>
      ),
    },

    


 
 // ... other columns
 

    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Dropdown overlay={menu(record)} trigger={['click']}>
            <Button type="link" icon={<MoreOutlined />} />
          </Dropdown>
        </Space>
      ),
    },

   
   
  

  ];
 

  const handleStatusChange = async (id, status) => {
    try {
      const response = await axios.put(`http://localhost:3004/users/${id}/status`, { status }, {
        headers: {
          username: 'K', // Replace with the actual admin username
          password: '17', // Replace with the actual admin password
        },
      });

      if (response.data.message === 'User status updated successfully') {
        message.success('User status updated successfully');
        fetchData(); // Fetch data again to update the table with the new status
      }
    } catch (error) {
      console.error(error);
      message.error('Failed to update user status');
    }
  };



  const menu = (record) => (
    <Menu>
      <Menu.Item key="edit" onClick={() => handleEdit(record)}>
        Edit
      </Menu.Item>
      <Menu.Item key="delete" danger onClick={() => handleDelete(record.id)}>
        Delete
      </Menu.Item>
    </Menu>
  );
  
 

  

  
  // const handleSearch = async () => {
  //   try {
  //     if (!searchText) {
  //       // setSearchError('Please enter a valid search text.');
  //       return;
  //     }

  //     // setSearchError(null);
  //     const response = await axios.get(`http://localhost:3000/users/search/${searchText}`, {
  //       headers: {
  //         username: 'K', // Replace with the actual admin username
  //         password: '17', // Replace with the actual admin password
  //       },
  //     });

  //     if (response.data && response.data.length > 0) {
  //       setUsers(response.data); // Update the 'users' state with the search results
  //       setSearchText('');
  //       // setUsersFound(true); 
  //       message.success('Users found.'); // Show success message for search results
  //     } else {
  //       setUsers([]); // Clear the 'users' state when no users found
  //       // setUsersFound(false); 
  //       // setSearchError('Users not found.');
  //       message.warning('No users found.'); // Show warning message for no results
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     // setSearchError('Error occurred while searching for users.');
  //     message.error('Error occurred while searching.'); // Show error message for search error
  //   }
  // };

  
 

 


  // const handleOK = () => {
  //   setSearchResults([]); // Reset the search results to an empty array
  //   setSearchText('');
  // };
  
  
  

  // Fetch data from the server
 
  
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3004/users', {
          headers: {
            username: 'K', // Replace with the actual admin username
            password: '17', // Replace with the actual admin password
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
  
    useEffect(() => {
      fetchData();
    }, []);




  const handleEdit = (record) => {
    setFormData({ ...record });
    setIsEditing(true);
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setFormData({});
    setIsEditing(false);
    setModalVisible(false);
  };

  

const handleSubmit = async () => {
  try {
    if (isEditing) {
      // If editing an existing user, format the dates to exclude the time component
      formData.endDate = moment(formData.endDate).format('YYYY-MM-DD');
      formData.date = moment(formData.date).format('YYYY-MM-DD');

      // If the status is not provided, set it to 'pending'
      if (!formData.status) {
        formData.status = 'pending';
      }

      await axios.put(`http://localhost:3004/users/${formData.id}/details`, formData, {
        headers: {
          username: 'K', // Replace with the actual admin username
          password: '17', // Replace with the actual admin password
        },
      });

      message.success('User updated successfully');
    } else {
      // If creating a new user, format the dates to exclude the time component
      formData.endDate = moment(formData.endDate).format('YYYY-MM-DD');
      formData.date = moment(formData.date).format('YYYY-MM-DD');

      // If the status is not provided, set it to 'pending'
      if (!formData.status) {
        formData.status = 'pending';
      }

      const response = await axios.post('http://localhost:3004/users', formData, {
        headers: {
          username: 'K', // Replace with the actual admin username
          password: '17', // Replace with the actual admin password
        },
      });

      const newUser = response.data.user;
      message.success(`User created successfully with ID: ${newUser.id}`);
    }

    handleModalCancel();
    fetchData();
    console.log('Formatted End Date:', formData.endDate);
    console.log('Formatted Date:', formData.date);
  } catch (error) {
    console.error(error);
  }
};



// const handleSubmit = async () => {
//   try {
//     // Format the dates to exclude the time component
//     formData.endDate = moment(formData.endDate).format('YYYY-MM-DD');
//     formData.date = moment(formData.date).format('YYYY-MM-DD');

//     // Add the status field to the formData object based on the admin's choice
//     if (isAdminDecided) {
//       formData.status = adminChoice === 'complete' ? 'complete' : 'pending';
//     } else {
//       // If admin hasn't decided yet, set a default status (e.g., 'pending')
//       formData.status = 'pending';
//     }

//     if (isEditing) {
//       // If editing an existing user, send a PUT request to update the user
//       await axios.put(`http://localhost:3000/users/${formData.id}`, formData, {
//         headers: {
//           username: 'K', // Replace with the actual admin username
//           password: '17', // Replace with the actual admin password
//         },
//       });
//       message.success('User updated successfully');
//     } else {
//       // If creating a new user, send a POST request to create the user
//       const response = await axios.post('http://localhost:3000/users', formData, {
//         headers: {
//           username: 'K', // Replace with the actual admin username
//           password: '17', // Replace with the actual admin password
//         },
//       });
//       const newUser = response.data.user;
//       message.success(`User created successfully with ID: ${newUser.id}`);
//     }

//     handleModalCancel();
//     fetchData();
//   } catch (error) {
//     console.error(error);
//   }
// };



  const handleDelete = (id) => {
    Modal.confirm({
      title: 'Delete Client',
      content: 'Are you sure you want to delete this user?',
      okText: 'Yes',
      okButtonProps: {
        style: {
          backgroundColor: 'green',
          borderColor: 'green',
          color:'black',
        },
      },
      cancelText: 'No',
      cancelButtonProps: {
        style: {
          backgroundColor: 'red',
          borderColor: 'red',
          color:'black'
        },
      },
      onOk: async () => {
        try {
          await axios.delete(`http://localhost:3004/users/${id}`, {
            headers: {
              username: 'K', // Replace with the actual admin username
              password: '17', // Replace with the actual admin password
            },
          });
          message.success('User deleted successfully');
          fetchData();
        } catch (error) {
          console.error(error);
          message.error('Error occurred');
        }
      },
    });
  };
  



  // const handleLogout = async () => {
  //   try {
  //     await axios.post('http://localhost:3000/logout');
  //     message.success('Logged out successfully.'); // API call to logout on the server
  //     // Optionally, you can clear the state or perform other cleanup tasks here if needed.
  //     navigate('/');
  //     // Navigate back to the home page after logout
  //   } catch (error) {
  //     console.error(error);
  //     message.error('Error occurred during logout.');
  //   }
  // };




  return (
    <>
     {isLoggedIn ? (
    <div className="main-container">
     <Sidebar/>
   
   
     <div className="table-container"> 
      <Button
  type="primary"
  icon={<PlusOutlined />}
  style={{ background: 'white', color: 'black', border: '1px solid black',
  marginTop:'10px' }}
  onClick={() => setModalVisible(true)}
>
  Create Customer
</Button>


      

{/*     
       <Input
        placeholder="Enter user ID or name letter"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
        style={{ margin: '5px 5px 10px 0', width: 200, marginLeft: '10px' }}
      />
      <Button
        icon={<SearchOutlined />}
        onClick={handleSearch}
        className="navbar-button"
        style={{ margin: '5px 0' }}
      >
        Search
      </Button>  */}






<Input
        placeholder="Enter user ID or name letter"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            debouncedHandleSearch(searchText); // Call the debounced function on Enter key press
          }
        }}
        style={{ margin: '5px 5px 10px 0', width: 200, marginLeft: '10px' }}
      />
      <Button
        icon={<SearchOutlined />}
        onClick={() => debouncedHandleSearch(searchText)} // Call the debounced function on button click
        className="navbar-button"
        style={{ margin: '5px 0' }}
      >
        Search
      </Button>
      {searchError && <p>{searchError}</p>}
      {users.length > 0 &&
        users.map((user) => (
          <div key={user.id}>
          
          </div>
        ))} 








      <div>
      <Table dataSource={users} columns={columns} 
      loading={loading} rowKey="id" scroll={{ x: true }} 
      className="tableContainerStyles" pagination={false} />
         
         </div>

<Modal
// style={{width:'30px',}}
  title={isEditing ? 'Edit Customer' : 'Add Customer'}
  visible={modalVisible}
  onCancel={handleModalCancel}
  footer={[
    <Button key="cancel" onClick={handleModalCancel}>
      Cancel
    </Button>,
    <Button key="submit" type="primary" onClick={handleSubmit}>
      {isEditing ? 'Update' : 'Submit'}
    </Button>,
  ]}
>
  <Form >
    <Form.Item
      label="Name"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
    >
      <Input
        value={formData.name || ''}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
    </Form.Item>
    <Form.Item
      label="Date"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
    >
      <DatePicker
        value={formData.date ? moment(formData.date) : null}
        onChange={(date) =>
          setFormData({
            ...formData,
            date: date ? date.format('YYYY-MM-DD') : '',
          })
        }
      />
    </Form.Item>
    <Form.Item
      label="Amount"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
    >
      <Input
        value={formData.amount || ''}
        onChange={(e) =>
          setFormData({
            ...formData,
            amount: parseInt(e.target.value, 10),
          })
        }
      />
    </Form.Item>
    <Form.Item
      label="End Date"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
    >
      <DatePicker
        value={formData.endDate ? moment(formData.endDate) : null}
        onChange={(date) =>
          setFormData({
            ...formData,
            endDate: date ? date.format('YYYY-MM-DD') : '',
          })
        }
      />
    </Form.Item>
    <Form.Item
      label="Contact"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      rules={[
        {
          required: true,
          message: 'Please enter a contact.',
        },
        {
          len: 10,
          message: 'Contact number should be exactly 10 characters.',
        },
      ]}
    >
      <Input
        value={formData.contact || ''}
        onChange={(e) =>
          setFormData({
            ...formData,
            contact: e.target.value,
          })
        }
      />
    </Form.Item>
  



    {/* Add other Form.Item components with similar labelCol and wrapperCol props as needed */}
  </Form>
</Modal>
</div>
     
    {/* </> */}
   
    </div>
      ) : null}
    </>
  );
};

export default Crud;


