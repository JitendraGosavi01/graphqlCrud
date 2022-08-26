import mongoose from "mongoose";
import Product from "./mongoModels.js";

const resolvers = {
  getProduct: ({ id }) => {
    return new Promise((res, rej) => {
      Product.findById(id, (err, doc) => {
        if (err) rej(err);
        res(doc);
      });
    });
  },

  getProducts: () => {
    return Product.find({});
  },
  createProduct: ({ input }) => {
    console.log(input);
    return new Promise((resolve, reject) => {
      const product = new Product(input);
      product.save((error, product) => {
        if (error) reject(error);
        resolve(product);
      });
    });
  },

  updateProduct: ({ input }) => {
    return new Promise((resolve, reject) => {
      Product.findByIdAndUpdate(
        { _id: input.id },
        input,
        { new: true },
        (error, product) => {
          if (error) reject(error);
          resolve(product);
        }
      );
    });
  },

  deleteProduct: (id) => {
    return new Promise((resolve, reject) => {
      Product.findByIdAndDelete(
        mongoose.mongo.ObjectId(id),
        (error, result) => {
          console.log(result);
          if (error) reject(error);
          resolve(result);
        }
      );
    });
  },
};

export default resolvers;
