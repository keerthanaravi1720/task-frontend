






// const express = require('express');
// const router = express.Router();
// const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('../controller/Controller');

// // Authentication middleware
// const authenticateAdmin = (req, res, next) => {
//   if (req.session && req.session.admin) {
//     // User is authenticated as admin
//     next();
//   } else {
//     res.status(401).json({ message: 'Authentication failed. Please log in as admin.' });
//   }
// };

// // Create a user (accessible only to authenticated admins)
// router.post('/users', authenticateAdmin, createUser);

// // Read all users (accessible only to authenticated admins)
// router.get('/users', authenticateAdmin, getUsers);

// // Read a specific user by ID (accessible only to authenticated admins)
// router.get('/users/:id', authenticateAdmin, getUserById);

// // Update a specific user by ID (accessible only to authenticated admins)
// router.put('/users/:id', authenticateAdmin, updateUser);

// // Delete a specific user by ID (accessible only to authenticated admins)
// router.delete('/users/:id', authenticateAdmin, deleteUser);

// module.exports = router;






// const express = require('express');
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();
// const router = express.Router();



// // // Create a new user




// router.post('/users', async (req, res) => {
//   // Extract user data from the request body
//   const { name, date, contact, endDate, amount } = req.body;

//   try {
//     // Use the sessionToken retrieved from the session
//     const sessionToken = req.session.sessionToken;

//     // Check if the user is authenticated as an admin
//     if (!req.session.admin) {
//       return res.status(401).json({ message: 'Authentication failed. Please log in as admin.' });
//     }

//     // Your logic to create the user in the database using Prisma
//     const newUser = await prisma.user.create({
//       data: {
//         name,
//         date,
//         contact,
//         endDate,
//         amount,
//       },
//     });

//     res.json({ message: 'User created successfully.', user: newUser, sessionToken });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to create user.', error: error.message });
//   }
// });










// // Get all users
// router.get('/users', async (req, res) => {
//   try {
//     const users = await prisma.user.findMany();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to get users.', error: error.message });
//   }
// });

// // Update a user by ID
// router.put('/users/:id', async (req, res) => {
//   const userId = parseInt(req.params.id);
//   const { name, date, contact, endDate, amount } = req.body;

//   try {
//     const updatedUser = await prisma.user.update({
//       where: { id: userId },
//       data: {
//         name,
//         date,
//         contact,
//         endDate,
//         amount,
//       },
//     });

//     res.json({ message: 'User updated successfully.', user: updatedUser });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to update user.', error: error.message });
//   }
// });

// // Delete a user by ID
// router.delete('/users/:id', async (req, res) => {
//   const userId = parseInt(req.params.id);

//   try {
//     const deletedUser = await prisma.user.delete({
//       where: { id: userId },
//     });

//     res.json({ message: 'User deleted successfully.', user: deletedUser });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to delete user.', error: error.message });
//   }
// });

// module.exports = router;



