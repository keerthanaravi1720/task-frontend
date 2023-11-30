


import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Table, Button, Input  } from 'antd';
import axios from 'axios';
import Sidebar from '../component/Navbar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { FilterOutlined } from '@ant-design/icons';
import './r.css';




const Rev = () => {
  const [completeUsersCount, setCompleteUsersCount] = useState(null);
  const [pendingUsersCount, setPendingUsersCount] = useState(null);
  const [totalUsersCount, setTotalUsersCount] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const completeResponse = await axios.get('http://localhost:3004/users/status/complete', {
          headers: {
            username: 'K',
            password: '17',
          },
        });
        const pendingResponse = await axios.get('http://localhost:3004/users/status/pending', {
          headers: {
            username: 'K',
            password: '17',
          },
        });
        const totalResponse = await axios.get('http://localhost:3004/users/total', {
          headers: {
            username: 'K',
            password: '17',
          },
        });
        const totalAmountResponse = await axios.get('http://localhost:3004/users/total-amount', {
          headers: {
            username: 'K',
            password: '17',
          },
        });

       
        setCompleteUsersCount(completeResponse.data.count);
        setPendingUsersCount(pendingResponse.data.count);
        setTotalUsersCount(totalResponse.data.count);
        setTotalAmount(totalAmountResponse.data.totalAmount);

        // Prepare data for the line chart
        const chartData = [
          {
            name: 'Total Amount',
            value: totalAmountResponse.data.totalAmount || 0,
            
          },
          {
            name: 'Total Orders',
            value: totalResponse.data.count || 0,
          },
          {
            name: 'Complete ',
            value: completeResponse.data.count || 0,
          },
          {
            name: 'Pending ',
            value: pendingResponse.data.count || 0,
          },
        ];
        setData(chartData);
      } catch (error) {
        setError('Unable to fetch data.');
      }
    };

    fetchData();
  }, []);


  const columns = [
    { title: 'Date' , dataIndex: 'date', key: 'date' , style: { color: 'red' }, },
    { title: 'Month', dataIndex: 'month', key: 'month', style: { color: 'red' },},
    { title: 'Amount', dataIndex: 'amount', key: 'amount', style: { color: 'red' }, },
    // { title: 'Revenue', dataIndex: 'totalRevenue', key: 'totalRevenue', style: { color: 'red' }, },
  ];


 

  const handleShowMonthlyData = async () => {
    try {
      const response = await axios.get(`http://localhost:3004/users/by-month`, {
        headers: {
          username: 'K',
          password: '17',
        },
        params: {
          month: selectedMonth,
        },
      });

      // Add the total revenue for the selected month
      // const totalRevenue = response.data.totalRevenue || 0;
      const dataWithRevenue = response.data.data.map((entry) => ({ ...entry, }));

      setFilteredData(dataWithRevenue);
      setShowTable(true);
    //  setData();
    } catch (error) {
      setError('Unable to fetch data.');
    }
  };

  

  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleShowMonthlyData();
    }
  };

  return (
    <div className="main-container">
      <Sidebar />
      <div className="card-container" style={{ display: 'flex', flexDirection: 'row' }}>

     
      {/* <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input
              type="text"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              placeholder="Enter month (e.g., August)"
              style={{ marginLeft: '20px' }}
            />
            <Button onClick={handleShowMonthlyData} style={{ marginLeft: '10px', alignItems: 'center' }}>
              <FilterOutlined style={{ marginRight: '5px' }} />
              Show Data
            </Button>
            </div>

          {filteredData.length === 0 ? (
            <p>No data available for the selected month.</p>
          ) : (
            <Table dataSource={filteredData} columns={columns} 
            className="tablecontainer" style={{ marginLeft:'20px'}}  pagination={false}   />
          )}
        
        </div> */}
  <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input
              type="text"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              onKeyPress={handleKeyPress} // Add the onKeyPress event listener
              placeholder="Enter month (e.g., August)"
              style={{ marginLeft: '20px' }}
            />
            <Button onClick={handleShowMonthlyData} style={{ marginLeft: '10px', alignItems: 'center' }}>
              <FilterOutlined style={{ marginRight: '5px' }} />
              Show Data
            </Button>
          </div>

          {/* Show the table only when showTable is true */}
          {showTable && (
            <>
              {selectedMonth && filteredData.length === 0 ? (
                <p>No data available for the selected month.</p>
              ) : (
                <Table dataSource={filteredData} columns={columns} className="tablecontainer" style={{ marginLeft: '20px' }} pagination={false} />
              )}
            </>
          )}
        </div>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={6}>
            <Card title="Total Amount" style={{ borderColor: 'purple', width: '200px', marginTop: '20px', 
            marginLeft:'20px' }}>
              {error ? (
                <p>{error}</p>
              ) : totalAmount === null ? (
                <p>Loading...</p>
              ) : (
                <p>Total Amount: {totalAmount}</p>
              )}
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card title="Total Order" style={{ borderColor: 'orange', width: '200px', marginTop: '20px',
            marginLeft:'20px' }}>
              {error ? (
                <p>{error}</p>
              ) : totalUsersCount === null ? (
                <p>Loading...</p>
              ) : (
                <p>Total Orders: {totalUsersCount}</p>
              )}
            </Card>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Card title="Complete " style={{ borderColor: 'green', width: '200px', 
            marginTop: '20px',   marginLeft:'20px' }}>
              {error ? (
                <p>{error}</p>
              ) : completeUsersCount === null ? (
                <p>Loading...</p>
              ) : (
                <p> Completed: {completeUsersCount}</p>
              )}
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card title="Pending " style={{ borderColor: 'blue', width: '200px', marginTop: '20px',
            marginLeft:'20px' }}>
              {error ? (
                <p>{error}</p>
              ) : pendingUsersCount === null ? (
                <p>Loading...</p>
              ) : (
                <p> Pending: {pendingUsersCount}</p>
              )}
            </Card>
          </Col>
        </Row>
     
      <div  style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <LineChart width={800} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="purple"   />
       
        </LineChart>
      </div>

      

    </div>
    </div>
  );
};

