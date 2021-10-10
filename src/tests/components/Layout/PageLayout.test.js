import { shallow } from 'enzyme';
import { Header } from 'components/Layout';

describe('tests on <Header />', () => {
  const wrapper = shallow(<Header />);

  test('Should render Header correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
