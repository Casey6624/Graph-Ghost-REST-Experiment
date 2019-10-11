const { buildSchema } = require("graphql");

module.exports = ProductSchema = buildSchema(`
    type Product {
        _id: ID!
        productName: String!
        productDescription: String!
        productPrice: Int!
        productQuantity: Int!
    }

    input ProductInput {
        productName: String!
        productDescription: String!
        productPrice: Int!
        productQuantity: Int!
    }

    type RootQuery {
        products: [Product!]!
        findProductById(productId: String!): Product
    }

    type RootMutation {
        createProduct(productInput: ProductInput): Product!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