export default Rev;


























// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Button, Table } from 'antd';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { EyeOutlined, DollarOutlined } from '@ant-design/icons';
// import '../App.css';
// import Navbar from '../component/Navbar';

// function Rev() {
//   const [revenueData, setRevenueData] = useState(null);
//   const [showMonthlyRevenue, setShowMonthlyRevenue] = useState(false);

//   useEffect(() => {
//     // Fetch data from the API endpoint for monthly data
//     axios.get('http://localhost:3000/revenue')
//       .then((response) => {
//         setRevenueData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const handleToggleMonthlyRevenue = () => {
//     setShowMonthlyRevenue(!showMonthlyRevenue);
//   };

//   const columns = [
//     {
//       title: 'Month',
//       dataIndex: 'month',
//       key: 'month',
//     },
//     {
//       title: 'Total Income',
//       dataIndex: 'income',
//       key: 'income',
//       render: (text) => `$${text}`, // Format the income as currency
//     },
//     {
//       title: 'Total Expenses',
//       dataIndex: 'expenses',
//       key: 'expenses',
//       render: (text) => `$${text}`, // Format the expenses as currency
//     },
//     {
//       title: 'Profit',
//       key: 'profit',
//       render: (record) => `$${record.income - record.expenses}`, // Calculate and format the profit as currency
//     },
//     {
//       title: 'Profit Percentage',
//       key: 'profitPercentage',
//       render: (record) => `${(((record.income - record.expenses) / record.income) * 100).toFixed(2)}%`, // Calculate and format the profit percentage
//     },
//   ];

//   if (!revenueData) {
//     return <p>Loading...</p>;
//   }

//   console.log("dataaa",revenueData.monthlyRevenueData);

