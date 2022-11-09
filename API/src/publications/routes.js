const router = require('express').Router();

router.get('/publications', function(req, res){
    res.send('endpoint de publicaciones');
});

module.exports = router;