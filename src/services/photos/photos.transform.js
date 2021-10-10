const PhotosTransform = ({ camera, earth_date, id, img_src, rover, sol }) => ({
  camera: { name: camera?.name },
  earth_date,
  id,
  src: img_src,
  rover: {
    landing_date: rover?.landing_date,
    launch_date: rover?.launch_date,
    name: rover?.name,
    status: rover?.status,
  },
  sol,
});

const PhotosListTransform = (photos) => photos.map((photo) => PhotosTransform(photo));

export { PhotosTransform, PhotosListTransform };
