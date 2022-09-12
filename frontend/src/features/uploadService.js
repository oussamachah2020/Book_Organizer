import axios from "axios";

const API_PATH = "/api/books";

const push = async (book, token) => {
  const config = {
    Headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_PATH, book, config);
  return response.data;
};

const uploadService = { push };
export default uploadService;
