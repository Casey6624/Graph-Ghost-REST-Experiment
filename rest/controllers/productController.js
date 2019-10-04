const Product = require("../models/Product");

exports.createProduct = (req, res, next) => {
  const {
    productName,
    productDescription,
    productPrice,
    productQuantity
  } = req.body;

  if (!productName || !productPrice || !productQuantity) {
    throw new Error(
      "Please make sure the product has a Name, Price and Quantity"
    );
  }

  const product = new Product({
    productName: productName,
    productDescription: productDescription,
    productPrice: productPrice,
    productQuantity: productQuantity
  });

  return product
    .save()
    .then(res => {
      console.log("Write to database was successful!");
    })
    .catch(err => {
      console.log(err);
    });

  console.log(req.body);
  res.sendStatus(200);
};
