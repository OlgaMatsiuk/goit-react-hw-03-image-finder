import React, { Component } from 'react';
import imagesApi from './Components/SearchApi';

import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import Modal from './Components/Modal';
import Loader from 'react-loader-spinner';

import './App.css';

class App extends Component {
  state = {
    images: [],
    page: 1,
    gallery: [],
    searchQuery: '',
    isLoading: false,
    error: null,
    largeImage: '',
    showModal: false,
    modalUrl: '',
  };


  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  }
  onClickImageGalleryItem = path => {
    this.setState({ modalUrl: path });
    this.toggleModal();
  }
  onChangeQuery = searchQuery => {
    this.setState({ 
      searchQuery: searchQuery, 
      page: 1, 
      images: [], 
      error: null, 
    })
  }
  fetchImages = () => {
    const { searchQuery, page } = this.state;
    const options = { searchQuery, page };

    this.setState({ isLoading: true });

    imagesApi
    .fetchImages(options)
    .then(images => {
      this.setState( prevState => ({
        images: [...prevState.images, ...images], 
        page: prevState.page + 1,
        pageImages: [...images], 
      }));
      if (images.length === 0) {
          this.setState({
            error: 'Nothing was find by your query. Try again.',});
      }})
    .catch(error => this.setState({ error: error.message }))
    .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { images, isLoading, error, showModal, modalUrl } = this.state;

    return (
      <>
        <Searchbar onChangeQuery={this.onChangeQuery} />
        {error && (
          <p style={{ color: 'red', textAlign: 'center', fontSize: '20px' }}>
            This is error: {error}
          </p>
        )}
        <ImageGallery images={images} onShowLargeImg ={this.onClickImageGalleryItem}/>
        { isLoading && <Loader type="Bars" color="#00BFFF" height={80} width={80} /> }       


          {images.length > 0 && !isLoading && (
          <Button title="Load More" onButtonClick={this.fetchImages} />
        )}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalUrl} alt="" />
          </Modal>
        )}
      </>      
    )    
  }   
};

export default App;