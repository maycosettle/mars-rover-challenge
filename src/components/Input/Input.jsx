import PropTypes from 'prop-types';

import useStyles from './styles';

const Input = ({ label, id, name, placeholder, onChange }) => {
  const styles = useStyles();

  return (
    <>
      <label htmlFor="label" className={styles.label}>
        {label}
      </label>
      <div className={styles.inputContainer}>
        <input type="text" name={name} id={id} className={styles.input} placeholder={placeholder} onChange={onChange} />
      </div>
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  label: '',
  id: '',
  name: '',
  placeholder: '',
  onChange: () => {},
};

export default Input;
