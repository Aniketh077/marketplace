const express = require('express');
const router = express.Router();
const sellerRequestController = require('../controllers/sellerRequestController');
const auth = require('../middlewares/auth');
const { isAdmin } = require('../middlewares/admin');

router.post('/', sellerRequestController.createSellerRequest);

router.get('/', auth, isAdmin, sellerRequestController.getAllSellerRequests);

router.put('/:id', auth, isAdmin, sellerRequestController.updateSellerRequest);

router.delete('/:id', auth, isAdmin, sellerRequestController.deleteSellerRequest);

module.exports = router;
