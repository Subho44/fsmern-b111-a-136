const express = require('express');
const router = express.Router();
const  {getallusers,getuserbyid} = require('../controllers/usercontroller');

router.use((req,res,next)=>{
    console.log('user route middleware');
    next();
});
router.get('/',getallusers);
router.get('/:id',getuserbyid);
module.exports = router ;