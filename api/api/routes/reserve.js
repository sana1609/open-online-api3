var express = require('express');
var router = express.Router();
var con = require('../db/connection')

router.get('/', function(req, res, next) {
  const sql = "Select * from reserve";
  con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});
router.get('/:id', function(req, res, next) {
    const {id} = req.params;
    const sql = "Select * from reverse where readerid= '"+id+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});
router.get('/book/:id', function(req, res, next) {
    const {id} = req.params;
    const sql = "Select * from reserve where bookid= '"+id+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});
router.get('/date/:id', function(req, res, next) {
    const {id} = req.params;
    const sql = "Select * from reserve where date= '"+id+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});

module.exports = router;
