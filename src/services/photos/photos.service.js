import { privateGet } from 'api';
import { MARS_ROVER_URL } from 'services/services.constants';

import * as Transforms from './photos.transform';

export const getMarsRoverPhotos = async ({ params }) => {
  const { data, problem } = await privateGet({
    endpoint: MARS_ROVER_URL(params?.rover || 'Curiosity'),
    params: {
      ...(params?.camera && { camera: params?.camera }),
      ...(params?.earth_date && { earth_date: params?.earth_date }),
      ...(params?.sol && { sol: params?.sol }),
      ...(params?.page && { page: params?.page }),
      api_key: '7ucBojYwFjVVTFY2dUiyZoRX3jXgVYN6e7eS3GiA',
    },
  });

  if (problem) {
    return { data: null, problem };
  } else {
    const result = Transforms.PhotosListTransform(data?.photos);

    return { data: { data: result }, problem: null };
  }
};
