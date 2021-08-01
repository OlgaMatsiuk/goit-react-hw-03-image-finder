import axios from 'axios';
const KEY = '21833579-dbfb00598a636f5e3a6a2045e';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const fetchImages = async ({ searchQuery = '', page = 1 }) => {
  return axios
    .get(
      `?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};
const exportObject = { fetchImages };
export default exportObject;