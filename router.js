const express = require('express')
const router = express.Router();
const { getproducts } = require('./controller');
console.log(getproducts);
router.route('/new').get(getproducts);
module.exports = router;