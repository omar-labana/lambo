import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Hero from '../../components/Hero';


describe('Hero Component', () => {
  const wrapper = shallow(<Hero />);

  it('exists', () => {
    expect(wrapper.find('Hero')).toBeTruthy();
  });

  it('has to match snap', () => {
    const home = renderer.create(<Hero />);
    expect(home).toMatchSnapshot();
  });
});