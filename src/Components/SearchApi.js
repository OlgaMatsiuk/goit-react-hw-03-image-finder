// const SearchApi = (search, page) => {
//     const API_KEY = '21833579-dbfb00598a636f5e3a6a2045e';
//     // const URL = "https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=";

//     return (
//         fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=${API_KEY}&q=${search}&page=${page}`)
//         .then(response => {
//           if (response.ok) {
//             return response.json();
//           }

//           return Promise.reject(
//             new Error(`Search request ${search} not found`),
//           );
//         }));
// }

// export default SearchApi;
const KEY = '21833579-dbfb00598a636f5e3a6a2045e';

export default class ImagesApi {
  constructor() {
    this.query = '';
    this.page = 1;
  }

  async fatchImages() {
    const response = await fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${KEY}`,
    );
    const parsedResponse = await response.json();
    this.incrementPage();
    return parsedResponse;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}