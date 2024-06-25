const express = require("express");
const auth = require("../controllers/auth-controllers");
const {validate} = require("../middlewares/validate-middleware");
const { SignUpSchema ,LoginSchema } = require("../validators/auth-validator");
const authMiddleware = require("../middlewares/auth-middleware");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from the auth router");
});
router.route("/register").post( validate(SignUpSchema) , auth.registerUser);
router.route("/login").post( validate(LoginSchema) , auth.loginUser);
router.route("/user").get(authMiddleware , auth.user)
module.exports = router;
