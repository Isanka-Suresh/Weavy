import axios from "axios";

const api = axios.create({
  baseURL: "https://ad012c07df5040df9a27bd3d5c8977dc.weavy.io/api",
  headers: {
    'Authorization': 'Bearer wys_GIA75D0iI7CjxW2immrkWjT5FZQhVL0kn0q1',
  },
});

export default api;
