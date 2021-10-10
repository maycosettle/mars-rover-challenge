import { shallow } from 'enzyme';
import { PhotoLayout } from 'components/Layout';

describe('tests on <PhotoLayout />', () => {
  const wrapper = shallow(<PhotoLayout />);

  test('Should render PhotoLayout correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
