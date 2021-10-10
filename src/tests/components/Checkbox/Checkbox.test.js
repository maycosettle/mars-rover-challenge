import { shallow } from 'enzyme';
import { Checkbox } from 'components/Checkbox';

describe('tests on <Checkbox />', () => {
  const wrapper = shallow(<Checkbox />);

  test('Should render Checkbox correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
