const express = require('express');
const router = express.Router();
const sellerRequestController = require('../controllers/sellerRequestController');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');

router.post('/', sellerRequestController.createSellerRequest);

router.get('/', auth, admin, sellerRequestController.getAllSellerRequests);

router.put('/:id', auth, admin, sellerRequestController.updateSellerRequest);

router.delete('/:id', auth, admin, sellerRequestController.deleteSellerRequest);

module.exports = router;
