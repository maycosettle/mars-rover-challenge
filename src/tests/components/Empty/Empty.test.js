import { shallow } from 'enzyme';
import { Empty } from 'components/Empty';

describe('tests on <Empty />', () => {
  const wrapper = shallow(<Empty />);

  test('Should render Empty correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
