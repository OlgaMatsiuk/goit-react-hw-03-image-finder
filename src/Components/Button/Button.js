import PropTypes from 'prop-types';

const Button = ({ title, onButtonClick }) => {
  return (
    <div className="ButtonPosition">
      <button type='button' className="Button" onClick={onButtonClick}>
        {title}
      </button>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
};

export default Button;