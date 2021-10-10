import { shallow } from 'enzyme';
import { Modal } from 'components/Modal';

describe('tests on <Modal />', () => {
  const wrapper = shallow(<Modal />);

  test('Should render Modal correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
