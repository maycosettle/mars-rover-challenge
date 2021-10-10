import PropTypes from 'prop-types';

import useStyles from './styles';

const Button = ({ name, rounded, icon, color, bgColor, transparent, disabled, className, onClick }) => {
  const styles = useStyles({ rounded, color, bgColor, transparent, disabled, className });

  return (
    <button type="button" onClick={onClick} disabled={disabled} className={styles.button}>
      {icon && icon}
      {name}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  rounded: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  transparent: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  rounded: 'full',
  color: 'white',
  bgColor: 'primary',
  transparent: false,
  className: '',
  disabled: false,
  onClick: () => {},
};

export default Button;
