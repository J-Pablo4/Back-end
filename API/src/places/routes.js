
const router = require('express').Router();

router.get('/places', (req, res) => {
    res.send('endpoint de places');
})

module.exports = router;