//   return (
//     <>
//       <Navbar />
//       <div>
//         {/* Monthly Revenue Data */}
//         <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
//           <Button onClick={handleToggleMonthlyRevenue} className='butn'>
//             {showMonthlyRevenue ? <EyeOutlined /> : <DollarOutlined />}
//             {showMonthlyRevenue ? 'Monthly Revenue' : 'Monthly Revenue'}
//           </Button>
//         </div>
//         {showMonthlyRevenue && (
//           <div>
//             <Table dataSource={revenueData.monthlyRevenueData} columns={columns} />
//           </div>
//         )}

//         {/* Annual Aggregated Data */}
//         <h2 className='h2'>Annual Aggregated Data</h2>
//         <div style={{ display: 'flex', justifyContent: 'space-between', gap: '5px', marginLeft: '20px', flexWrap: 'wrap' }}>
//           {revenueData.totalIncome !== undefined && (
//             <div className='card-hover'>
//               <Card title="Total Income" style={{ width: 200, borderColor: 'red' }}>
//                 ${revenueData.totalIncome}
//               </Card>
//             </div>
//           )}
//           {revenueData.totalExpenses !== undefined && (
//             <div className='card-hover'>
//               <Card title="Total Expenses" style={{ width: 200, borderColor: 'green' }}>
//                 ${revenueData.totalExpenses}
//               </Card>
//             </div>
//           )}
//           {revenueData.totalProfit !== undefined && (
//             <div className='card-hover'>
//               <Card title="Total Profit" style={{ width: 200, borderColor: 'blue' }}>
//                 ${revenueData.totalProfit}
//               </Card>
//             </div>
//           )}
//           {revenueData.totalProfitPercentage !== undefined && (
//             <div className='card-hover'>
//               <Card title="Total Profit Percentage" style={{ width: 200, borderColor: 'violet' }}>
//                 {revenueData.totalProfitPercentage.toFixed(2)}%
//               </Card>
//             </div>
//           )}
//           {revenueData.annualIncome !== undefined && (
//             <div className='card-hover'>
//               <Card title="Annual Income" style={{ width: 200, borderColor: 'orange' }}>
//                 ${revenueData.annualIncome}
//               </Card>
//             </div>
//           )}
//         </div>

//         {/* Month-Only Revenue Data (Line Chart) */}
//         <h2 style={{ textAlign: 'center', color: 'olive' }}>Month-Only Revenue Data (Line Chart)</h2>
//         <div style={{ display: 'flex', justifyContent: 'center' }}>
//           <LineChart width={800} height={300} data={revenueData.monthlyRevenueData}>
//             <XAxis dataKey="month" />
//             <YAxis />
//             <CartesianGrid strokeDasharray="3 3" />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="income" name="Income" stroke="#8884d8" />
//             <Line type="monotone" dataKey="expenses" name="Expenses" stroke="#82ca9d" />
//           </LineChart>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Rev;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card } from 'antd';
// import Sidebar from '../component/Navbar';
// import './r.css';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { Table } from 'antd';

// const TotalRevenueCard = ({ totalRevenue }) => {
//   return (
//     <Card title="Total Revenue" style={{ width: 300 }}>
//       <p>Total Revenue for the Year: ${totalRevenue}</p>
//     </Card>
//   );
// };

// const OrderStatusCard = ({ totalOrders, completedOrders, pendingOrders }) => {
//   return (
//     <Card title="Order Status" style={{ width: 300 }}>
//       <p>Total Orders: {totalOrders}</p>
//       <p>Completed Orders: {completedOrders}</p>
//       <p>Pending Orders: {pendingOrders}</p>
//     </Card>
//   );
// };


// const Rev = () => {
//   const [totalRevenue, setTotalRevenue] = useState(null);
//   const [totalOrders, setTotalOrders] = useState(null);
//   const [completedOrders, setCompletedOrders] = useState(null);
//   const [pendingOrders, setPendingOrders] = useState(null);
//   const [monthlyRevenueData, setMonthlyRevenueData] = useState([]);
//   const [selectedMonth, setSelectedMonth] = useState('');
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/revenue');
//         setTotalRevenue(response.data.totalRevenue);
//         setTotalOrders(response.data.totalOrders);
//         setCompletedOrders(response.data.completedOrders);
//         setPendingOrders(response.data.pendingOrders);
//         setMonthlyRevenueData(response.data.monthlyRevenueData);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleFilter = () => {
//     const filtered = monthlyRevenueData.filter((data) => {
//       return data.month === selectedMonth;
//     });
//     setFilteredData(filtered);
//   };

