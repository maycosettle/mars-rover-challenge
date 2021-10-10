import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { BookmarkIcon, SearchIcon } from '@heroicons/react/solid';

import { ROVER_OPTIONS } from 'utils/constants';

import { Button } from 'components/Button';
import { Checkbox } from 'components/Checkbox';
import { Select } from 'components/Select';

import useStyles from './styles';

const Filters = ({
  solCheckbox,
  earthCheckbox,
  selectedRover,
  cameraOptions,
  selectedCamera,
  bookmarkOptions,
  setSolCheckbox,
  selectedBookmark,
  setEarthCheckbox,
  handleCamera,
  handleRover,
  handleSearch,
  handleOpen,
  handleBookmark,
}) => {
  const disableSearch = (solCheckbox || earthCheckbox) && !isEmpty(selectedRover) && !isEmpty(selectedCamera);

  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        <Checkbox
          label="Sol date"
          description="2890"
          checked={solCheckbox}
          onChange={() => setSolCheckbox(!solCheckbox)}
        />
      </div>
      <div className={styles.checkbox}>
        <Checkbox
          label="Earth day"
          description="2020-09-22"
          checked={earthCheckbox}
          onChange={() => setEarthCheckbox(!earthCheckbox)}
        />
      </div>
      <div className={styles.padding}>
        <Select
          label="Rover"
          options={ROVER_OPTIONS}
          selected={selectedRover}
          setSelected={handleRover}
          placeholder="Select a rover"
        />
      </div>
      <div className={styles.padding}>
        <Select
          label="Rover Camera"
          options={cameraOptions}
          selected={selectedCamera}
          setSelected={handleCamera}
          placeholder="Select a camera"
        />
      </div>
      <div className={styles.search}>
        <Button
          name="Search"
          icon={<SearchIcon className={styles.icon} aria-hidden="true" />}
          onClick={handleSearch}
          disabled={!disableSearch}
        />
      </div>
      <div className={styles.bookmark}>
        <Button
          name="Add bookmark"
          icon={<BookmarkIcon className={styles.icon} aria-hidden="true" />}
          onClick={handleOpen}
        />
      </div>
      <div className={styles.padding}>
        <Select
          label="Bookmarks"
          options={bookmarkOptions}
          selected={selectedBookmark}
          setSelected={handleBookmark}
          placeholder="Bookmarks"
        />
      </div>
    </div>
  );
};

Filters.propTypes = {
  solCheckbox: PropTypes.bool,
  earthCheckbox: PropTypes.bool,
  selectedRover: PropTypes.object,
  cameraOptions: PropTypes.array,
  selectedCamera: PropTypes.object,
  bookmarkOptions: PropTypes.array,
  selectedBookmark: PropTypes.object,
  setSolCheckbox: PropTypes.func,
  setEarthCheckbox: PropTypes.func,
  handleCamera: PropTypes.func,
  handleRover: PropTypes.func,
  handleSearch: PropTypes.func,
  handleOpen: PropTypes.func,
  handleBookmark: PropTypes.func,
};

Filters.defaultProps = {
  solCheckbox: false,
  earthCheckbox: false,
  selectedRover: {},
  cameraOptions: [],
  selectedCamera: {},
  bookmarkOptions: [],
  selectedBookmark: '',
  setSolCheckbox: () => {},
  setEarthCheckbox: () => {},
  handleCamera: () => {},
  handleRover: () => {},
  handleSearch: () => {},
  handleOpen: () => {},
  handleBookmark: () => {},
};

export default Filters;
