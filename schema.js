import { buildSchema } from "graphql";

export default buildSchema(`
    type Product{
        id:ID
        name: String
        price:Int
        isAvailable:Boolean
        stores:[Store]
    }

    type Store{
        store:String
    }

    type Query{
        getProduct(id:ID):Product
        getProducts:[Product]
    }

    input StoreInput {
        store: String
    }

    input ProductInput {
        id:ID
        name: String
        price:Int
        isAvailable:Boolean
        stores:[StoreInput]
    }

    type Mutation{
        createProduct(input: ProductInput):Product
        updateProduct(input: ProductInput):Product
        deleteProduct(id:ID):String
    }

    
`);
