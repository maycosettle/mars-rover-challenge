import { shallow } from 'enzyme';
import { PhotoGallery } from 'components/PhotoGallery';

describe('tests on <PhotoGallery />', () => {
  const wrapper = shallow(<PhotoGallery photos={[]} />);

  test('Should render PhotoGallery correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
