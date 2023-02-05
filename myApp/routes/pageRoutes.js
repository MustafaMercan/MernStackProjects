const express = require('express');
const authController = require('../controllers/authController.js');
const authMiddleWare = require('../middleware/authMiddleware.js');
const pageController = require('../controllers/pageController.js');
const productsController = require('../controllers/productsController.js');

const router = express.Router();


router.route('/signup').post(authController.signupPost).get(authController.signupGet);
router.route('/login').post(authController.loginPost).get(authController.loginGet);
router.route('/profile').get(authMiddleWare.requireAuth,pageController.profileGet);///logout
router.route('/logout').get(authController.logoutGet);
router.route('/userProducts').get(productsController.userProductsGet); 
router.route('/createproduct').post(productsController.createproductPost).get(productsController.createproductGet);

//requireAuth -> yetki verilmezse /home'a yönlendiriyor
//checkUser -> eğer kullanıcı giriş yaptıysa onun bilgilerini json ile res'e yolluyor ve ona göre render işlemleri yapılıyor
module.exports = router;