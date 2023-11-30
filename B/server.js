


// const express = require('express');
// const session = require('express-session');
// const { PrismaClient } = require('@prisma/client');
// const userRoutes = require('./Route/route');
// const cors = require('cors');

// const prisma = new PrismaClient();
// const app = express();

// app.use(express.json());
// app.use(session({
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: false,
// }));
// app.use(cors());

// // Authentication middleware
// const authenticateAdmin = (req, res, next) => {
//   if (req.session && req.session.admin) {
//     // User is authenticated as admin
//     next();
//   } else {
//     res.status(401).json({ message: 'Authentication failed. Please log in as admin.' });
//   }
// };



// // Login endpoint
// app.post('/admin/login', async (req, res) => {
//   const { username, password } = req.body;

//   // Check if the username and password match the admin credentials
//   if (username === 'K' && password === '17') {
//     // Set the session to authenticate the admin
//     req.session.admin = true;

//     // Retrieve the previously entered data
//     const users = await prisma.user.findMany();

//     res.json({ message: 'Admin logged in successfully.', users }); // Include the users data in the response
//   } else {
//     res.status(401).json({ message: 'Invalid admin credentials.' });
//   }
// });



// // Use user routes
// app.use('/admin', authenticateAdmin, userRoutes);

// // Logout endpoint
// app.post('/admin/logout', authenticateAdmin, (req, res) => {
//   // Clear the admin session to log out
//   req.session.destroy();
//   res.json({ message: 'Admin logged out successfully.' });
// });

// app.get('/revenue', (req, res) => {
//   const income = 3000; // Total income for the day
//   const expenses = 600; // Total expenses for the day

//   // Calculate the profit
//   const profit = income - expenses;

//   // Calculate the profit percentage
//   const profitPercentage = (profit / income) * 100;

//   const response = {
//     income,
//     expenses,
//     profit,
//     profitPercentage: profitPercentage.toFixed(2)
//   };

//   res.json(response);
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });


// const express = require('express');
// const session = require('express-session');
// const { PrismaClient } = require('@prisma/client');
// const userRoutes = require('./Route/route');
// const cors = require('cors');
// const { v4: uuidv4 } = require('uuid'); // Import the UUID library

// const prisma = new PrismaClient();
// const app = express();

// app.use(express.json());
// app.use(session({
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: false,
// }));
// app.use(cors());

// // Authentication middleware
// const authenticateAdmin = (req, res, next) => {
//   if (req.session && req.session.admin) {
//     // User is authenticated as admin
//     next();
//   } else {
//     res.status(401).json({ message: 'Authentication failed. Please log in as admin.' });
//   }
// };

// // Generate a session token
// const generateSessionToken = () => {
//   return uuidv4(); // Generate a UUID as the session token
// };

// // Login endpoint
// // app.post('/admin/login', async (req, res) => {
// //   const { username, password } = req.body;

// //   // Check if the username and password match the admin credentials
// //   if (username === 'K' && password === '17') {
// //     // Set the session to authenticate the admin
// //     req.session.admin = true;

// //     // Retrieve the previously entered data
// //     const users = await prisma.user.findMany();

// //     res.json({ message: 'Admin logged in successfully.', users }); // Include the users data in the response
// //   } else {
// //     res.status(401).json({ message: 'Invalid admin credentials.' });
// //   }
// // });
// app.post('/admin/login', async (req, res) => {
//   const { username, password } = req.body;

//   // Check if the username and password match the admin credentials
//   if (username === 'K' && password === '17') {
//     // Generate a session token
//     const sessionToken = generateSessionToken();

//     // Store the session token in the session
//     req.session.sessionToken = sessionToken;

//     // Retrieve the previously entered data
//     const users = await prisma.user.findMany();

//     res.json({ message: 'Admin logged in successfully.', sessionToken, users });
//   } else {
//     res.status(401).json({ message: 'Invalid admin credentials.' });
//   }
// });










