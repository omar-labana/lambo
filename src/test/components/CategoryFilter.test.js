import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CategoryFilter from '../../components/CategoryFilter';

describe('CategoryFilter Component', () => {
  const target = 'ALL';
  const handleFilter = () => '1';
  const wrapper = shallow(<CategoryFilter target={target} handleFilter={handleFilter} />);

  it('exists', () => {
    expect(wrapper.find('CategoryFilter')).toBeTruthy();
  });

  it('has to match snap', () => {
    const home = renderer.create(<CategoryFilter target={target} handleFilter={handleFilter} />);
    expect(home).toMatchSnapshot();
  });
});
