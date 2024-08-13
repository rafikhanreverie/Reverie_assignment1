
// const userRegister=async(body)=>{
//     try {

//     } catch (error) {
//         console.log(error);
//     }
// }

// const userLogin=async()=>{
//     try {

//     } catch (error) {
//         console.log(error);
//     }
// }

// module.exports={userRegister, userLogin};



const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// exports.registerUser = async (req, res) => {
//     const { name, email, password } = req.body;
//     try {
//         let user = await User.findOne({ email });
//         if (user) return res.status(400).json({ msg: 'User already exists' });

//         user = new User({ name, email, password });
//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(password, salt);
//         await user.save();

//         const payload = { user: { id: user.id } };
//         jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
//             if (err) throw err;
//             res.json({ user, token });
//         });
//     } catch (err) {
//         console.error(`Error registering user: ${err.message}`);
//         res.status(500).json({ msg: 'Server error' });
//     }
// };
exports.registerUser = async (req, res) => {
    const { name, email, password,picture } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({ name, email, password,picture });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const payload = { user: { id: user.id } };
        jwt.sign(
            payload,
            process.env.JWT_SECRET, // Use the secret key from the environment variables
            { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                res.json({ user, token });
            }
        );
    } catch (err) {
        console.error('Error registering user:', err.message);
        res.status(500).send('Server error');
    }
};


exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(`Error logging in: ${err.message}`);
        res.status(500).json({ msg: 'Server error' });
    }
};
