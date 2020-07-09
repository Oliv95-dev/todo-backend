var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json([
        {
            "userId": 1,
            "id": 1,
            "title": "купить шляпку",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "куппить еще одну шлюпку",
            "completed": false
        }
    ])
    res.end();
});

module.exports = router;
