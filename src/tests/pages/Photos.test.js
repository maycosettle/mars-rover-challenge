import { shallow } from 'enzyme';
import { Photos } from 'pages';

describe('tests on <Photos />', () => {
  const wrapper = shallow(<Photos photos={[]} />);

  test('Should render Photos correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
