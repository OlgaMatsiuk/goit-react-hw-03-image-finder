
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
    this.page += 1;
    return await response.json();
  }
}