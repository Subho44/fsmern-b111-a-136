const express = require('express');
const router = express.Router();
const {getallproducts,getproductbyid} = require('../controllers/productcontroller');

router.use((req,res,next)=>{
    console.log('product route middleware');
    next();
});
router.get('/',getallproducts);
router.get('/:id',getproductbyid);
module.exports = router ;