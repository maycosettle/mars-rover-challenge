import PropTypes from 'prop-types';

import useStyles from './styles';

const Divider = ({ className }) => {
  const styles = useStyles({ className });

  return <div className={styles.divider} />;
};

Divider.propTypes = {
  className: PropTypes.string,
};

Divider.defaultProps = {
  className: '',
};

export default Divider;
