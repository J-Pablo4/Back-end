
const router = require('express').Router();

router.get('/users', (req, res) => {
    res.send('endpoint de users');
})

module.exports = router;