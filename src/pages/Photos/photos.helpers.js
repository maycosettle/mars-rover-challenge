import isEmpty from 'lodash/isEmpty';

import { ROVER_TYPES } from 'utils/constants';
import { CURIOSITY_CAMERAS, OPPORTUNITY_SPIRIT_CAMERAS } from './photos.constants';

export const handleBookmarksOnStorage = (bookmark, setBookmarks) => {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  if (!isEmpty(bookmarks)) {
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    setBookmarks(bookmarks);
  } else {
    localStorage.setItem('bookmarks', JSON.stringify([bookmark]));
    setBookmarks([bookmark]);
  }
};

export const handleRoverCameras = (rover, setCamera) => {
  rover === ROVER_TYPES.CURIOSITY && setCamera(CURIOSITY_CAMERAS);
  rover === ROVER_TYPES.OPPORTUNITY && setCamera(OPPORTUNITY_SPIRIT_CAMERAS);
  rover === ROVER_TYPES.SPIRIT && setCamera(OPPORTUNITY_SPIRIT_CAMERAS);
};
