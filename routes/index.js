const express = require('express');
const router = express.Router();
const fs = require('fs');

const max = 33;

let i = 0;
let lastWrite = 0;

/* GET home page. */
router.get('*', function(req, res, next) {
  i++;
  fs.writeFileSync('count.txt', String(i));

  if (i > max) {
    return res.render('success');
  }
  
  if (Date.now() - lastWrite > 500) {
    let count = fs.readFileSync('count.txt');
    res.render('index', { count, max });
    lastWrite = Date.now()
  }

});

module.exports = router;
