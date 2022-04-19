const express = require('express');

const router = express.Router();
router.post('/', (req, res) => { // POS /post
  res.json({ id: 1, content: 'hello1' });
});

router.delete('/', (req, res) => { // DELETE /post
  res.json({ id: 1 });
});

module.exports = router;