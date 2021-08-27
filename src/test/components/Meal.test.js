import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Meal from '../../components/Meal';

const stl = {
  strMeal: '1',
  strMealThumb: '1',
  type: '1',
  idMeal: '1',
};

describe('Meal Component', () => {
  const wrapper = shallow(<Meal meal={stl} key={stl.idMeal} />);

  it('exists', () => {
    expect(wrapper.find('Meal')).toBeTruthy();
  });

  it('has correct props', () => {
    const propa = wrapper.props();
    expect(propa).toBeTruthy();
  });

  it('has to match snap', () => {
    const button = renderer.create(
      <BrowserRouter><Meal meal={stl} key={stl.idMeal} /></BrowserRouter>,

    );
    expect(button).toMatchSnapshot();
  });
});