// // Use user routes
// app.use('/admin', authenticateAdmin, userRoutes);

// // Logout endpoint
// app.post('/admin/logout', authenticateAdmin, (req, res) => {
//   // Clear the admin session to log out
//   req.session.destroy();
//   res.json({ message: 'Admin logged out successfully.' });
// });

// app.get('/revenue', (req, res) => {
//   const income = 3000; // Total income for the day
//   const expenses = 600; // Total expenses for the day

//   // Calculate the profit
//   const profit = income - expenses;

//   // Calculate the profit percentage
//   const profitPercentage = (profit / income) * 100;

//   const response = {
//     income,
//     expenses,
//     profit,
//     profitPercentage: profitPercentage.toFixed(2)
//   };

//   res.json(response);
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });



// const express = require('express');
// const session = require('express-session');
// const { PrismaClient } = require('@prisma/client');
// const userRoutes = require('./Route/route');
// const cors = require('cors');
// const { v4: uuidv4 } = require('uuid');

// const prisma = new PrismaClient();
// const app = express();

// app.use(express.json());
// app.use(session({
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: false,
// }));
// app.use(cors());

// // Authentication middleware
// const authenticateAdmin = (req, res, next) => {
//   if (req.session && req.session.admin) {
//     // User is authenticated as admin
//     next();
//   } else {
//     res.status(401).json({ message: 'Authentication failed. Please log in as admin.' });
//   }
// };

// // Generate a session token
// const generateSessionToken = () => {
//   return uuidv4();
// };

// // Login endpoint
// app.post('/admin/login', async (req, res) => {
//   const { username, password } = req.body;

//   // Check if the username and password match the admin credentials
//   if (username === 'K' && password === '17') {
//     // Generate a session token
//     const sessionToken = generateSessionToken();

//     // Store the session token in the session
//     req.session.sessionToken = sessionToken;
//     req.session.admin = true;

//     // Retrieve the previously entered data from the database
//     const users = await prisma.user.findMany();

//     res.json({ message: 'Admin logged in successfully.', sessionToken, users });
//   } else {
//     res.status(401).json({ message: 'Invalid admin credentials.' });
//   }
// });

// // Logout endpoint
// app.post('/admin/logout', authenticateAdmin, (req, res) => {
//   // Clear the admin session to log out
//   req.session.destroy((err) => {
//     if (err) {
//       console.error('Error destroying session:', err);
//     }
//   });

//   res.json({ message: 'Admin logged out successfully.' });
// });

// // Use user routes
// app.use('/admin', authenticateAdmin, userRoutes);



// app.get('/revenue', (req, res) => {
//   const income = 2000; // Total income for the day
//   const expenses = 600; // Total expenses for the day

//   // Calculate the profit
//   const profit = income - expenses;

//   // Calculate the profit percentage
//   const profitPercentage = (profit / income) * 100;

//   const response = {
//     income,
//     expenses,
//     profit,
//     profitPercentage: profitPercentage.toFixed(2)
//   };

//   res.json(response);
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });































// // // Import the Express module
// const express = require('express');

// // Create an instance of Express
// const app = express();

// // Define a route
// app.get('/', (req, res) => {
//   res.send('Hello, Express!');
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });




// const express = require('express');
// const session = require('express-session');
// const { PrismaClient } = require('@prisma/client');
// const cors = require('cors');
// const { v4: uuidv4 } = require('uuid');

// const prisma = new PrismaClient();
// const app = express();

// app.use(express.json());
// app.use(session({
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: false,
// }));
// app.use(cors());

// // Authentication middleware
// const authenticateAdmin = (req, res, next) => {
//   if (req.session && req.session.admin) {
//     // User is authenticated as admin
//     next();
//   } else {
//     res.status(401).json({ message: 'Authentication failed. Please log in as admin.' });
//   }
// };

// // Generate a session token
// const generateSessionToken = () => {
//   return uuidv4();
// };

