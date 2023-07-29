import propTypes from 'prop-types';

import '../assets/styles/buttons.css'

const Button = ({ title, disabled, variant, icon, handleClick }) => {
  return (
    <button
    onClick={handleClick} 
    disabled={disabled}
    className={`btn btn-${variant} ${ icon && 'pl-4' }`}>
      { icon }
      { title }
    </button>
  );
};

export default Button;

Button.propTypes = {
  title: propTypes.string,
  disabled: propTypes.bool,
  variant: propTypes.oneOf(['primary', 'secondary']),
  icon: propTypes.element,
  handleClick: propTypes.func,
}

Button.defaultProps = {
  title: 'Action',
  disabled:false,
  variant: 'primary',
  icon: null,
  handleClick: () => {},
}
