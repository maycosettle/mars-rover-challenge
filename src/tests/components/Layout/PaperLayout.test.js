import { shallow } from 'enzyme';
import { PaperLayout } from 'components/Layout';

describe('tests on <PaperLayout />', () => {
  const wrapper = shallow(<PaperLayout />);

  test('Should render PaperLayout correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
