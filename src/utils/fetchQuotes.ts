import axios from 'axios';
const key = 'XtSD6nb+1I40bL6kGusGKg==fgpLbu1ahLyk7ohg';
const fetchQuotes = async (category = 'history') => {
  const url = 'https://api.api-ninjas.com/v1/quotes?category=';
  const res = await axios.get(`${url}${category}`, {
    headers: { 'X-Api-Key': key, 'Content-Type': 'application/json' },
  });
  return res;
};
export default fetchQuotes;
