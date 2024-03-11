const db = require("../../data/db-config")

const getAll = async () => {
  // DO YOUR MAGIC
  return db('accounts');
}

const getById = async (id) => {
  // DO YOUR MAGIC
  return db.select('*')
  .from('accounts')
  .where({id})
  .first();
}

const create = account => {
  // DO YOUR MAGIC
} 

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
