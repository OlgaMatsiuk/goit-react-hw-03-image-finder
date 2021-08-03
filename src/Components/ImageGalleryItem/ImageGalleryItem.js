
import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ url,onShowLargeImg }) => (
  <li className="ImageGalleryItem">
    <img
      onClick={onShowLargeImg}
      src={url}
      alt=''
      className="ImageGalleryItem-image"
      
    />
  </li>
);
ImageGalleryItem.propTypes = {
  onShowLargeImg: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};
export default ImageGalleryItem;