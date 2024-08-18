// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require('./db');
// const indexRouter= require('./apiRouter/indexRouter');

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// connectDB();

// Object.keys(indexRouter).forEach((key)=> {
//    return app.use(`/api/${key}`,indexRouter[key]);
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


//     const express = require('express');
//     const dotenv = require('dotenv');
//     const cors = require('cors');
//     const connectDB = require('./config/db');
//     const indexRouter = require('./apiRouter/indexRouter');
//     const Translation = require('./models/Translation');    

//     dotenv.config();

//     const app = express();
//     const PORT = process.env.PORT || 5000;

//     // Middleware
//     app.use(cors({
//         origin: 'http://localhost:3000',
//         credentials: true
//     }));
//     app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb', extended: true }));

//     // Database Connection
//     connectDB();

//     // API Routes
//     app.use('/api', indexRouter);

//     const saveEditedPage = async (req, res) => {
//         const { url, language, editedHTML } = req.body;
    
//         if (!url || !language || !editedHTML) {
//             return res.status(400).json({ error: 'URL, language, and edited HTML are required' });
//         }
    
//         try {
//             console.log('Received data:', { url, language, editedHTML });
    
//             // Ensure that editedHTML is saved under the correct field
//             const filter = { url, language };
//             const update = { editedHTML, createdAt: new Date() };
//             const options = { upsert: true, new: true };
    
//             const result = await Translation.findOneAndUpdate(filter, update, options);
            
//             console.log('Database result:', result);
    
//             res.json({ message: 'Edited page saved successfully', data: result });
//         } catch (error) {
//             console.error(`Error saving edited page: ${error.message}`);
//             res.status(500).json({ error: 'Failed to save edited page' });
//         }
//     };
    
    
//     // Define Routes
//     app.post('/api/textextract/saveEditedPage', saveEditedPage);
    
//     // Error Handling Middleware
//     app.use((err, req, res, next) => {
//         console.error(err.stack);
//         res.status(500).json({ error: 'Something went wrong!' });
//     });

//     // Start Server
//     app.listen(PORT, () => {
//         console.log(`Server running on port ${PORT}`);
//     });



const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const indexRouter = require('./apiRouter/indexRouter');
const Translation = require('./models/Translation');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Database Connection
connectDB();

// API Routes
app.use('/api', indexRouter);

const fetchWebsiteData = async (req, res) => {
    try {
        const { userId } = req.query; // Get userId from query parameters

        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' }); // Return error if userId is missing
        }

        // Fetch documents based on the userId
        const translations = await Translation.find({ userId });

        if (translations.length === 0) {
            return res.status(404).json({ message: 'No translations found for this user' });
        }

        res.json(translations);
    } catch (err) {
        console.error('Error fetching translations:', err);
        res.status(500).json({ error: 'Error fetching translations' });
    }
};

// Example Express setup
app.get('/api/website-view', fetchWebsiteData);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});
// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
