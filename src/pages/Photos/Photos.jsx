import { usePagination, useRequestData } from 'hooks';
import { useState } from 'react';
import { PhotosService } from 'services';

// utils
import { handleBookmarksOnStorage, handleRoverCameras } from './photos.helpers';

// components
import { Header, PaperLayout, PhotoLayout } from 'components/Layout';
import { PhotoGallery } from 'components/PhotoGallery';
import { Pagination } from 'components/Pagination';
import { Bookmark } from 'components/Bookmark';
import { Divider } from 'components/Divider';
import { Empty } from 'components/Empty';
import { Modal } from 'components/Modal';
import { Filters } from 'components/Filters';

const Photos = () => {
  const [selectedRover, setSelectedRover] = useState({});
  const [selectedCamera, setSelectedCamera] = useState({});
  const [cameraOptions, setCameraOptions] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedBookmark, setSelectedBookmark] = useState({});
  const [bookmark, setBookmark] = useState('');
  const [bookmarkOptions, setBookmarkOptions] = useState(JSON.parse(localStorage.getItem('bookmarks')) || []);
  const [solCheckbox, setSolCheckbox] = useState(false);
  const [earthCheckbox, setEarthCheckbox] = useState(false);

  const [{ data }, getMarsRoverPhotos] = useRequestData({
    service: PhotosService.getMarsRoverPhotos,
  });

  const earthDate = earthCheckbox ? '2020-09-22' : '2021-10-06';
  const solValue = solCheckbox ? 2890 : '';

  const {
    data: photos,
    currentPage,
    handleNextPage,
    handlePreviousPage,
    handlePageClick,
  } = usePagination({
    call: getMarsRoverPhotos,
    params: {
      rover: selectedRover?.name,
      camera: selectedCamera?.value,
      sol: solValue,
      earth_date: earthDate,
    },
    list: data,
  });

  const handleRover = (rover) => {
    setSelectedRover(rover);
    handleRoverCameras(rover.name, setCameraOptions);
  };

  const handleCamera = (camera) => {
    if (camera.name === 'ALL') {
      return setSelectedCamera('');
    }
    return setSelectedCamera(camera);
  };

  const handleSearch = () => {
    getMarsRoverPhotos({
      params: {
        rover: selectedRover.name,
        camera: selectedCamera.value,
        sol: solValue,
        earth_date: earthDate,
        page: 1,
      },
    });
  };

  const handleOpen = () => setOpenModal(true);

  const handleClose = () => setOpenModal(false);

  const handleBookmarkChange = (e) => setBookmark(e.target.value);

  const handleSubmit = () => {
    const bookmarkValues = {
      name: bookmark,
      value: {
        rover: selectedRover?.name,
        camera: selectedCamera?.value,
        earth_date: earthDate,
        sol: solValue,
      },
    };
    handleBookmarksOnStorage(bookmarkValues, setBookmarkOptions);
    handleClose();
  };

  const handleBookmark = (bookmark) => {
    setSelectedBookmark(bookmark);
    getMarsRoverPhotos({
      params: {
        rover: bookmark.value.rover,
        camera: bookmark.value.camera,
        sol: bookmark.value.sol,
        earth_date: bookmark.value.earth_date,
        page: 1,
      },
    });
  };

  return (
    <>
      <Header title="Mars Rover Challenge" />
      <PaperLayout>
        <PhotoLayout>
          <Filters
            {...{
              solCheckbox,
              setSolCheckbox,
              earthCheckbox,
              setEarthCheckbox,
              selectedRover,
              handleRover,
              cameraOptions,
              selectedCamera,
              handleCamera,
              handleSearch,
              handleOpen,
              bookmarkOptions,
              selectedBookmark,
              handleBookmark,
            }}
          />
          <Divider />
          {Boolean(data?.length) && (
            <PhotoLayout>
              <PhotoGallery photos={photos} />
              <Pagination
                onPageUp={handleNextPage}
                onPageDown={handlePreviousPage}
                onPageClick={handlePageClick}
                currentPage={currentPage}
              />
            </PhotoLayout>
          )}
        </PhotoLayout>
        {Boolean(!data?.length) && <Empty />}
        <Modal openModal={openModal} onClose={handleClose} onSubmit={handleSubmit}>
          <Bookmark onChange={handleBookmarkChange} />
        </Modal>
      </PaperLayout>
    </>
  );
};

export default Photos;
