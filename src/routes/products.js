const express = require('express')
const router = express.Router()
const productController = require('../controllers/products')
const upload = require('../middlewares/multer')
const auth = require('../middlewares/auth')
router
  .get('/', productController.getAllProduct)
  .get('/:idsaya',auth.verifyAccess, productController.getProductById)
// .get('/', productController.sortingTable)
// .get('/paginating', productController.paginatedResults)
  .post('/',upload.single('imgUrl'), productController.insertProduct)
  .put('/:id', productController.updateProduct)
  .delete('/:id', productController.deleteProduct)
module.exports = router
