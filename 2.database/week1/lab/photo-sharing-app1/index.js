const Sequelize = require("sequelize");
const express = require('express');
const PORT = process.env.PORT || 3000;

// const { User, Photo } = require("./models");
// const { User, Photo } = require("./routes");
const userRouter = require('./routes/user');
// const photoRouter = require('./routes/photo');


const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())


app.use('/user', userRouter);
// app.use('/photo', photoRouter);

// app.post("/users", async (req, res) => {
//     // req.body contains an Object with firstName, lastName, email
//     const { firstName, lastName, email } = req.body;
//     const newUser = await User.create({
//         firstName,
//         lastName,
//         email,
//     });

//     // Send back the new user's ID in the response:
//     res.json({
//         id: newUser.id,
//     });
// });
// app.get("/users", async (req, res) => {
//     const users = await User.findAll();
//     res.json(users);
// });
// app.get("/users/by-last-name", async (req, res) => {
//     try {
//         const users = await User.findAll({
//             attributes: ["lastName"],
//         });
//         res.json(users);
//     } catch (e) {
//         console.log(e);
//         res.status(404).json({
//             message: "lastname not found",
//         });
//     }
// });
// app.get("/users/:id", async (req, res) => {
//     try {
//         const oneUser = await User.findByPk(req.params.id);
//         res.json(oneUser);
//     } catch (e) {
//         console.log(e);
//         res.status(404).json({
//             message: "User not found",
//         });
//     }
// });
// app.post("/users/search", async (req, res) => {
//     const users = await User.findAll({
//         where: {
//             [Sequelize.Op.or]: [
//                 {
//                     firstName: req.body.term,
//                     lastName: req.body.term,
//                 },
//             ],
//         },
//     });
//     res.json(users);
// });
// app.post("/users/:id", async (req, res) => {
//     const { id } = req.params;

//     // Assuming that `req.body` is limited to
//     // the keys firstName, lastName, and email
//     const updatedUser = await User.update(req.body, {
//         where: {
//             id,
//         },
//     });

//     res.json(updatedUser);
// });
// app.delete("/users/:id", async (req, res) => {
//     const { id } = req.params;
//     const deletedUser = await User.destroy({
//         where: {
//             id,
//         },
//     });
//     res.json(deletedUser);
// });
// app.get("/users/photos", async (req, res) => {
//     try {
//         const users = await User.findAll({
//             include: [
//                 {
//                     model: Photo,
//                 },
//             ],
//         });
//         res.json(users);
//     } catch (e) {
//         console.log(e);
//         res.status(404).json({
//             message: "user and photo not found",
//         });
//     }
// });
// app.get("/photos/users", async (req, res) => {
//     try {
//         const photos = await Photo.findAll({
//             include: [
//                 {
//                     model: User,
//                 },
//             ],
//         });
//         res.json(photos);
//     } catch (e) {
//         console.log(e);
//         res.status(404).json({
//             message: "photo and user not found",
//         });
//     }
// });

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))