import PropTypes from 'prop-types';
import { Dialog } from '@headlessui/react';
import { ExclamationIcon } from '@heroicons/react/solid';

import { Input } from 'components/Input';

import useStyles from './styles';

const Bookmark = ({ onChange }) => {
  const styles = useStyles();

  return (
    <>
      <div className={styles.iconContainer}>
        <ExclamationIcon className={styles.icon} aria-hidden="true" />
      </div>
      <div className={styles.contentContainer}>
        <Dialog.Title as="h3" className={styles.title}>
          Do you want to save the bookmark?
        </Dialog.Title>
        <div className={styles.inputContainer}>
          <p className={styles.label}>Enter a name for the bookmark</p>
          <div className={styles.input}>
            <Input onChange={onChange} />
          </div>
        </div>
      </div>
    </>
  );
};

Bookmark.propTypes = {
  onChange: PropTypes.func,
};

Bookmark.defaultProps = {
  onChange: () => {},
};

export default Bookmark;
