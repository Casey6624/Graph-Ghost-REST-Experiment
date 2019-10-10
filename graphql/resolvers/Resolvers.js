const mongoose = require("mongoose");
const Product = require("../models/Product");

module.exports = GraphQLResolvers = {
  products: () => {
    return Product.find()
      .then(products => {
        return products;
      })
      .catch(err => {
        return err;
      });
  }
};
