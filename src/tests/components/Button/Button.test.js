import { shallow } from 'enzyme';
import { Button } from 'components/Button';

describe('tests on <Button />', () => {
  const wrapper = shallow(<Button />);

  test('Should render Button correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
