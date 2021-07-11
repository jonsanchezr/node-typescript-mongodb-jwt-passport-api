"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_1 = require("../controllers/user.controllers");
const router = express_1.Router();
router.post('/signup', user_controllers_1.signup);
router.post('/signin', user_controllers_1.signin);
exports.default = router;