//   return (
//     <div className="main-container">
//       <Sidebar />
 
// <div className="card-container" style={{ display: 'flex', flexDirection: 'row', }}>

 

//         {totalRevenue !== null && <TotalRevenueCard totalRevenue={totalRevenue} />}
//         {totalOrders !== null && (
//           <Card title="Total Orders" style={{ width: 300 ,  borderColor:'green'}}>
//             <p>Total Orders: {totalOrders}</p>
//           </Card>
//         )}
//         {completedOrders !== null && (
//           <Card title="Completed Orders" style={{ width: 300,  borderColor:'blue' }}>
//             <p>Completed Orders: {completedOrders}</p>
//           </Card>
//         )}
//         {pendingOrders !== null && (
//           <Card title="Pending Orders" style={{ width: 300,  borderColor:'orange' }}>
//             <p>Pending Orders: {pendingOrders}</p>
//           </Card>
//         )}
     

    
//      {monthlyRevenueData.length > 0 && (
//         <div className="chart-container" style={{ marginTop: '50px' }}>
//           <p style={{font:'20', color:'rgb(228, 102, 102)'}}>Monthly Revune</p>
//           <LineChart width={800} height={350} data={monthlyRevenueData}>
//             <XAxis dataKey="month" />
//             <YAxis />
//             <CartesianGrid strokeDasharray="3 3" />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="income" name="Income" stroke="#8884d8" activeDot={{ r: 8 }} />
//             <Line type="monotone" dataKey="expenses" name="Expenses" stroke="#82ca9d" activeDot={{ r: 8 }} />
//           </LineChart>
//         </div>
//       )}



    
//     <>
//       <div className="filter-container" style={{ marginTop: '30px' }}>
//         <input
//           type="text"
//           placeholder="Enter month (e.g., January 2023)"
//           value={selectedMonth}
//           onChange={(e) => setSelectedMonth(e.target.value)}
//         />
//         <button onClick={handleFilter}>Filter</button>
//       </div>

//       {filteredData.length > 0 && (
//         <div className="filtered-data-container" style={{ marginTop: '30px' }}>
//           <Table
//             dataSource={[filteredData[0]]}
//             columns={[
//               { title: 'Income', dataIndex: 'income', key: 'income' },
//               { title: 'Expenses', dataIndex: 'expenses', key: 'expenses' },
//               { title: 'Profit', dataIndex: 'profit', key: 'profit', render: (_, record) => record.income - record.expenses },
//               { title: 'Annual Income', dataIndex: 'annualIncome', key: 'annualIncome', render: (_, record) => record.income * 12 },
//               { title: 'Total Revenue', dataIndex: 'totalRevenue', key: 'totalRevenue', render: (_, record) => totalRevenue },
//             ]}
//             pagination={false}
//           />
//         </div>
//       )}
// </>

//     </div>



//      </div>
     
    
//   );
// };

// export default Rev;










// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Card } from 'antd';
// import Sidebar from '../component/Navbar';
// import './r.css';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { Table } from 'antd';
// import { FilterOutlined } from '@ant-design/icons';



// import { Link} from 'react-router-dom';

// const TotalRevenueCard = ({ totalRevenue }) => {
  
//   return (
//     <Link to="/revenue" style={{color:'white'}}>
//     <Card title="Total Revenue" style={{ width: 300 }}>
//       <p>Total Revenue for the Year: ${totalRevenue}</p>
//     </Card>
//     </Link>
//   );
// };



