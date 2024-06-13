import axios from "axios";

const getData = async (categoryName) => {
  try {
    const res = await axios(
      `https://dummyjson.com/products/category/${categoryName}`
    );
    if (res.status !== 200) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export default getData;
