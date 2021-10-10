import { shallow } from 'enzyme';
import App from 'App';

describe('tests on <App />', () => {
  const wrapper = shallow(<App />);

  test('Should render App correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
