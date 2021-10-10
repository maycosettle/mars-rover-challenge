import PropTypes from 'prop-types';

import useStyles from './styles';

const PaperLayout = ({ className, children }) => {
  const styles = useStyles({ className });

  return <div className={styles.main}>{children}</div>;
};

PaperLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

PaperLayout.defaultProps = {
  className: '',
};

export default PaperLayout;