// const Rev = () => {
//   const [totalRevenue, setTotalRevenue] = useState(null);
//   const [totalOrders, setTotalOrders] = useState(null);
//   const [completedOrders, setCompletedOrders] = useState(null);
//   const [pendingOrders, setPendingOrders] = useState(null);
//   const [monthlyRevenueData, setMonthlyRevenueData] = useState([]);
//   const [selectedMonth, setSelectedMonth] = useState('');
//   const [filteredData, setFilteredData] = useState([]);
//   // const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/revenue');
//         setTotalRevenue(response.data.totalRevenue);
//         setTotalOrders(response.data.totalOrders);
//         setCompletedOrders(response.data.completedOrders);
//         setPendingOrders(response.data.pendingOrders);
//         setMonthlyRevenueData(response.data.monthlyRevenueData);
       
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleFilter = () => {
//     const filtered = monthlyRevenueData.filter((data) => {
//       return data.month === selectedMonth;
//     });
//     setFilteredData(filtered);
//   };

//   return (
//     <>
//       <div className="main-container">
//       <Sidebar />
      

       

//         <div className="card-container" style={{ display: 'flex', flexDirection: 'row' }}>
//           {totalRevenue !== null && <TotalRevenueCard totalRevenue={totalRevenue} />}
//           {totalOrders !== null && (
//             <Card title="Total Orders" style={{ width: 300, borderColor: 'green' }}>
//               <p>Total Orders: {totalOrders}</p>
//             </Card>
//           )}
//           {completedOrders !== null && (
//             <Card title="Completed Orders" style={{ width: 300, borderColor: 'blue'  }}>
//               <p>Completed Orders: {completedOrders}</p>
//             </Card>
//           )}
//           {pendingOrders !== null && (
//             <Card title="Pending Orders" style={{ width: 300, borderColor: 'orange' }}>
//               <p>Pending Orders: {pendingOrders}</p>
//             </Card>
//           )}
       

//         {monthlyRevenueData.length > 0 && (
//           <div className="chart-container" style={{ marginTop: '50px' }}>
//             <p style={{ font: '20', color: 'rgb(228, 102, 102)' }}>Monthly Revenue</p>
//             <LineChart width={800} height={350} data={monthlyRevenueData}>
//               <XAxis dataKey="month" />
//               <YAxis />
//               <CartesianGrid strokeDasharray="3 3" />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="income" name="Income" stroke="#8884d8" activeDot={{ r: 8 }} />
//               <Line type="monotone" dataKey="expenses" name="Expenses" stroke="#82ca9d" activeDot={{ r: 8 }} />
//             </LineChart>
//           </div>
//         )}

//           <div
//           className="filter-container"
//           style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '40px', marginLeft: '30px' }}
//         >
//           <input
//             type="text"
//             placeholder="Enter month "
//             value={selectedMonth}
//             onChange={(e) => setSelectedMonth(e.target.value)}
//           />
//           <Button
//             onClick={handleFilter}
//             style={{ marginLeft: '10px', color: 'black', width: '40px' }}
//             className="filter"
//           >
//             <FilterOutlined style={{ marginLeft: '-3px' }} />
         
//           </Button>
//         </div>

//         {filteredData.length > 0 && (
//           <div className="filtered-data-container" style={{ marginTop: '30px', 
//           marginRight:"60px" }}>
//             <Table
//               dataSource={[filteredData[0]]}
//               columns={[
//                 { title: 'Income', dataIndex: 'income', key: 'income' },
//                 { title: 'Expenses', dataIndex: 'expenses', key: 'expenses' },
//                 {
//                   title: 'Profit',
//                   dataIndex: 'profit',
//                   key: 'profit',
//                   render: (_, record) => record.income - record.expenses,
//                 },
//                 {
//                   title: 'Annual Income',
//                   dataIndex: 'annualIncome',
//                   key: 'annualIncome',
//                   render: (_, record) => record.income * 12,
//                 },
//                 { title: 'Total Revenue', dataIndex: 'totalRevenue', key: 'totalRevenue', render: (_, record) => totalRevenue },
//               ]}
//               pagination={false}
//             />
//           </div>
//         )}
//       </div>
//       </div>
//     </>
//   );
// };

// export default Rev;












