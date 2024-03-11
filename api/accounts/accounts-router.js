const router = require('express').Router()
const {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId }
  = require('./accounts-middleware');

const Database = require('./accounts-model')

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  await Database.getAll()
    .then((result) => {
      console.log(result)
      if (!result || result.length === 0) {
        console.log("conditional path running")
        return res.status(404).json([]);
      }
      res.status(200).json(result)
    })
    .catch(next)
})

router.get('/:id', checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  const account = req.account;
  res.status(200).json(account);
})

router.post('/', checkAccountPayload, checkAccountNameUnique, (req, res, next) => {
  // DO YOUR MAGIC
  
})

router.put('/:id',
  checkAccountId,
  checkAccountNameUnique,
  checkAccountPayload,
  (req, res, next) => {
    // DO YOUR MAGIC
    try {

    } catch (err) {

    }
  });

router.delete('/:id', checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {

  } catch (err) {

  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  console.log(err.stack); // Log the error stack for debugging
  res.status(err.status || 500).json({
    message: err.message
  }); // Send a generic error response
})

module.exports = router;
