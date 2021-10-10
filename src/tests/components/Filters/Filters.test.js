import { shallow } from 'enzyme';
import { Filters } from 'components/Filters';

describe('tests on <Filters />', () => {
  const wrapper = shallow(<Filters />);

  test('Should render Filters correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
