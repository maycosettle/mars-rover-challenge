import { Button } from 'components/Button';
import PropTypes from 'prop-types';

import useStyles from './styles';

const Pagination = ({ currentPage, onPageUp, onPageDown, onPageClick }) => {
  const styles = useStyles();

  return (
    <nav className={styles.container}>
      <div className={styles.pageDown.div}>
        <a className={styles.pageDown.a}>
          <Button
            onClick={onPageDown}
            transparent
            color="primary-600"
            className={styles.pageDown.button}
            name="Previous"
          />
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">
        <a onClick={onPageClick} className={styles.number}>
          1
        </a>
        <a onClick={onPageClick} className={styles.number} aria-current="page">
          2
        </a>
        <a onClick={onPageClick} className={styles.number}>
          3
        </a>
        <a onClick={onPageClick} className={styles.number}>
          8
        </a>
        <a onClick={onPageClick} className={styles.number}>
          9
        </a>
        <a onClick={onPageClick} className={styles.number}>
          10
        </a>
        <span className={styles.dots}>...</span>
        <a onClick={onPageClick} className={styles.number}>
          {currentPage >= 10 && currentPage + 1}
        </a>
      </div>
      <div className={styles.pageUp.div}>
        <a className={styles.pageUp.a}>
          <Button onClick={onPageUp} transparent color="primary-600" className={styles.pageUp.button} name="Next" />
        </a>
      </div>
    </nav>
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  currentPage: PropTypes.number,
  showingFrom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  showingTo: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  totalElements: PropTypes.number,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  pageCount: 1,
  currentPage: 0,
  showingFrom: 0,
  showingTo: 10,
  totalElements: 10,
  onPageChange: () => {},
};

export default Pagination;
