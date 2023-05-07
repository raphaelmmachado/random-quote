import axios from "axios";
const key = import.meta.env.VITE_API_KEY;
const fetchQuotes = async (category = "history") => {
  const url = "https://api.api-ninjas.com/v1/quotes?category=";
  const res = await axios.get(`${url}${category}`, {
    headers: { "X-Api-Key": key, "Content-Type": "application/json" },
  });
  return res;
};
export default fetchQuotes;
