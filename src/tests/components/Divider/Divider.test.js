import { shallow } from 'enzyme';
import { Divider } from 'components/Divider';

describe('tests on <Divider />', () => {
  const wrapper = shallow(<Divider />);

  test('Should render Divider correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
