const express = require('express');
const router = express.Router();


const signinComponent = require('../../components/v1/auth/signin');


router.post('/signin', signinComponent);

module.exports = router;
