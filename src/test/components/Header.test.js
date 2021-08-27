import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from '../../components/Header';

describe('Header Component', () => {
  const wrapper = shallow(<Header />);

  it('exists', () => {
    expect(wrapper.find('Header')).toBeTruthy();
  });

  it('has to match snap', () => {
    const home = renderer.create(<Header />);
    expect(home).toMatchSnapshot();
  });
});
