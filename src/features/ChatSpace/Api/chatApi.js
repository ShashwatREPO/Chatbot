import axios from "axios";

export const getGemniResponse = async (query) => {
  try {
    const response = await axios.post(
      "https://bot-9jad.onrender.com/gen/generate",
      { query }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
