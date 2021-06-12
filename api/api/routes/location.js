var express = require('express');
var router = express.Router();
var con = require('../db/connection')

router.get('/', function(req, res, next) {
  const sql = "Select * from location";
  con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});
router.get('/:id', function(req, res, next) {
    const {id} = req.params;
    const sql = "Select * from location where position= '"+id+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});
router.get('/book/:id', function(req, res, next) {
    const {id} = req.params;
    const sql = "Select * from location where bookid= '"+id+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});
router.get('/branch/:id', function(req, res, next) {
    const {id} = req.params;
    const sql = "Select * from location where branchid= '"+id+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});


module.exports = router;
