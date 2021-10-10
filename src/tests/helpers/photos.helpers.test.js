import { handleBookmarksOnStorage, handleRoverCameras } from 'pages/Photos/photos.helpers';
import { ROVER_TYPES } from 'utils/constants';

describe('Test on photos.herlpers.js', () => {
  const mockFn = jest.fn();

  test('should ', () => {
    const bookmark = { name: 'test', value: 'test' };
    handleBookmarksOnStorage(bookmark, mockFn);
    handleBookmarksOnStorage(bookmark, mockFn);

    expect(mockFn).toBeCalledTimes(2);
  });

  test('handleRoverCameras', () => {
    handleRoverCameras(ROVER_TYPES.CURIOSITY, mockFn);
    handleRoverCameras(ROVER_TYPES.OPPORTUNITY, mockFn);
    handleRoverCameras(ROVER_TYPES.SPIRIT, mockFn);

    expect(mockFn).toBeCalledTimes(3);
  });
});
