

// import React, { useState } from 'react';
// import '../App.css';
// import Navbar from '../component/Navbar';

// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform login logic here, e.g., send the username and password to the server

//     // Reset form fields
//     setUsername('');
//     setPassword('');
//   };

//   return (
//     <div>
//       <Navbar />
//       <p className="fmart">F-Mart</p>
//       <div class="card">
//         <div class="shapes">
//           <div class="shape shape1"></div>
//           <div class="shape shape2"></div>
//           <div class="shape shape3"></div>
//         </div>
//         {/* <h3 class="title">Card Title</h3> */}
//       </div>

//       {/* <div className='b'> */}
//       <div className="glassmorphism-form">
//         <h2>Admin Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label className="u">Username:</label>
//             <input
//               type="text"
//               id="username"
//               placeholder="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label className="u">Password:</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>

//       <div class="card1">
//         <div class="shapes">
//           <div class="shape shape4"></div>
//           <div class="shape shape5"></div>
//           <div class="shape shape6"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;








// import React, { useState, useEffect } from 'react';
// import { Card, Form, Input, message } from 'antd';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import '../App.css';
// import Navbar from '../component/Navbar';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

 
//   // const handleSubmit = async () => {
//   //   try {
//   //     const response = await axios.post('http://localhost:3000/admin/login', { username, password });
  
//   //     message.success('Login successful'); // Display success message
  
//   //     // Access the previously entered data from the response
//   //     const users = response.data.users;
//   //     console.log(users);
  
//   //     // Do something with the previously entered data, such as updating the state or displaying it on the UI
  
//   //     navigate('/crud', { state: { users } }); // Navigate to the CRUD page with the users data
//   //   } catch (error) {
//   //     console.log(error.response.data);
//   //   }
  
//   //   setUsername('');
//   //   setPassword('');
//   // };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/admin/login', { username, password });
  
//       // Check if the login was successful
//       if (response.status === 200) {
//         const { sessionToken, users } = response.data;
  
//         // Store the session token in local storage
//         localStorage.setItem('sessionToken', sessionToken);
  
//         message.success('Login successful'); // Display success message
  
//         navigate('/crud', { state: { users } }); // Navigate to the CRUD page with the users data
//       } else {
//         message.error('Login failed. Please try again.');
//       }
//     } catch (error) {
//       console.log(error.response.data);
//     }
  
//     setUsername('');
//     setPassword('');
//   };
  
  
  

  
//   return (
//     <div>
//       <Navbar />
//       <p className="fmart">F-Mart</p>
//       <div className="card">
//         <div className="shapes">
//           <div className="shape shape1"></div>
//           <div className="shape shape2"></div>
//           <div className="shape shape3"></div>
//         </div>
//       </div>

//       <div className="glassmorphism-form" data-aos="flip-up">
//         <h2>Admin Login</h2>
//         <Card title="Login" style={{ width: 300 }}>
//           <Form layout="vertical" onFinish={handleSubmit}>
//             <Form.Item label="Username">
//               <Input
//                 type="text"
//                 id="username"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </Form.Item>
//             <Form.Item label="Password">
//               <Input.Password
//                 id="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </Form.Item>
//             <Form.Item>
//               {/* <Button type="primary" htmlType="submit">
//                 Login
//               </Button> */}
//                <button type="submit">Login</button>
//             </Form.Item>
//           </Form>
//         </Card>
//       </div>

//       <div className="card1">
//         <div className="shapes">
//           <div className="shape shape4"></div>
//           <div className="shape shape5"></div>
//           <div className="shape shape6"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;












// import React, { useState, useEffect } from 'react';
// import { Card, Form, Input, message } from 'antd';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import '../App.css';
// import Navbar from '../component/Navbar';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);


//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/admin/login', { username, password });

//       // Check if the login was successful
//       if (response.status === 200) {
//         const { sessionToken, users } = response.data;

//         // Store the session token in local storage
//         localStorage.setItem('sessionToken', sessionToken);

//         console.log("token is",sessionToken);

//         message.success('Login successful'); // Display success message

//         navigate('/crud', { state: { sessionToken, users } }); // Pass the session token and users data to the CRUD page
//       } else {
//         message.error('Login failed. Please try again.');
//       }
//     } catch (error) {
//       console.log(error.response.data);
//     }

//     setUsername('');
//     setPassword('');
//   };



//   // Login function