// // Login endpoint
// app.post('/admin/login', async (req, res) => {
//   const { username, password } = req.body;

//   // Check if the username and password match the admin credentials
//   if (username === 'K' && password === '17') {
//     // Generate a session token
//     const sessionToken = generateSessionToken();

//     // Store the session token in the session
//     req.session.sessionToken = sessionToken;
//     req.session.admin = true;

//     // Retrieve the previously entered data from the database
//     const users = await prisma.user.findMany();

//     res.json({ message: 'Admin logged in successfully.', sessionToken, users });
//   } else {
//     res.status(401).json({ message: 'Invalid admin credentials.' });
//   }
// });

// // Logout endpoint
// app.post('/admin/logout', authenticateAdmin, (req, res) => {
//   // Clear the admin session to log out
//   req.session.destroy((err) => {
//     if (err) {
//       console.error('Error destroying session:', err);
//     }
//   });

//   res.json({ message: 'Admin logged out successfully.' });
// });





// // POST: Create a new entry
// app.post('/admin/users', authenticateAdmin, async (req, res) => {
//   const sessionToken = req.headers['x-session-token'];
//   console.log('Received Session Token:', sessionToken);
//   const { name, date, contact, endDate, amount } = req.body;

//   try {
//     // Create a new entry in the database
//     const User = await prisma.user.create({
//       data: {
//         name,
//         date,
//         contact,
//         endDate,
//         amount,
//       },
//     });

//     res.json({ message: 'New entry created successfully.', entry: User });
//   } catch (error) {
//     console.error('Error creating entry:', error);
//     res.status(500).json({ message: 'Failed to create new entry.' });
//   }
// });

// // GET: Read all entries
// app.get('/admin/users', authenticateAdmin, async (req, res) => {
//   try {
//     // Retrieve all entries from the database
//     const User = await prisma.user.findMany();

//     res.json({ User });
//   } catch (error) {
//     console.error('Error retrieving entries:', error);
//     res.status(500).json({ message: 'Failed to retrieve entries.' });
//   }
// });

// // PUT: Update an existing entry by ID
// app.put('/admin/users/:id', authenticateAdmin, async (req, res) => {
//   const userId = parseInt(req.params.id);
//   const { name, date, contact, endOfDate, amount } = req.body;

//   try {
//     // Update the entry in the database
//     const User = await prisma.user.update({
//       where: { id: userId },
//       data: {
//         name,
//         date,
//         contact,
//         endOfDate,
//         amount,
//       },
//     });

//     res.json({ message: 'Entry updated successfully.', entry: User });
//   } catch (error) {
//     console.error('Error updating entry:', error);
//     res.status(500).json({ message: 'Failed to update entry.' });
//   }
// });

// // DELETE: Delete an entry by ID
// app.delete('/admin/users/:id', authenticateAdmin, async (req, res) => {
//   const userId = parseInt(req.params.id);

//   try {
//     // Delete the entry from the database
//     await prisma.user.delete({
//       where: { id: userId },
//     });

//     res.json({ message: 'Entry deleted successfully.' });
//   } catch (error) {
//     console.error('Error deleting entry:', error);
//     res.status(500).json({ message: 'Failed to delete entry.' });
//   }
// });

// // GET: Revenue endpoint
// app.get('/revenue', (req, res) => {
//   const income = 3000; // Total income for the day
//   const expenses = 600; // Total expenses for the day

//   // Calculate the profit
//   const profit = income - expenses;

//   // Calculate the profit percentage
//   const profitPercentage = (profit / income) * 100;

//   const response = {
//     income,
//     expenses,
//     profit,
//     profitPercentage: profitPercentage.toFixed(2)
//   };

//   res.json(response);
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });








const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cors = require('cors');
const app = express();
const PORT = 3004;

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


// app.get('/revenue', (req, res) => {
//   const income = 3000; // Total income for the day
//   const expenses = 600; // Total expenses for the day

//   // Calculate the profit
//   const profit = income - expenses;

