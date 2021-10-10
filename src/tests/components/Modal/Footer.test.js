import { shallow } from 'enzyme';
import { Footer } from 'components/Modal/Footer';

describe('tests on <Footer />', () => {
  const wrapper = shallow(<Footer />);

  test('Should render Footer correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
