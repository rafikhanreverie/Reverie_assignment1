
// const express = require('express');
// const { userRegister, userLogin } = require('../apiController/userController');
// // const bcrypt = require('bcryptjs');
// // const jwt = require('jsonwebtoken');
// // const User = require('../Schema/User');


// const router = express.Router();


// router.post("/register", async (req, res, next) => {
//     await userRegister(req.body).then(res => {
//         try {
//             return res
//         } catch (error) {
//             console.log(error);
//         }
//     });
// })

// router.post("/logIn", async (req, res, next) => {
//     await userLogin(req.body).then(res => {
//         try {
//             return res
//         } catch (error) {
//             console.log(error);
//         }
//     });
// })

// router.put("/update", async (req, res, next) => {
//     await userUpdate(req.body).then(res => {
//         try {
//             return res
//         } catch (error) {
//             console.log(error);
//         }
//     });
// })

// module.exports = router;


const express = require('express');
const { registerUser, loginUser } = require('../apiController/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;