//   // Calculate the profit percentage
//   const profitPercentage = (profit / income) * 100;

//   const response = {
//     income,
//     expenses,
//     profit,
//     profitPercentage: profitPercentage.toFixed(2)
//   };

//   res.json(response);
// });



const monthlyRevenueData = [
  { month: 'January', income: 3000, expenses: 600 },
  { month: 'February', income: 3000, expenses: 800 },
  { month: 'March', income: 3000, expenses: 500 },
  { month: 'April', income: 3000, expenses: 800 },
  { month: 'May', income: 3000, expenses: 800 },
  { month: 'June', income: 3000, expenses: 700 },
  { month: 'July', income: 3000, expenses: 800 },
  { month: 'August', income: 3000, expenses: 200 },
  { month: 'September', income: 3000, expenses: 800 },
  { month: 'October', income: 3000, expenses: 300 },
  { month: 'November', income: 3000, expenses: 8500 },
  { month: 'December', income: 3000, expenses: 900 },
  // Add more months' data here...
];


const calculateAnnualData = () => {
  const annualData = {
    totalIncome: 0,
    totalExpenses: 0,
    totalProfit: 0,
    totalProfitPercentage: 0,
    annualIncome: 0,
    totalRevenue: 0, // Initialize total revenue
  };

  for (const data of monthlyRevenueData) {
    annualData.totalIncome += data.income;
    annualData.totalExpenses += data.expenses;
  }

  annualData.totalProfit = annualData.totalIncome - annualData.totalExpenses;
  annualData.totalProfitPercentage = (annualData.totalProfit / annualData.totalIncome) * 100;
  annualData.annualIncome = annualData.totalIncome * 12;
  annualData.totalRevenue = annualData.totalProfit * 12; // Calculate total revenue

  return annualData;
};


const calculateDailyData = () => {
  const income = 3000; // Total income for the day
  const expenses = 600; // Total expenses for the day

  // Calculate the profit
  const profit = income - expenses;

  // Calculate the profit percentage
  const profitPercentage = (profit / income) * 100;

  return {
    income,
    expenses,
    profit,
    profitPercentage: profitPercentage.toFixed(2),
    
  };
};

// app.get('/revenue', (req, res) => {
//   const { daily } = req.query;

//   if (daily === 'true') {
//     const dailyData = calculateDailyData();
//     res.json(dailyData);
//   } else {
//     const annualData = calculateAnnualData();
//     res.json({ monthlyRevenueData, ...annualData });
//   }
// });

// Import the necessary modules

// ... Your existing code ...

// Sample data for the total orders, completed orders, and pending orders
const totalOrders = 20;
const completedOrders = 10;
const pendingOrders = totalOrders - completedOrders;

app.get('/revenue', (req, res) => {
  const { daily } = req.query;

  if (daily === 'true') {
    const dailyData = calculateDailyData();
    res.json(dailyData);
  } else {
    const annualData = calculateAnnualData();
    res.json({ monthlyRevenueData, ...annualData, totalOrders, completedOrders, pendingOrders });
  }
});







const revenueData = [];

// POST: Revenue endpoint
app.post('/revenue', (req, res) => {
  const { income, expenses } = req.body;

  // Convert income to a number
  const incomeNumber = parseFloat(income);

  // Calculate the profit
  const profit = incomeNumber - expenses.reduce((total, expense) => total + parseFloat(expense), 0);

  // Calculate the profit percentage
  const profitPercentage = ((profit / incomeNumber) * 100).toFixed(2);

  // Calculate annual income
  const annualIncome = incomeNumber * 12;

  // Calculate total annual expenses
  const totalExpenses = expenses.reduce((total, expense) => total + parseFloat(expense), 0) * 12;

  // Calculate total revenue for the year
  const totalRevenue = profit * 12;

  const revenueEntry = {
    income: incomeNumber,
    expenses,
    profit,
    profitPercentage,
    annualIncome,
    totalExpenses,
    totalRevenue,
  };

  // Add the revenue entry to the in-memory data
  revenueData.push(revenueEntry);

  res.json(revenueEntry);
});













