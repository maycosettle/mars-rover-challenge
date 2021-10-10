import PropTypes from 'prop-types';

import useStyles from './styles';

const PhotoGallery = ({ photos }) => {
  const styles = useStyles();

  return (
    <ul role="list" className={styles.container}>
      {photos.map((photo) => (
        <li key={photo.src} className={styles.list}>
          <div className={styles.imageContainer}>
            <img src={photo.src} alt="mars" className={styles.image} />
          </div>
          <div className={styles.description}>
            <p className={styles.item}>Rover: {photo.rover.name}</p>
            <p className={styles.item}>Status: {photo.rover.status}</p>
            <p className={styles.item}>Camera: {photo.camera.name}</p>
            <p className={styles.item}>Sol: {photo.sol}</p>
            <p className={styles.item}>Earth_date: {photo.earth_date}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

PhotoGallery.propTypes = {
  photos: PropTypes.array,
};

PhotoGallery.defaultProps = {
  photos: [],
};

export default PhotoGallery;
