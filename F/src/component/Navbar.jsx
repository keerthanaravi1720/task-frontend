









// SideNavbar.js



// Navbar.js



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, Button, Avatar } from 'antd';
// import { MenuOutlined } from '@ant-design/icons';
// import './Navbar.css';

// const Navbar = () => {
//   const [showSideNavbar, setShowSideNavbar] = useState(false);

//   const handleMenuToggle = () => {
//     setShowSideNavbar(!showSideNavbar);
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-right">
//           <Button icon={<MenuOutlined style={{ color: 'white', }} />} onClick={handleMenuToggle} className="menu-icon" />
//         </div>
//       </nav>
//       {showSideNavbar && (
//         <div className="side-navbar">
//           <Menu theme="dark" mode="vertical">
//             <Menu.Item key="1">
//               <Avatar
//                 src="https://static.wixstatic.com/media/c837a6_315534a972aa4595923fab16bc937c57~mv2.jpg/v1/crop/x_440,y_610,w_1448,h_1446/fill/w_119,h_119,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1015612369.jpg"
//                 alt="Admin Profile"
//                 style={{ marginRight: '8px' }} className='img1'
//               />
//               {/* <span>Admin</span> */}
//               <Link to="/">Admin</Link>
//             </Menu.Item>
//             <Menu.Item key="1">
//               <Link to="/rev">Overview</Link>
//             </Menu.Item>
//             {/* <Menu.Item key="3">
//               <Link to="/">Home</Link>
//             </Menu.Item> */}
//              <Menu.Item key="5">
//               <Link to="/home">Home</Link>
//             </Menu.Item>
//             <Menu.Item key="2">
//               <Link to="/revenue">Revenue</Link>
//             </Menu.Item>
//             <Menu.Item key="3">
//               <Link to="/cal">Calender</Link>
//             </Menu.Item>
//             <Menu.Item key="5">
//               <Link to="/admin-profile">Settings</Link>
//             </Menu.Item>
//             <Menu.Item key="5">
//               <Link to="/">Logout</Link>
//             </Menu.Item>
//           </Menu>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;




import React from 'react';
import { Layout, Menu, Dropdown,Avatar  } from 'antd';
import { DashboardOutlined, UserOutlined, AreaChartOutlined, CalendarOutlined, SettingOutlined,  LogoutOutlined, } from '@ant-design/icons';
import './Navbar.css'; 
 import { Link } from 'react-router-dom';
//  import { useNavigate } from 'react-router-dom';
// import {  message } from 'antd';
// import axios from 'axios';

const { Sider } = Layout;

const Sidebar = () => {
  // const navigate = useNavigate();
  // Sample click handlers for the menu items
  const handleCalendarClick = () => {
    console.log('Calendar clicked!');
  };

  const handleSettingsClick = () => {
    console.log('Settings clicked!');
  };

  const menu = (
    <Menu>
      <Menu.Item key="calendar" onClick={handleCalendarClick}>
        <CalendarOutlined />
        Calendar
      </Menu.Item>
      <Menu.Item key="settings" onClick={handleSettingsClick}>
        <SettingOutlined />
        Settings
      </Menu.Item>
    </Menu>
  );
 

  return (
    <Sider className="sidebar">
      <Menu mode="vertical">
      <Menu.Item key="admin"  icon={<Avatar src="https://static.wixstatic.com/media/c837a6_315534a972aa4595923fab16bc937c57~mv2.jpg/v1/crop/x_440,y_610,w_1448,h_1446/fill/w_119,h_119,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1015612369.jpg" alt="Admin Profile" 
   />}>
          <Link to="/admin-profile" style={{marginTop:'-5px'}}>Admin</Link>
        </Menu.Item>
        <Menu.Item key="dashboard" className='d'icon={<DashboardOutlined />}>
        <Link to="/rev">DashBoard</Link>
        </Menu.Item>
        <Menu.Item key="Customer" className='d'icon={<UserOutlined />}>
        <Link to="/crud">Customer</Link>
        </Menu.Item>
       
        <Menu.SubMenu key="Option" className='d' title="Pages" icon={<AreaChartOutlined />}>
          {/* <Menu.Item key="revenue" className='d' icon={<AreaChartOutlined />}>
          <Link to="/revenue">Revenue</Link>
          </Menu.Item> */}
         
         
           
          {/* Add more options as needed */}
          <Menu.Divider />
          <Menu.Item key="calendarOption" className='d' icon={<CalendarOutlined />}>
          <Link to="/cal">Calender</Link>
          </Menu.Item>
          <Menu.Item key="settingsOption" className='d' icon={<Dropdown overlay={menu} placement="right">
              <SettingOutlined />
            </Dropdown>}>
            <Link to="/admin-profile">Settings</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="logout" className='d'icon={<LogoutOutlined />}  >
        <Link to="/">Logout</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;