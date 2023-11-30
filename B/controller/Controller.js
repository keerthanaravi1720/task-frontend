// const { PrismaClient } = require('@prisma/client');

// const prisma = new PrismaClient();

// const createUser = async (req, res) => {
//   const { date, name, contact, endDate, amount } = req.body;
//   const user = await prisma.user.create({
//     data: {
//       date,
//       name,
//       contact,
//       endDate,
//       amount,
//     },
//   });
//   const successMessage = 'Created successfully';
//   res.json({ user, message: successMessage });
// };

// const getUsers = async (req, res) => {
//   const users = await prisma.user.findMany();
//   res.json(users);
// };

// const getUserById = async (req, res) => {
//   const { id } = req.params;
//   const user = await prisma.user.findUnique({
//     where: {
//       id: parseInt(id),
//     },
//   });
//   res.json(user);
// };

// const updateUser = async (req, res) => {
//   const { id } = req.params;
//   const { date, name, contact, endDate, amount } = req.body;
//   const updatedUser = await prisma.user.update({
//     where: {
//       id: parseInt(id),
//     },
//     data: {
//       date,
//       name,
//       contact,
//       endDate,
//       amount,
//     },
//   });
//   const successMessage = `User with ID ${id} updated successfully`;
//   res.json({ user: updatedUser, message: successMessage });
// };

// const deleteUser = async (req, res) => {
//   const { id } = req.params;
//   const deletedUser = await prisma.user.delete({
//     where: {
//       id: parseInt(id),
//     },
//   });
//   const successMessage = `User with ID ${id} deleted successfully`;
//   res.json({ user: deletedUser, message: successMessage });
// };

// module.exports = {
//   createUser,
//   getUsers,
//   getUserById,
//   updateUser,
//   deleteUser,
// };


const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// const createUser = async (req, res) => {
//   const { date, name, contact, endDate, amount } = req.body;
//   const user = await prisma.user.create({
//     data: {
//       date,
//       name,
//       contact,
//       endDate,
//       amount,
//     },
//   });
//   const successMessage = 'User created successfully';
 
//   res.json({ user, message: successMessage });
// };

// Controller.js

// const createUser = async (req, res) => {
//   const { date, name, contact, endDate, amount } = req.body;
//   const user = await prisma.user.create({
//     data: {
//       date,
//       name,
//       contact,
//       endDate,
//       amount,
//     },
//   });
//   const successMessage = 'User created successfully';

//   // Send the updated list of users in the response
//   const users = await prisma.user.findMany();

//   res.json({ user, message: successMessage, users });
// };


// const getUsers = async (req, res) => {
//   const users = await prisma.user.findMany();
//   res.json(users);
// };

// const getUserById = async (req, res) => {
//   const { id } = req.params;
//   const user = await prisma.user.findUnique({
//     where: {
//       id: parseInt(id),
//     },
//   });
//   res.json(user);
// };

// const updateUser = async (req, res) => {
//   const { id } = req.params;
//   const { date, name, contact, endDate, amount } = req.body;
//   const updatedUser = await prisma.user.update({
//     where: {
//       id: parseInt(id),
//     },
//     data: {
//       date,
//       name,
//       contact,
//       endDate,
//       amount,
//     },
//   });
//   const successMessage = `User with ID ${id} updated successfully`;
//   res.json({ user: updatedUser, message: successMessage });
// };

// const deleteUser = async (req, res) => {
//   const { id } = req.params;
//   const deletedUser = await prisma.user.delete({
//     where: {
//       id: parseInt(id),
//     },
//   });
//   const successMessage = `User with ID ${id} deleted successfully`;
//   res.json({ user: deletedUser, message: successMessage });
// };

// module.exports = {
//   createUser,
//   getUsers,
//   getUserById,
//   updateUser,
//   deleteUser,
// };
