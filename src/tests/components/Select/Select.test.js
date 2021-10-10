import { shallow } from 'enzyme';
import { Select } from 'components/Select';

describe('tests on <Select />', () => {
  const options = [
    { value: 'FHAZ', name: 'FHAZ', fullName: 'Front Hazard Avoidance Camera' },
    { value: 'RHAZ', name: 'RHAZ', fullName: 'Rear Hazard Avoidance Camera' },
    { value: 'MAST', name: 'MAST', fullName: 'Mast Camera' },
  ];
  const wrapper = shallow(<Select options={options} selected={options[0]} onChange={jest.fn()} placeholder="test" />);

  test('Should render Select correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
