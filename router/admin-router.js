const express = require('express');
const admin = require('../controllers/admin-controllers');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddlewares = require('../middlewares/admin-middlewares');
const router = express.Router();

router.route("/users").get(authMiddleware,adminMiddlewares,admin.getAllUsers);
router.route("/users/:id").get(authMiddleware,adminMiddlewares,admin.getUserById);
router.route("/users/update/:id").patch(authMiddleware,adminMiddlewares,admin.updateUserById);
router.route("/users/delete/:id").delete(authMiddleware,adminMiddlewares,admin.deleteUser);

router.route("/contacts").get(authMiddleware,adminMiddlewares,admin.getAllContact);
router.route("/contacts/delete/:id").delete(authMiddleware,adminMiddlewares,admin.deleteContact);

module.exports = router;