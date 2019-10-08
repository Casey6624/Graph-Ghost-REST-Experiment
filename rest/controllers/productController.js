const Product = require("../models/Product");

exports.createProduct = (req, res, next) => {
  const {
    productName,
    productDescription,
    productPrice,
    productQuantity
  } = req.body;

  if (
    !productName ||
    !productPrice ||
    !productQuantity ||
    !productDescription
  ) {
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
    .then(() => {
      console.log("Write to database was successful!");
      return res.sendStatus(200);
    })
    .catch(err => {
      throw new Error(
        "Could not write to the database, please try again later"
      );
      console.log(err);
    });

  console.log(req.body);
};
