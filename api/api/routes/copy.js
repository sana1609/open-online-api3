var express = require('express');
var router = express.Router();
var con = require('../db/connection')

router.get('/', function(req, res, next) {
  const sql = "Select * from copy";
  con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});
router.get('/branch/:id', function(req, res, next) {
    const {id} = req.params;
    const sql = "Select * from copy where branchid= '"+id+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});
router.get('/isbn/:id', function(req, res, next) {
    const {id} = req.params;
    const sql = "Select * from copy where isbn= '"+id+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});


module.exports = router;
