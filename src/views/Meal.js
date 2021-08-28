import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDish } from '../redux/slices/dish';

const Meal = () => {
  const { state } = useLocation();
  const { id } = state;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDish({ id }));
  }, [dispatch]);

  const dish = useSelector((state) => state.dish.dish);
  const {
    strArea, strCategory, strInstructions, strMeal, strMealThumb,
  } = dish;
  const {
    strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,
  } = dish;

  return (
    <div className="text-white text-2xl flex flex-col items center gap-10 mx-20">
      <p className="dancing-font text-7xl">{strMeal}</p>
      <div className="flex justify-around">
        <div className="text-3xl flex flex-col gap-10">
          <p>
            Country:
            <span className="dancing-font">{strArea}</span>
          </p>
          <p>
            Category:
            <span className="dancing-font">{strCategory}</span>
          </p>
        </div>
        <img className="w-1/4" src={strMealThumb} alt={strMeal} />
      </div>
      <div className="">
        <p><span className="dancing-font text-4xl">strIngredients: </span></p>
        <ul>
          <li>{strIngredient1}</li>
          <li>{strIngredient2}</li>
          <li>{strIngredient3}</li>
          <li>{strIngredient4}</li>
          <li>{strIngredient5}</li>
        </ul>
      </div>
      <p>
        <span className="dancing-font text-4xl">How to preapare: </span>
        {strInstructions}
      </p>
    </div>
  );
};

export default Meal;