const adminCredentials = {
  username: 'K',
  password: '17', // Replace with an actual secure password
};

// Middleware to check admin authentication
const authenticateAdmin = (req, res, next) => {
  const { username, password } = req.headers;

  if (username === adminCredentials.username && password === adminCredentials.password) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized. Admin credentials required.' });
  }
};
// ...

// Login the admin
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the provided credentials are valid
  if (username === 'K' && password === '17') {
    // Set the admin's authentication credentials
    adminCredentials.username = username;
    adminCredentials.password = password;
    res.json({ message: 'Admin logged in successfully.' });
  } else {
    res.status(401).json({ error: 'Invalid credentials. Please try again.' });
  }
});

// Logout the admin
app.post('/logout', (req, res) => {
  // Clear the admin's authentication credentials
  adminCredentials.username = null;
  adminCredentials.password = null;
  res.json({ message: 'Admin logged out successfully.' });
});

// ...

  


// app.post('/users', authenticateAdmin, async (req, res) => {
//   const { name, contact, endDate, amount, date, status } = req.body;
//   try {
//     const newUser = await prisma.user.create({
//       data: {
//         name,
//         contact,
//         endDate: new Date(endDate),
//         amount,
//         date: new Date(date),
//         status, // Include the status field in the data object
//       },
//     });
//     res.json({ user: newUser, message: 'User created successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Unable to create user.' });
//   }
// // });
// app.post('/users', authenticateAdmin, async (req, res) => {
//   const { name, contact, endDate, amount, date } = req.body;
//   const status = req.body.status === 'complete' ? 'complete' : 'pending'; // Default to 'pending' if not 'complete'
//   try {
//     const newUser = await prisma.user.create({
//       data: {
//         name,
//         contact,
//         endDate: new Date(endDate),
//         amount,
//         date: new Date(date),
//         status,
//       },
//     });
//     res.json({ user: newUser, message: 'User created successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Unable to create user.' });
//   }
// });


// app.post('/users', authenticateAdmin, async (req, res) => {
//   const { name, contact, endDate, amount, date } = req.body;
//   const status = req.body.status === 'complete' ? 'complete' : 'pending'; // Default to 'pending' if not 'complete'
  
//   // Check if the contact exceeds 10 characters
//   if (contact.length > 10) {
//     return res.status(400).json({ error: 'Contact should be exactly 10 characters.' });
//   }

//   try {
//     const newUser = await prisma.user.create({
//       data: {
//         name,
//         contact,
//         endDate: new Date(endDate),
//         amount,
//         date: new Date(date),
//         status,
//       },
//     });
//     res.json({ user: newUser, message: 'User created successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Unable to create user.' });
//   }
// });



app.post('/users', authenticateAdmin, async (req, res) => {
  const { name, contact, endDate, amount, date } = req.body;
  const status = req.body.status === 'complete' ? 'complete' : 'pending'; // Default to 'pending' if not 'complete'
  
  // Check if the contact exceeds 10 characters
  if (contact.length > 10) {
    return res.status(400).json({ error: 'Contact should be exactly 10 characters.' });
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        contact,
        endDate: new Date(endDate),
        amount,
        date: new Date(date),
        status,
      },
    });

    // Format the dates to exclude the time component
    const formattedEndDate = newUser.endDate.toISOString().split('T')[0];
    const formattedDate = newUser.date.toISOString().split('T')[0];

    // Create a new user object with formatted dates
    const formattedUser = {
      ...newUser,
      endDate: formattedEndDate,
      date: formattedDate,
    };

    res.json({ user: formattedUser, message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to create user.' });
  }
});





