
// const userRouter = require('./userRouter');

// const indexRouter = {
//     "user": userRouter,
// }
// module.exports = indexRouter;


const express = require('express');
const userRouter = require('./userRouter');
const textextractRouter = require('./textextractRouter');
const dashboardRouter = require('./dashboardRouter');

const router = express.Router();

router.use('/users', userRouter);
router.use('/textextract', textextractRouter);

router.use('/dashboard', dashboardRouter);
module.exports = router;
