import { shallow } from 'enzyme';
import { Pagination } from 'components/Pagination';

describe('tests on <Pagination />', () => {
  const wrapper = shallow(<Pagination />);

  test('Should render Pagination correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