app.get('/users/status/complete', authenticateAdmin, async (req, res) => {
  try {
    const completeUsersCount = await prisma.user.count({ where: { status: 'complete' } });
    res.json({ count: completeUsersCount });
    console.log('Complete', completeUsersCount);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch complete users count.' });
  }
});

app.get('/users/status/pending', authenticateAdmin, async (req, res) => {
  try {
    const pendingUsersCount = await prisma.user.count({ where: { status: 'pending' } });
    res.json({ count: pendingUsersCount });
    console.log('pending', pendingUsersCount)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch pending users count.' });
  }
});


app.get('/users/total', authenticateAdmin, async (req, res) => {
  try {
    const totalUsersCount = await prisma.user.count();
    res.json({ count: totalUsersCount });
    console.log(totalUsersCount,'total users');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch total users count.' });
  }
});



// app.get('/users/total-amount', authenticateAdmin, async (req, res) => {
//   try {
//     // Use the prisma.user model to calculate the sum of the 'amount' field
//     const totalAmount = await prisma.user.aggregate({
//       _sum: { amount: true },
//     });

//     // The 'totalAmount' object will contain the sum of the 'amount' field
//     // You can access it using 'totalAmount._sum.amount'
//     res.json({ totalAmount: totalAmount._sum.amount || 0 }); // If there are no users, return 0 as the total amount
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Unable to fetch total amount.' });
//   }
// });

app.get('/users/total-amount', authenticateAdmin, async (req, res) => {
  try {
    // Use the prisma.user model to calculate the sum of the 'amount' field for completed users
    const totalAmount = await prisma.user.aggregate({
      _sum: { amount: true },
      where: { status: 'complete' }, // Filter users with status 'complete'
    });

    // The 'totalAmount' object will contain the sum of the 'amount' field for completed users
    // You can access it using 'totalAmount._sum.amount'
    res.json({ totalAmount: totalAmount._sum.amount || 0 }); 
    console.log(totalAmount);// If there are no completed users, return 0 as the total amount
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch total amount.' });
  }
});





// app.get('/users/by-month', authenticateAdmin, async (req, res) => {
//   try {
//     const usersByMonth = await prisma.user.groupBy({
//       by: ['date'],
//       _sum: { amount: true },
//     });

//     // Calculate the total revenue
//     let totalRevenue = 0;

//     usersByMonth.forEach((entry) => {
//       totalRevenue += entry._sum.amount || 0;
//     });

//     // Format the response to have date, month name, amount, and total revenue as separate properties
//     const formattedData = usersByMonth.map((entry) => {
//       const date = new Date(entry.date);
//       const monthName = date.toLocaleString('default', { month: 'long' });

//       return {
//         date: entry.date.toISOString().split('T')[0],
//         month: monthName,
//         amount: entry._sum.amount || 0, // Default to 0 if amount is not available for a month
//       };
//     });

//     // Include the total revenue in the response
//     const responseData = {
//       totalRevenue,
//       data: formattedData,
//     };

//     res.json(responseData);
//     console.log('Users by Month:', responseData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Unable to fetch users by month.' });
//   }
// });


app.get('/users/by-month', authenticateAdmin, async (req, res) => {
  try {
    const { month } = req.query;

    // Get the users grouped by month
    const usersByMonth = await prisma.user.groupBy({
      by: ['date'],
      _sum: { amount: true },
    });

    // Calculate the total revenue
    let totalRevenue = 0;

    usersByMonth.forEach((entry) => {
      totalRevenue += entry._sum.amount || 0;
    });

    // Format the response to have date, month name, amount, and total revenue as separate properties
    const formattedData = usersByMonth.map((entry) => {
      const date = new Date(entry.date);
      const monthName = date.toLocaleString('default', { month: 'long' });

      return {
        date: entry.date.toISOString().split('T')[0],
        month: monthName,
        amount: entry._sum.amount || 0, // Default to 0 if amount is not available for a month
      };
    });

    // Filter data for the specified month if provided
    let filteredData = formattedData;
    if (month) {
      filteredData = formattedData.filter((entry) => entry.month === month);
    }

    // Include the total revenue in the response
    const responseData = {
      totalRevenue,
      data: filteredData,
    };

    res.json(responseData);
   
    console.log('Users by Month:', responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch users by month.' });
  }
});



// Import the date-fns library to work with 






// Get all users
app.get('/users', authenticateAdmin, async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
    // console.log('users', users)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch users.' });
  }
});

