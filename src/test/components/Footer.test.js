import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('Footer Component', () => {
  const wrapper = shallow(<Footer />);

  it('exists', () => {
    expect(wrapper.find('Footer')).toBeTruthy();
  });

  it('has to match snap', () => {
    const home = renderer.create(<Footer />);
    expect(home).toMatchSnapshot();
  });
});
