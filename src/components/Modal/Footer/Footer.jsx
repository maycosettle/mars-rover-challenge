import PropTypes from 'prop-types';

import useStyles from './styles';

const Footer = ({ onClose, onSubmit }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <button type="button" className={styles.confirm} onClick={onSubmit}>
        Confirm
      </button>
      <button type="button" className={styles.cancel} onClick={onClose}>
        Cancel
      </button>
    </div>
  );
};

Footer.propTypes = {
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

Footer.defaultProps = {
  onClose: () => {},
  onSubmit: () => {},
};

export default Footer;
