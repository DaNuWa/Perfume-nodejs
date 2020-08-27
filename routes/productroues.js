const express=require('express');
const router=express.Router();
const productcontroller=require('../routes/../controllers/productcontroller');

router.get('/products',productcontroller.getProduct); 
router.post('/products',authcontroller.postProduct); 
module.exports = router;