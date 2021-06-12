var express = require('express');
var router = express.Router();
var con = require('../db/connection')

router.get('/', function(req, res, next) {
  const sql = "Select * from publisher";
  con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});
router.get('/:id', function(req, res, next) {
    const {id} = req.params;
    const sql = "Select * from publisher where publisherid= '"+id+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});
router.get('/name/:id', function(req, res, next) {
    const {id} = req.params;
    const sql = "Select * from publisher where publishername= '"+id+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});
router.get('/location/:id', function(req, res, next) {
    const {id} = req.params;
    const sql = "Select * from publisher where location= '"+id+"'";
    con.query(sql, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});


module.exports = router;
