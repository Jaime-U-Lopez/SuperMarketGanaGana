const express= require("express");

const router= express.Router();
const productController=require( '../controller/ProductController')


//api/product

router.post('/', productController.createProduct);

router.get('/', productController.getProduct);
router.get('/:id', productController.getOneProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct)
router.delete('/', productController.deleteAllProduct)




/* 


 */


module.exports=router;
