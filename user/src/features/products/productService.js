import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const getProducts = async () => {
  try {
    const response = await axios.get(`${base_url}product`);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    // Handle any exceptions that occurred during the registration process
    throw new Error(error.message);
  }
};

const getProductCategories = async () => {
  try {
    const response = await axios.get(`${base_url}prodcategory`);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    // Handle any exceptions that occurred during the registration process
    throw new Error(error.message);
  }
};
const getSingleProducts = async (id) => {
  try {
    const response = await axios.get(`${base_url}product/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    // Handle any exceptions that occurred during the registration process
    throw new Error(error.message);
  }
};

const addToWishList = async (prodId) => {
  const response = await axios.put(
    `${base_url}product/wishlist`,
    { prodId },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getProducts,
  getSingleProducts,
  addToWishList,
  getProductCategories,
};
