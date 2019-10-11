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
  },
  createProduct: args => {

    const { productName, productDescription, productPrice, productQuantity } = args.productInput

    if(!productName || !productDescription || !productPrice || !productQuantity){
      throw new Error("One of your graphQL attributes was not defined")
    }

    const product = new Product({
      productName: productName,
      productDescription: productDescription,
      productPrice: productPrice,
      productQuantity: productQuantity
    })
    return product.save()
    .then(() => {
      console.log("Record was saved to the database!")
    })
    .catch(err => {
      throw new Error(err)
    })


  }
};
