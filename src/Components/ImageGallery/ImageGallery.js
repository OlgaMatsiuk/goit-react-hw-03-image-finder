import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';


const ImageGallery = ({ images, onShowLargeImg  }) => {
  const showLargeImg  = path => {
    onShowLargeImg (path);
  };
return (
  <ul className="ImageGallery">
    {images.map(({ largeImageURL,webformatURL, id }) => (
      <ImageGalleryItem
        url={webformatURL}
        key={id}
        onShowLargeImg={() => showLargeImg(largeImageURL)}
      />
    ))}
  </ul>
);
};

ImageGallery.propTypes = {
  onShowLargeImg : PropTypes.func.isRequired,
images: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
).isRequired,
};

export default ImageGallery;