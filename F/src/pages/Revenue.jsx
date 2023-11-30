

import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message, Table, Card } from 'antd';
import axios from 'axios';
import Sidebar from '../component/Navbar';
// import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Revenue = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [revenueData, setRevenueData] = useState([]);
  // const navigate = useNavigate();
  const [income, setIncome] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3004/revenue', values);
      console.log('Revenue data:', response.data);
      setRevenueData([response.data]); // Store the response data in the revenueData state
      setIncome('');
      setSubmitClicked(true);
      message.success('Revenue data submitted successfully');
    } catch (error) {
      console.error('Error:', error);
      message.error('Failed to submit revenue data');
    }
    setLoading(false);
  };

  // Define columns for the table
  const columns = [
    {
      title: 'Income',
      dataIndex: 'income',
      key: 'income',
    },
   
    {
      title: 'Profit',
      dataIndex: 'profit',
      key: 'profit',
    },

    {
      title: 'Profit Percentage',
      dataIndex: 'profitPercentage',
      key: 'profitPercentage',
    },
    {
      title: 'Annual Income',
      dataIndex: 'annualIncome',
      key: 'annualIncome',
    },
    {
      title: 'Total Expenses',
      dataIndex: 'totalExpenses',
      key: 'totalExpenses',
    },
    {
      title: 'Total Revenue',
      dataIndex: 'totalRevenue',
      key: 'totalRevenue',
    },
    // Add more columns as needed
  ];
  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate('/'); // Redirect to the home page if the user is not logged in
  //   }
  // }, [isLoggedIn, navigate]);
  useEffect(() => {
    form.resetFields(); // Reset the form fields when revenueData is updated
  }, [revenueData, form])


  const chartData = [
    { name: 'Income', income: revenueData[0]?.income || 0 },
    { name: 'Profit', profit: revenueData[0]?.profit || 0 },
    { name: 'Profit Percentage', profitPercentage: revenueData[0]?.profitPercentage || 0 },
    { name: 'Annual Income', annualIncome: revenueData[0]?.annualIncome || 0 },
    // { name: 'Total Expenses', totalExpenses: revenueData[0]?.totalExpenses || 0 },
    { name: 'Total Revenue', totalRevenue: revenueData[0]?.totalRevenue || 0 },
  ];

  let sortedChartData = chartData.slice(); // Create a copy of the chartData array
  sortedChartData.sort((a, b) => {
    return a.name.localeCompare(b.name); // Sort by the 'name' property in ascending order
  });


  return (
    <div className="main-container">
      <Sidebar />
      <div className="table-container">
        <Card title="Revenue Data" style={{ padding: '20px',   margin:  "auto" ,
        marginTop:'30px',}}>
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            {/* <Form.Item label="Income" name="income" rules={[{ required: true, message: 'Please enter income' }]}>
              <Input type="number" />
            </Form.Item> */}
            <Form.Item label="Income" name="income" rules={[{ required: true, message: 'Please enter income' }]}>
      <Input type="number" value={income} onChange={(e) => setIncome(e.target.value)} />
    </Form.Item>
            <Form.List name="expenses">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item label={index === 0 ? 'Expenses' : ''} required={false} key={field.key}>
                      <Form.Item
                        {...field}
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[{ required: true, message: 'Please enter an expense' }]}
                      >
                        <Input type="number" placeholder="Enter an expense" />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <Button type="danger" onClick={() => remove(field.name)} style={{ marginLeft: 8 }}>
                          Remove
                        </Button>
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block>
                      Add Expense
                    </Button>
                    
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Form.Item>
              <Button  htmlType="submit" style={{color:'black'}} loading={loading}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>


 {/* Display the table with revenue data */}
 {revenueData.length > 0 && (
        <Table dataSource={revenueData} columns={columns} rowKey={(record) => record._id} style={{ marginTop: '50px' }} />
      )}


   {/* Display the line chart only when submit button is clicked and data is available */}
   {submitClicked && revenueData.length > 0 && (
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
          <LineChart width={800} height={300} data={sortedChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="income" stroke="#8884d8" name="Income" />
            <Line type="monotone" dataKey="profit" stroke="#82ca9d" name="Profit" />
            <Line type="monotone" dataKey="profitPercentage" stroke="#ffc658" name="Profit Percentage" />
            <Line type="monotone" dataKey="annualIncome" stroke="#e57373" name="Annual Income" />
            <Line type="monotone" dataKey="totalExpenses" stroke="#795548" name="Total Expenses" />
            <Line type="monotone" dataKey="totalRevenue" stroke="#009688" name="Total Revenue" />
          </LineChart>
        </div>
      )}
    </div>

      </div>
  
  );
};

export default Revenue;