// Get a single user by ID
app.get('/users/:id', authenticateAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    if (user) {
      res.json(user);

      // console.log('users',user)
    } else {
      res.status(404).json({ error: 'User not found.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch user.' });
  }
});


// Search user by ID
app.get('/users/:id', authenticateAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch user.' });
  }
});

// Search users by name letter
app.get('/users/search/:name', authenticateAdmin, async (req, res) => {
  const { name } = req.params;
  try {
    const users = await prisma.user.findMany({
      where: { name: { contains: name } },
    });
    if (users.length > 0) {
      res.json(users);
    } else {
      res.status(404).json({ error: 'Users not found.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch users.' });
  }
});







// app.put('/users/:id', authenticateAdmin, async (req, res) => {
//   const { id } = req.params;
//   const { name, contact, endDate, amount, date, status } = req.body;
//   try {
//     // Check if the user with the given id exists
//     const existingUser = await prisma.user.findUnique({ where: { id: parseInt(id) } });
//     if (!existingUser) {
//       // If the user with the specified id is not found, return an error response
//       return res.status(404).json({ error: 'User not found.' });
//     }

//     // Update the user if it exists
//     const updatedUser = await prisma.user.update({
//       where: { id: parseInt(id) },
    
//       data: {
//         name,
//         contact,
//         endDate: new Date(endDate),
//         amount,
//         date: new Date(date),
//         status, // Add the status field to the update operation
//       },
//     });

//     res.json(updatedUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Unable to update user.' });
//   }
// });

// app.put('/users/:id', authenticateAdmin, async (req, res) => {
//   const { id } = req.params;
//   const { name, contact, endDate, amount, date, status } = req.body;
  
//   try {
//     // Check if the user with the given id exists
//     const existingUser = await prisma.user.findUnique({ where: { id: parseInt(id) } });
//     if (!existingUser) {
//       // If the user with the specified id is not found, return an error response
//       return res.status(404).json({ error: 'User not found.' });
//     }

//     // Update the user if it exists
//     const updatedUser = await prisma.user.update({
//       where: { id: parseInt(id) },
//       data: {
//         name,
//         contact,
//         endDate: new Date(endDate),
//         amount,
//         date: new Date(date),
//         status: status === 'complete' ? 'complete' : 'pending', // Update the status field
//       },
//     });

//     res.json(updatedUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Unable to update user.' });
//   }
// });





// 


app.put('/users/:id/details', authenticateAdmin, async (req, res) => {
  const { id } = req.params;
  const { name, contact, endDate, amount, date } = req.body;
  try {
    // Check if the user with the given id exists
    const existingUser = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    if (!existingUser) {
      // If the user with the specified id is not found, return an error response
      return res.status(404).json({ error: 'User not found.' });
    }

    // Update the user if it exists
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        name,
        contact,
        endDate: new Date(endDate),
        amount,
        date: new Date(date),
      },
    });

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to update user details.' });
  }
});



app.put('/users/:id/status', authenticateAdmin, async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    // Check if the user with the given id exists
    const existingUser = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    if (!existingUser) {
      // If the user with the specified id is not found, return an error response
      return res.status(404).json({ error: 'User not found.' });
    }

    // Update the status of the user if it exists
    await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        status: status === 'complete' ? 'complete' : 'pending',
      },
    });

    res.json({ message: 'User status updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to update user status.' });
  }
});






// Delete a user by ID
app.delete('/users/:id', authenticateAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'User deleted successfully.' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to delete user.' });
  }
});






app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
