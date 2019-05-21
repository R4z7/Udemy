const express = require("express");

const postController = require('../controls/post2');
const router = express.Router();

router.get('/',	postController.getposts);
module.exports = router;
