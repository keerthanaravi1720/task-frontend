import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Crud from './pages/Crud';
import Rev from './pages/Rev';
import CalendarPage from './pages/Calender';
import AdminProfile from './component/AdminPage';
import Logout from './pages/Logout';

const App = () => {
  // Check the stored isLoggedIn status on page load
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  useEffect(() => {
    // Save the isLoggedIn status to localStorage on state change
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Routes>
      <Route path="/" element={<Admin setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/crud" element={<Crud isLoggedIn={isLoggedIn} />} />
      <Route path="/rev" element={<Rev isLoggedIn={isLoggedIn} />} />
      <Route path="/cal" element={<CalendarPage isLoggedIn={isLoggedIn} />} />
      <Route path="/admin-profile" element={<AdminProfile isLoggedIn={isLoggedIn} />} />
      <Route path="/logout" element={<Logout isLoggedIn={isLoggedIn} />} />
    </Routes>
  );
};

export default App;






















// import React, { useState } from 'react';
// import { Routes, Route, } from 'react-router-dom';
// import Admin from './pages/Admin';
// import Crud from './pages/Crud';

// import Rev from './pages/Rev';
// import CalendarPage from './pages/Calender';
// // import Home from './pages/Home';
// import AdminProfile from './component/AdminPage';
// import Logout from './pages/Logout';
// // import VendingMachine from './component/Nav';
// // import MainComponent from './component/Nav';


// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <Routes>
    
    
      
      
//         <Route path="/" element={<Admin setIsLoggedIn={setIsLoggedIn} />} />
//        <Route path="/crud" element={<Crud isLoggedIn={isLoggedIn} />} />
     
//        <Route path="/rev" element={<Rev isLoggedIn={isLoggedIn} />} />
//        <Route path="/cal" element={<CalendarPage isLoggedIn={isLoggedIn} />} />
//        <Route path="/admin-profile" element={<AdminProfile isLoggedIn={isLoggedIn} />} />
//        <Route path="/logout" element={<Logout isLoggedIn={isLoggedIn} />} />
   
//     </Routes>
//   );
// };

// export default App;






























// import React, { useState, useEffect } from 'react';
// import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
// import Admin from './pages/Admin';
// import Crud from './pages/Crud';
// import Rev from './pages/Rev';
// import CalendarPage from './pages/Calender';
// import AdminProfile from './component/AdminPage';
// import Logout from './pages/Logout';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   // useEffect to check if the user is logged in
//   // You can modify this function according to your authentication logic
//   // This is just a dummy example
//   useEffect(() => {
//     // Check if the user is logged in (you can modify this check according to your authentication logic)
//     const userLoggedIn = true; // Replace this with your actual authentication check

//     setIsLoggedIn(userLoggedIn);
//   }, []);

//   // Function to handle login
//   const handleLogin = () => {
//     // Perform the login logic
//     // For example, after successful login, set isLoggedIn to true and navigate to the /crud page
//     setIsLoggedIn(true);
//     navigate('/crud');
//   };

//   return (
//     <Routes>
//       {/* Redirect to /admin if the user visits /crud and is not logged in */}
//       <Route
//         path="/crud"
//         element={isLoggedIn ? <Crud isLoggedIn={isLoggedIn} /> : <Navigate to="/" />}
//       />
//       {/* ... (other routes) */}
//       <Route path="/" element={<Admin setIsLoggedIn={setIsLoggedIn} handleLogin={handleLogin} />} />
//       <Route path="/rev" element={<Rev isLoggedIn={isLoggedIn} />} />
//       <Route path="/cal" element={<CalendarPage isLoggedIn={isLoggedIn} />} />
//       <Route path="/admin-profile" element={<AdminProfile isLoggedIn={isLoggedIn} />} />
//       <Route path="/logout" element={<Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
//     </Routes>
//   );
// };

// export default App;












// import Revenue from './pages/Revenue';
//       {/* <Route path="/crud" element={isLoggedIn ? <Crud /> : <Navigate to="/" />} />
//        */}
//   {/* <Route path="/revenue" element={isLoggedIn ? <Revenue/> : <Navigate to="/" />} /> */}
//  {/* <Route path="/rev" element={isLoggedIn ? <Rev /> : <Navigate to="/" />} /> */}

//       {/* <Route path="/cal" element={isLoggedIn ? <CalendarPage /> : <Navigate to="/" />} /> */}
//          {/* <Route path="/admin-profile" element={isLoggedIn ? <AdminProfile /> : <Navigate to="/" />} />
//       <Route path="/logout" element={isLoggedIn ? <Logout /> : <Navigate to="/" />} />
//      */}
//       {/* <Route path="/revenue" element={<Revenue isLoggedIn={isLoggedIn} />} /> */}