import { ReactComponent as FailedSearch } from 'assets/failedSearch.svg';

import useStyles from './styles';

const EmptyTable = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.failedSearchContainer}>
          <FailedSearch />
          <h1 className={styles.noResultsTitle}>No results found</h1>
          <p className={styles.noResultsText}>Try adjusting your search or filter to find what you are looking for.</p>
        </div>
      </div>
    </div>
  );
};

export default EmptyTable;
