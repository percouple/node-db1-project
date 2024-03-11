const Yup = require( 'yup');
const Database = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  console.log("checkAccountPayload Middleware");
  
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)

  next();
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log("checkAccountNameUnique Middleware");
  next();
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  console.log("checkAccountId Middleware");
  await Database.getById(req.params.id)
  .then((account) => {
    if (!account) {
      next({status: 404, message:"account not found"})
    } else {
      req.account = account;
      next();
    }
  })
  .catch((err) => {
    next(err)
  })
}
