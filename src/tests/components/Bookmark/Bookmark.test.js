import { shallow } from 'enzyme';
import { Bookmark } from 'components/Bookmark';

describe('tests on <Bookmark />', () => {
  const wrapper = shallow(<Bookmark />);

  test('Should render Bookmark correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
