
// const userRouter = require('./userRouter');

// const indexRouter = {
//     "user": userRouter,
// }
// module.exports = indexRouter;


const express = require('express');
const userRouter = require('./userRouter');
const textextractRouter = require('./textextractRouter');

const router = express.Router();

router.use('/users', userRouter);
router.use('/textextract', textextractRouter);

module.exports = router;
