import { shallow } from 'enzyme';
import { Input } from 'components/Input';

describe('tests on <Input />', () => {
  const wrapper = shallow(<Input />);

  test('Should render Input correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