//   return (
//     <div>
//       <Navbar />
//       <p className="fmart">F-Mart</p>
//       <div className="card">
//         <div className="shapes">
//           <div className="shape shape1"></div>
//           <div className="shape shape2"></div>
//           <div className="shape shape3"></div>
//         </div>
//       </div>

//       <div className="glassmorphism-form" data-aos="flip-up">
//         <h2>Admin Login</h2>
//         <Card title="Login" style={{ width: 300 }}>
//           <Form layout="vertical" onFinish={handleSubmit}>
//             <Form.Item label="Username">
//               <Input
//                 type="text"
//                 id="username"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </Form.Item>
//             <Form.Item label="Password">
//               <Input.Password
//                 id="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </Form.Item>
//             <Form.Item>
//               <button type="submit">Login</button>
//             </Form.Item>
//           </Form>
//         </Card>
//       </div>

//       <div className="card1">
//         <div className="shapes">
//           <div className="shape shape4"></div>
//           <div className="shape shape5"></div>
//           <div className="shape shape6"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;



// // Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Form, Input, Button, message } from 'antd';
// import '../App.css'

// const Login = () => {
//   const navigate = useNavigate(); // Use the useNavigate hook to get the navigate function
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       // Perform API call or authentication logic here
//       // Assuming successful login, navigate to the CRUD page
//       if (username === 'K' && password === '17') {
//         message.success('Logged in successfully!');
//         // Use navigate to navigate to the CRUD page
//         navigate('/crud');
//       } else {
//         message.error('Invalid credentials. Please try again.');
//       }
//     } catch (error) {
//       console.error(error);
//       message.error('Error occurred during login. Please try again later.');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Login</h2>
//       <Form>
//         <Form.Item label="Username">
//           <Input value={username} onChange={(e) => setUsername(e.target.value)} />
//         </Form.Item>
//         <Form.Item label="Password">
//           <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" onClick={handleLogin}>
//             Login
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default Login;



// // Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Form, Input, Button, message } from 'antd';
// import '../App.css';

// const Login = () => {
//   const navigate = useNavigate(); // Use the useNavigate hook to get the navigate function
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       // Perform API call or authentication logic here
//       // Assuming successful login, navigate to the CRUD page
//       if (username === 'K' && password === '17') {
//         message.success('Logged in successfully!');
//         // Use navigate to navigate to the CRUD page
//         navigate('/crud');
//       } else {
//         message.error('Invalid credentials. Please try again.');
//       }
//     } catch (error) {
//       console.error(error);
//       message.error('Error occurred during login. Please try again later.');
//     }
//   };

//   return (
//     <div className="glassmorphism-form">
//       <h2>Login</h2>
//       <Form>
//         <Form.Item label="Username">
//           <Input value={username} onChange={(e) => setUsername(e.target.value)} />
//         </Form.Item>
//         <Form.Item label="Password">
//           <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" onClick={handleLogin}>
//             Login
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default Login;






// Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, message, Card } from 'antd';
import 'aos/dist/aos.css';
import '../App.css';
// import Navbar from '../component/Navbar';
import axios from 'axios';
import AOS from 'aos';

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate(); // Use the useNavigate hook to get the navigate function
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

 

  

  const handleLogin = async () => {
    try {
      // Send a POST request to the /login endpoint with the provided credentials
      await axios.post('http://localhost:3004/login', { username, password });
      setIsLoggedIn(true);
      navigate('/crud'); // Navigate to the CRUD page after successful login
      // message.success('Admin logged in successfully.'); 
     
    } catch (error) {
      console.error(error);
      message.error('Invalid credentials. Please try again.'); // Display an error message if login fails
    }
  };
  
  




  return (
    <div>
      {/* <Navbar /> */}
      <p className="fmart">STailor</p>
      <div className="card" >
        <div className="shapes">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
        </div>
      </div>


<div className="glassmorphism-form" data-aos="flip-up">
      <h2 >ADMIN Login</h2>
      <Card title="Login" style={{ width: 300 }}>
      <Form layout="vertical" onFinish={handleLogin}>
        <Form.Item label="Username">
          <Input value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item>
        <button type="submit"onClick={handleLogin}>Login</button>
        </Form.Item>
      </Form>
      </Card>
      </div>
{/* 
      {showSuccessMessage && (
        <div className="success-message">
          Admin logged in successfully.
        </div>
      )}
 */}

      <div className="card1" >
        <div className="shapes">
          <div className="shape shape4"></div>
          <div className="shape shape5"></div>
          <div className="shape shape6"></div>
        </div>
      </div>
     

    </div>
   

  );
};

export default Login;


