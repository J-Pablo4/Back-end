const router = require('express').Router();

router.get('/publications', function(req, res){
    res.send('endpoint de publications');
});

module.exports = router;