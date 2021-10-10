import PropTypes from 'prop-types';

import useStyles from './styles';

const PhotoLayout = ({ children }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

PhotoLayout.propTypes = {
  children: PropTypes.node,
};

export default PhotoLayout;
